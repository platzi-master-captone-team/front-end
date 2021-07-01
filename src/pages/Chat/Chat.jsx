import { MainChat } from './Chat.styles';
import { useState, useEffect } from 'react';

import VideoChat from '../../components/VideoChat/VideoChat';

const Chat = () => {

    const [avatar, setAvatar] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');

    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setAvatar(urlParams.get('avatar'))
        setDate(urlParams.get('date'))
        setTime(urlParams.get('time'))
        setName(urlParams.get('name'))
    })

    return(
        <MainChat>
            <VideoChat>
                
            </VideoChat>
        </MainChat>
    )
}

export default Chat;