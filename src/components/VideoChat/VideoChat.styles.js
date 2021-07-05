import styled from "styled-components";

import micOn from '../../assets/images/mic-on.svg';
import micOff from '../../assets/images/mic_off.svg';
import camOn from '../../assets/images/videocam-on.svg';
import camOff from '../../assets/images/videocam_off.svg';
import hangUp from '../../assets/images/call_end.svg';

import avatar from '../../assets/images/avatar.png';
import avatar2 from '../../assets/images/avatar2.png';

export const ChatMain = styled.section`
    display: ${props => props.status === 'active' ? 'grid' : 'none'};
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 3rem;
    justify-items: center;
    align-items: start;
    margin: auto;
    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0.5rem;
    }
`
export const MeetingDetails = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem
`
export const MeetingTitle = styled.p`
    font-weight: 700;
    padding: 0.5rem;
`

export const MeetingDate = styled.p`
    
`

export const MeetingTime = styled.p`
    padding-top: 0.2rem;    
`

export const VideoUser = styled.div`
    display: ${props => props.status ? 'none' : 'flex'};
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    
`

export const VideoContainer = styled.div`
    display: ${props => props.status ? 'none' : 'flex'};
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
`

export const Video = styled.video.attrs(props => ({
    autoplay: props.autoplay,
  }))
`
    border: 2px solid ${props => props.status ? 'var(--color-tertiary)' : 'red'};
    border-radius: 16px;
    width: 302px;
    height: 202px;
    background: var(--color-tertiary);
    display: ${props => props.status ? 'inline' : 'none'};
`

export const VideoBar = styled.div`
    display: flex;
    justify-content:center;
    padding: 0.5rem;
`

export const VideoButton = styled.img.attrs(props => ({
    src: props.type === 'audio' ? (props.audio === true ? micOn : micOff) : props.video === true ? camOn : camOff,
  }))

`
    font-family: var(--font-primary);
    font-weight: bold;
    font-size: var(--font-medium);
    width: 50px;
    color: black;
    padding: 0.5rem 1rem;
    border-style: none;
    background: var(--color-lightgrey);
    border-radius: 15px;
    text-decoration: none;
    margin-right: 1rem;
`

export const EndCallButton = styled.img.attrs(props => ({
    src: hangUp,
  }))

`
    font-family: var(--font-primary);
    font-weight: bold;
    font-size: var(--font-medium);
    width: 50px;
    color: black;
    padding: 0.5rem 1rem;
    border-style: none;
    background: var(--color-tertiary);
    border-radius: 15px;
    text-decoration: none;
    margin-right: 1rem;
`

export const RemoteUserDetails = styled.aside`
    display: flex;
    justify-content: center;
    padding: 0.5rem
`
export const RemoteAvatar = styled.img
  `
    display: flex;
    justify-content: center;
    border-radius: 50%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    width: 40px;
    
`
export const RemoteName = styled.p`
    font-weight: 700;
    padding: 0.5rem;
    text-align: center;
`

export const Countdown = styled.div`
    display: ${props => props.status === 'active' ? 'none' : 'flex'};
    background: var(--color-lightgrey);
    margin: 3rem;
    padding: 1rem;
    border-radius: 15px;
`


export const CountdownMessage = styled.p`
    font-weight: 700;
    padding: 0.5rem;
    text-align: center;
    display: ${props => props.status === props.type ? 'inline' : 'none'};
`

export const RemoteMessage = styled.p`
    font-weight: 700;
    padding: 0.5rem;
    text-align: center;
    display: ${props => props.status ? 'inline' : 'none'};
`

export const ChatLink = styled.button`
    font-family: var(--font-primary);
    font-weight: bold;
    color: white;
    border-style: none;
    background: var(--color-tertiary);
    border-radius: 15px;
    text-decoration: none;
    margin: 0.5rem 1rem 0;
    padding: 0.3rem 1rem;
    display: ${props => props.status ? 'inline' : 'none'};
    max-width: 320px;
    text-align: center;
    margin: 0 auto;
`