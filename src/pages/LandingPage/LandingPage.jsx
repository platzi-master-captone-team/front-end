import { 
  SocialTitle,
  SocialLink,
  SocialIcon,
  SocialBar,
  Landing,
  MainTitle,
  Subtitle,
  Social,
  Button,
  Main,
  Hero,
  SmallHero
} from "./LandingPage.styles";

import './metascript';

import youtube from '../../assets/images/youtube.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import instagram from '../../assets/images/instagram.svg';

function LandingPage () {
  return (
    <Landing>
      <Main>
        <MainTitle>Los Mejores Expertos en un solo lugar</MainTitle>
        <Subtitle>Consultify es un marketplace que permite conectar a empresas, fundaciones y emprendedores de todo el mundo con developers verificados de Colombia, México y Ecuador.  </Subtitle>
        <SmallHero/>
        <Button to='/buscar'>Encuentra un Experto</Button>
        <Social>
          <SocialTitle>Sigamos en Contacto</SocialTitle>
          <SocialBar>
          <SocialLink href={'https://www.youtube.com'} rel="noopener" rel="noreferrer"><SocialIcon src={youtube}/></SocialLink>
          <SocialLink href={'https://www.facebook.com'} rel="noopener" rel="noreferrer"><SocialIcon src={facebook}/></SocialLink>
          <SocialLink href={'https://www.twitter.com'} rel="noopener" rel="noreferrer"><SocialIcon src={twitter}/></SocialLink>
          <SocialLink href={'https://www.linkedin.com/company/consultify-tech/'} rel="noopener" rel="noreferrer"><SocialIcon src={linkedin}/></SocialLink>
          <SocialLink href={'https://www.instagram.com'} rel="noopener" rel="noreferrer"><SocialIcon src={instagram}/></SocialLink>
          </SocialBar>
        </Social>
      </Main>
      <Hero/>
      
      
    </Landing>
  );
}

export default LandingPage;