import { useContext } from "react";
import { BannerContainer, BannerMessage, BannerLink, CloseBanner } from "./Banner.styles";

import { BannerContext } from '../../utils/bannerStatus';
import { LoginContext } from '../../utils/loginStatus';
import { useEffect } from "react";

const Banner = () => {
    const { login } = useContext(LoginContext);

    const { banner, setBanner } = useContext(BannerContext);
    
    function closeBanner () {
        setBanner(false);
    }

    useEffect(() => {
        setBanner({show: login.status, type:'chat', message:'Tienes un cita con tu cliente.'});
      }, [login]);

    return(
        <BannerContainer $show={banner.show} >
            <BannerMessage>{banner.message} 
                <BannerLink id="chat" to="/chat/holi" type={banner.type}>Únete Ahora</BannerLink>
                <BannerLink id="profile" to="/profile/dashboard" type={banner.type}>Ir al Perfil</BannerLink>
            </BannerMessage>
            <CloseBanner onClick={closeBanner}>X</CloseBanner>
        </BannerContainer>
    )
}

export default Banner;