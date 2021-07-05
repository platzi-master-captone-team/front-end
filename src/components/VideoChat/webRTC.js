//import  turnConfig from './config';

//import io from '../../server';

import { io } from 'socket.io-client';

export const videoChatLoad = () => {
  
    if(window.location.pathname.startsWith('/chat')) {
      
    console.log('starting script');  
      //Defining some global utility variables
    let isChannelReady = false;
    let isInitiator = false;
    let isStarted = false;
    let localStream;
    let peerConnection;
    let dataChannel;
    let remoteStream;
    
    let turnConfig = {
      iceServers: [
        {
          urls: ['stun:stun.l.google.com:19302'],
        },
      ],
    };
    //console.log(turnConfig)
    //Initialize turn/stun server
    //turnconfig will be defined in /config.js
    const pcConfig = turnConfig;
    
    //Set local stream constraints
    const localStreamConstraints = {
      audio: true,
      video: true,
    };
    
    // Prompting for room name:
    let room = window.location.pathname.split('/')[2];
    
    //Initializing socket.io
    const socket = io('https://rubdevs.herokuapp.com');
    
    //Ask server to add in the room if room name is provided by the user
    if (room !== '') {
      socket.emit('create or join', room);
      console.log('Attempted to create or  join room', room);
    }
    
    //Defining socket events
    
    //Event - Client has created the room i.e. is the first member of the room
    socket.on('created', function (room) {
      console.log('Created room ' + room);
      isInitiator = true;
    });
    
    socket.on('ready', (room) => {
      console.log('Channel for signaling ready');
      isChannelReady = true;
    });
    
    //Event - Room is full
    socket.on('full', function (room) {
      console.log('Room ' + room + ' is full');
    });
    
    //Event - server asks to log a message
    // socket.on('log', function (array) {
    //   console.log.apply(console, array);
    // });
    
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
    
    //Event - for sending meta for establishing a direct connection using WebRTC
    //The Driver code
    socket.on('message', function (message, room) {
      console.log('Client received message:', message, room);
      if (message === 'got user media') {
        maybeStart();
      }
      if (message.type) {
        const action = events[message.type];
        action(message);
      }
    });
    
    //Function to send message in a room
    function sendMessage(message, room) {
      console.log('Client sending message: ', message, room);
      socket.emit('message', message, room);
    }
    
    //Displaying Local Stream and Remote Stream on webpage
    const localVideo = document.querySelector('#localVideo');
    const remoteVideo = document.querySelector('#remoteVideo');
    console.log('Going to find Local media');
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: {width: 300, height: 200},
      })
      .then(gotStream)
      .catch(function (e) {
        alert('getUserMedia() error: ' + e.name);
      });
    
      
    
    //If found local stream
    function gotStream(stream) {
      console.log('Adding local stream.');
      localStream = stream;
      document.querySelector('#localVideo').srcObject = stream;
      document.querySelector('#localVideo').onloadedmetadata = function(e) {
      document.querySelector('#localVideo').play();
      };
      sendMessage('got user media', room);
      if (isInitiator) {
        maybeStart();
      }
    }
    
    console.log('Getting user media with constraints', localStreamConstraints);
    
    //If initiator, create the peer connection
    function maybeStart() {
      //console.log('>>>>>>> maybeStart() ', isStarted, localStream, isChannelReady);
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
    
    //Sending bye if user closes the window
    window.addEventListener("beforeunload", (e) => { 
      console.log('ev list beforeunload')
      sendMessage('bye', room);
      stop();
    });
    
    //Creating peer connection
    function createPeerConnection() {
      try {
        peerConnection = new RTCPeerConnection(pcConfig);
        //peerConnection.ondatachannel = handleDataChannel();
        peerConnection.onicecandidate = handleIceCandidate;
        peerConnection.onaddstream = handleRemoteStreamAdded;
        peerConnection.onremovestream = handleRemoteStreamRemoved;
        console.log('Created RTCPeerConnnection');
      } catch (e) {
        //console.log('Failed to create PeerConnection, exception: ' + e.message);
        alert('Cannot create RTCPeerConnection object.');
        return;
      }
    }
    
    //Function to handle data Channel
    function handleDataChannel(event) {
      dataChannel = event.channel;
    }
    
    //Function to handle Ice candidates generated by the browser
    function handleIceCandidate(event) {
      console.log('icecandidate event: ', event);
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
        console.log('End of candidates.');
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
      document.querySelector('#remoteVideo').srcObject = remoteStream;
      document.querySelector('#remoteVideo').onloadedmetadata = function(e) {
        document.querySelector('#remoteVideo').play();
      };
    }
    
    function handleRemoteStreamRemoved(event) {
      console.log('Remote stream removed. Event: ', event);
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
      isStarted = false;
      peerConnection.close();
      peerConnection = null;
    }
    
    }
  
  
    
  
}

export const muteAudio = () => {
  let localVideo = document.querySelector('#localVideo');
  let enabled = localVideo.srcObject.getTracks()[0].enabled;
  localVideo.srcObject.getTracks()[0].enabled = !enabled;
}

export const muteVideo = () => {
  let localVideo = document.querySelector('#localVideo');
  let enabled = localVideo.srcObject.getTracks()[1].enabled;
  localVideo.srcObject.getTracks()[1].enabled = !enabled;
}








