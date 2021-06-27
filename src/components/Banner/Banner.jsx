import { useContext } from "react";
import { BannerContainer, BannerMessage, BannerLink, CloseBanner } from "./Banner.styles";

import { BannerContext } from '../../utils/bannerStatus';

const Banner = () => {

    const { banner, setBanner } = useContext(BannerContext);

    function closeBanner () {
        setBanner(false);
    }

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