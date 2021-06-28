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
    CountdownMessage
} from './VideoChat.styles';

const VideoChat = () => {
    
    const [autoplay, setAutoplay] = useState('autoplay');
    const [muted, setMuted] = useState('muted');
    const [playsinline, setPlaysinline] = useState('playsinline');

    const [status, setStatus] = useState('active');

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

    useEffect(() => {
        console.log('Chat Component');
        if (status === 'active') {
            videoChatLoad();
        }
        
    },[status]);

    return(
        <>
        <MeetingDetails>
            <MeetingTitle>Cita con Ana Rojas</MeetingTitle>
            <MeetingDate>Viernes 2 de Julio 2021</MeetingDate>
            <MeetingTime>11:00 - 12:00</MeetingTime>
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
                    <VideoButton onClick={handleCam} type="video" video={isCamEnabled}/>
                    <VideoButton onClick={handleMic} type="audio" audio={isMicEnabled}/>
                </VideoBar>
                
            </VideoUser>
            <VideoUser>
                <Video id="remoteVideo" autoplay playsinline></Video>
                <RemoteUserDetails>
                    <RemoteAvatar role="Client"/>
                    <RemoteName>Ana Rojas</RemoteName>
                </RemoteUserDetails>
            </VideoUser>
        </ChatMain>
        </>
    )
}

export default VideoChat;