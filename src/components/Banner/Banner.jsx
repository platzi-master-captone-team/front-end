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
        let bannerMsg = login.role === 'Experto' ? 'Tienes un cita con tu cliente' : 'Tienes un cita con tu consultor';
        setBanner({show: login.status, type:'chat', message: bannerMsg});
      }, [login]);

    return(
        <BannerContainer $show={banner.show} >
            <BannerMessage>{banner.message} 
                <BannerLink id="chat" to="/chat/A123B4?name=Ana%20Rojas&avatar=women/51&date=Jueves%2015%20Julio%202021&time=17:00%20-%2018:00&status=active" 
                type={banner.type}>Únete Ahora</BannerLink>
                <BannerLink id="profile" to="/profile/dashboard" type={banner.type}>Ir al Perfil</BannerLink>
            </BannerMessage>
            <CloseBanner onClick={closeBanner}>X</CloseBanner>
        </BannerContainer>
    )
}

export default Banner;