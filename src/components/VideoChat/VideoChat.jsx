import { videoChatLoad, muteAudio, muteVideo } from './webRTC';
import io from "socket.io-client";
import Peer from "simple-peer";

import {useLocation} from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';

import {
    Video,
    ChatMain,
    VideoBar,
    VideoButton,
    VideoUser,
    RemoteUserDetails,
    RemoteAvatar,
    RemoteName,
    MeetingDetails,
    MeetingTitle,
    MeetingDate,
    MeetingTime,
    Countdown,
    CountdownMessage,
    RemoteMessage,
    EndCallButton
} from './VideoChat.styles';

import hangUp from '../../assets/images/call_end.svg';

const VideoChat = () => {
    let location = useLocation();

    let remotePic = '';

    const [avatar, setAvatar] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');

    const [status, setStatus] = useState('');
    const [isMicEnabled, setIsMicEnabled] = useState(true);
    const [isCamEnabled, setIsCamEnabled] = useState(true);

    const [localStatus, setLocalStatus] = useState(false);
    const [remoteStatus, setRemoteStatus] = useState(false);

    /* const [isChannelReady, setIsChannelReady] = useState(false);
    const [isInitiator, setIsInitiator] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [localStream, setLocalStream] = useState('');
    const [peerConnection, setPeerConnection] = useState('');
    const [remoteStream, setRemoteStream] = useState(''); */

    let isChannelReady = false;
    let isInitiator = false;
    let isStarted = false;
    let localStream;
    let peerConnection;
    let remoteStream;


    const [room, setRoom] = useState(window.location.pathname.split('/')[1]);

    let pcConfig = {
        iceServers: [
          {
            urls: ['stun:stun.l.google.com:19302'],
          },
        ],
      };

    const userVideo = useRef();
    const partnerVideo = useRef();
    const socket = useRef();  

    function handleCam (){
        setIsCamEnabled(!isCamEnabled);
        muteVideo();
    }

    function handleMic (){
        setIsMicEnabled(!isMicEnabled);
        muteAudio();
    }

    function handleEndCall (){
        console.log('hangup');
        userVideo.current.srcObj.stop()
        console.log(localStream)
        
    }

    function stopStream() {
        console.log('stop stream')
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: {width: 300, height: 200},
            })
            .then(stream => {
                localStream = stream;
                localStream.getTracks().forEach(function(track) {
                    track.stop();
                  });
            })
            .catch(function (e) {
                console.log('getUserMedia() error: ' + e.name);
            });
    }

    useEffect(() => {
        if (status === 'active') {
            //Initializing socket.io
            socket.current = io.connect("https://rubdevs.herokuapp.com");

            console.log('Going to find Local media');
            navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: {width: 300, height: 200},
            })
            .then(stream => {
                localStream = stream;
                setLocalStatus(true);
                gotStream(stream);
            })
            .catch(function (e) {
                console.log('getUserMedia() error: ' + e.name);
            });
            
            
            if (room !== '') {
                socket.current.emit('create or join', room);
                console.log('Attempted to create or  join room', room);
            }            

            //Defining socket events
            //Event - Client has created the room i.e. is the first member of the room
            socket.current.on('created', function (room) {
                console.log('Created room ' + room);
                isInitiator =true;
            });
            
            socket.current.on('ready', (room) => {
                console.log('Channel for signaling ready');
                isChannelReady = true;
            });
            
            //Event - Room is full
            socket.current.on('full', function (room) {
                console.log('Room ' + room + ' is full');
            });
            
            socket.current.on("create or join", (room) => {
                setRoom(room);
            });

            socket.current.on('message', function (message, room) {
                console.log('Client received message:', message, room);
                if (message === 'got user media') {
                  maybeStart();
                }
                if (message.type) {
                  const action = events[message.type];
                  action(message);
                }
              });
        }
        
    },[status]);

    // Events
    const events = {
        offer: handleOffer,
        answer: handleAnswer,
        candidate: handleCandidate,
        bye: handleBye,
      };
    
      function handleOffer(message) {
        if (!isInitiator && !isStarted) {
          maybeStart();
        }
        peerConnection.setRemoteDescription(new RTCSessionDescription(message));
        doAnswer();
      }
      function handleAnswer(message) {
        if (isStarted) {
          peerConnection.setRemoteDescription(new RTCSessionDescription(message));
        }
      }
      function handleCandidate(message) {
        if (isStarted) {
          let candidate = new RTCIceCandidate({
            sdpMLineIndex: message.label,
            candidate: message.candidate,
          });
          peerConnection.addIceCandidate(candidate);
        }
      }
      function handleBye() {
        if (isStarted) {
          handleRemoteHangup();
        }
      }
      //Function to send message in a room
        function sendMessage(message, room) {
            console.log('Client sending message: ', message, room);
            socket.current.emit('message', message, room);
        }

    //If found local stream
    function gotStream(stream) {
        console.log('Adding local stream.');
        userVideo.current.srcObject = stream;
        userVideo.current.onloadedmetadata = function(e) {
            userVideo.current.play();
        };
        sendMessage('got user media', room);
        if (isInitiator) {
            maybeStart(stream);
        }
      }
    
    //If initiator, create the peer connection
    function maybeStart(stream) {
        console.log('>>>>>>> maybeStart() ');
        console.log('>>>>>>> maybeStart() ', 'isStarted: '+ isStarted);
        console.log('>>>>>>> maybeStart() ', 'localStream: '+ localStream);
        console.log('>>>>>>> maybeStart() ', 'isChannelReady: '+isChannelReady);
        console.log('remoteStatus: '+ remoteStream)
        if (!isStarted && typeof localStream !== 'undefined' && isChannelReady) {
          console.log('>>>>>> creating peer connection');
          createPeerConnection();
          peerConnection.createDataChannel('chat');
          peerConnection.addStream(localStream);
          isStarted = true;
          console.log('isInitiator', isInitiator);
          if (isInitiator) {
            doCall();
          }
        }
      }
    
    //Creating peer connection
    function createPeerConnection() {
        try {
          peerConnection = new RTCPeerConnection(pcConfig);
          console.log(peerConnection);
          peerConnection.onicecandidate = handleIceCandidate;
          peerConnection.onaddstream = handleRemoteStreamAdded;
          peerConnection.onremovestream = handleRemoteStreamRemoved;
          console.log('Created RTCPeerConnnection');

        } catch (e) {
          console.log('Failed to create PeerConnection, exception: ' + e.message);
          alert('Cannot create RTCPeerConnection object.');
          return;
        }
      }

    //Function to handle Ice candidates generated by the browser
    function handleIceCandidate(event) {
        //console.log('icecandidate event: ', event);
        if (event.candidate) {
          sendMessage(
            {
              type: 'candidate',
              label: event.candidate.sdpMLineIndex,
              id: event.candidate.sdpMid,
              candidate: event.candidate.candidate,
            },
            room,
          );
        } else {
          //console.log('End of candidates.');
        }
      }
      
      function handleCreateOfferError(event) {
        console.log('createOffer() error: ', event);
      }
      
      //Function to create offer
      function doCall() {
        console.log('Sending offer to peer');
        peerConnection.createOffer(setLocalAndSendMessage, handleCreateOfferError);
      }
      
      //Function to create answer for the received offer
      function doAnswer() {
        console.log('Sending answer to peer.');
        peerConnection
          .createAnswer()
          .then(setLocalAndSendMessage, onCreateSessionDescriptionError);
      }

      //Function to set description of local media
    function setLocalAndSendMessage(sessionDescription) {
        peerConnection.setLocalDescription(sessionDescription);
        console.log('setLocalAndSendMessage sending message', sessionDescription);
        sendMessage(sessionDescription, room);
      }
      
      function onCreateSessionDescriptionError(error) {
        //trace('Failed to create session description: ' + error.toString());
      }
      
      //Function to play remote stream as soon as this client receives it
      function handleRemoteStreamAdded(event) {
        console.log('Remote stream added.');
        remoteStream = event.stream;
        setRemoteStatus(true);
        console.log('Remote Stream: '+ remoteStream)
        partnerVideo.current.srcObject = remoteStream;
        partnerVideo.current.onloadedmetadata = function(e) {
            partnerVideo.current.play();
        };
      }
      
      function handleRemoteStreamRemoved(event) {
        console.log('Remote stream removed. Event: ', event);
        remoteStream.getTracks().forEach((track) => {
            track.stop();
        });
        partnerVideo.current.srcObject = null;
      }
      
      function hangup() {
        console.log('Hanging up.');
        stop();
        
        sendMessage('bye', room);

      }
      
      function handleRemoteHangup() {
        console.log('Session terminated.');
        stop();
        isInitiator = false;
      }
      
      function stop() {
        console.log("Peer Conn: " + peerConnection);
        isStarted =false;
        if (peerConnection){
            peerConnection.removeStream(localStream)
            peerConnection.close();
            peerConnection = null;
        }
      }

    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setAvatar(urlParams.get('avatar'))
        setDate(urlParams.get('date'))
        setTime(urlParams.get('time'))
        setName(urlParams.get('name'))
        setStatus(urlParams.get('status'))
        remotePic = urlParams.get('avatar');
    })

    useEffect(()=>{
       if (localStream) {
        hangup();
       }
    }, [location])

    return(
        <>
        <MeetingDetails>
            <MeetingTitle>Cita con {name}</MeetingTitle>
            <MeetingDate>{date}</MeetingDate>
            <MeetingTime>{time}</MeetingTime>
            <Countdown status={status}>
                <CountdownMessage type="scheduled" status={status}>Tu cita estará lista en:</CountdownMessage> 
                <CountdownMessage type="scheduled" status={status}> 06d: 05h: 40m</CountdownMessage>

                <CountdownMessage type="done" status={status}>Cita Finalizada</CountdownMessage> 
            </Countdown>
        </MeetingDetails>
        <ChatMain status={status}>
            <VideoUser>
                <Video status={localStatus} id="localVideo" playsInline muted ref={userVideo} autoPlay />
                <RemoteMessage status={!localStatus}></RemoteMessage>
                <VideoBar>
                    <VideoButton alt="Video On/Off" onClick={handleCam} type="video" video={isCamEnabled}/>
                    <VideoButton alt="Mic On/Off" onClick={handleMic} type="audio" audio={isMicEnabled}/>
                    
                    
                </VideoBar>
            </VideoUser>
            <VideoUser>
                <Video status={remoteStatus}  id="remoteVideo" playsInline ref={partnerVideo} autoPlay ></Video>
                <RemoteMessage status={!remoteStatus}>Esperando al usuario remoto</RemoteMessage>
                <RemoteUserDetails>
                    <RemoteAvatar src={'https://randomuser.me/api/portraits/'+avatar+'.jpg'} role="Client"/>
                    <RemoteName>{name}</RemoteName>
                </RemoteUserDetails>
            </VideoUser>
        </ChatMain>
        </>
    )
}

export default VideoChat;