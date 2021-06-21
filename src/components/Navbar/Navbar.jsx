import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from '../../utils/loginStatus';
import { 
    Header,
    BrandTitle,
    NavMenuLink,
    UserMenuDropdown,
    NavMenu,
    UserMenu,
    Button,
    Avatar,
    Logo 
} from "./Navbar.styles";

import avatar from '../../assets/images/avatar.png';
import avatar2 from '../../assets/images/avatar2.png';

const Navbar = () => {
    let history = useHistory();
    const { login, setLogin } = useContext(LoginContext);

    const [userMenu, setUserMenu] = useState(false);

    function ToggleMenu () {
        setUserMenu(!userMenu);
    }

    function CloseSession () {
        setLogin(false);
        setUserMenu(false);
        history.push("/");
    }

    return (
        <>
            <Header>
                <Logo/>
                <BrandTitle to='/'>Consultify</BrandTitle>
                <NavMenu>
                    <NavMenuLink to='/search'>Encuentra un Experto</NavMenuLink>
                    <NavMenuLink to='/login' $show={login.status}>Inicia Sesión</NavMenuLink>
                    <Button to='/signup' $show={login.status}>Únete Ahora</Button>
                    <NavMenuLink to='/profile/dashboard' $show={!login.status}>Mi Cuenta</NavMenuLink>
                    <UserMenu >
                        <Avatar onClick={ToggleMenu} src={ login.role === 'Client' ? avatar: avatar2 } $show={!login.status}/>
                        <UserMenuDropdown $show={userMenu} onClick={CloseSession}>Cerrar Sesión</UserMenuDropdown> 
                    </UserMenu>
                     
                </NavMenu>
            </Header>
        </>
    )
}

export default Navbar;