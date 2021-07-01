// Import script containing WebRTC related functions
import { videoChatLoad, muteAudio, muteVideo } from './webRTC';
//Import TURN config
//import './config.js';
// Import WebRTC adapter for compatibility with all the browsers
//import adapter from 'webrtc-adapter';
//Import SocketIO for signalling
//import '/socket.io/socket.io.js';

import { useState, useEffect } from 'react';

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

const VideoChat = () => {

    let remotePic = '';
    const [avatar, setAvatar] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');

    const [autoplay, setAutoplay] = useState('autoplay');
    const [status, setStatus] = useState('');
    const [isMicEnabled, setIsMicEnabled] = useState(true);
    const [isCamEnabled, setIsCamEnabled] = useState(true);

    function handleCam (){
        setIsCamEnabled(!isCamEnabled);
        muteVideo();
    }

    function handleMic (){
        setIsMicEnabled(!isMicEnabled);
        muteAudio();
    }

    function handleCall (){
        console.log('hangup');
        
    }

    useEffect(() => {
        console.log('Chat Component');
        if (status === 'active') {
            videoChatLoad();
        }
        
    },[status]);

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
                <Video id="localVideo"  autoplay={autoplay} />
                <VideoBar>
                    <VideoButton alt="Video On/Off" onClick={handleCam} type="video" video={isCamEnabled}/>
                    <VideoButton alt="Terminar Llamada" onClick={handleMic} type="audio" audio={isMicEnabled}/>
                    
                </VideoBar>
            </VideoUser>
            <VideoUser>
                <Video id="remoteVideo" autoplay="autoplay"> </Video>
                <RemoteMessage ></RemoteMessage>
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