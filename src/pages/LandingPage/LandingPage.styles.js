import styled from "styled-components";

import { Link } from 'react-router-dom';
import hero from '../../assets/images/hero.png';

export const Landing = styled.main`
    max-width: 1366px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 3rem;
    justify-items: center;
    align-items: center;
    margin: auto;
`

export const Main = styled.section`
    display: flex;
    flex-direction: column;
`

export const MainTitle = styled.span`
    font-weight: bold;
    font-family: var(--font-secondary);
    font-size: 2rem;
`

export const Subtitle = styled.p`
    font-family: var(--font-secondary);
    font-size: var(--font-medium);
    color: #777777;
    margin: 2rem 0;
`

export const Social = styled.section`
    margin-top: 5rem;

`

export const SocialTitle = styled.p`
    font-weight: bold;
    font-family: var(--font-secondary);

`
export const SocialBar = styled.div`
    display: flex;
    justify-items: center;
`

export const SocialLink = styled.a.attrs((props) => ({
    href: props.href,
    target: '_blank'
}))`
    font-weight: bold;
    font-family: var(--font-secondary);
    text-decoration: none;
    cursor: pointer;
    color: black;
`

export const SocialIcon = styled.img.attrs((props) => ({
    src: props.src
}))`
    width: 25px;
    height:25px;
    margin: 0.3rem;
`

export const Button = styled(Link)`
    font-family: Karla;
    font-weight: bold;
    font-size: var(--font-large);
    color: white;
    padding: 1rem;
    border-style: none;
    background: var(--color-tertiary);
    border-radius: 15px;
    text-decoration: none;
    text-align: center;
    max-width: 320px;
`

export const Hero = styled.img`
    max-width: 1366px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`
Hero.defaultProps = {
    src: hero
};