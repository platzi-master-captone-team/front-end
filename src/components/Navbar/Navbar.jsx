import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from '../../utils/loginStatus';
import cookie from 'js-cookie'
import { 
    Header,
    BrandTitle,
    NavMenuLink,
    UserMenuDropdown,
    UserMenuOption,
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
        setLogin({...login, status:false});
        setUserMenu(false);
        cookie.remove('token')
        history.push("/");
    }

    function ChangeToExpert () {
        setLogin({...login, role:'Expert', name:'Ana Rojas'});
        setUserMenu(false);
    }

    function ChangeToClient () {
        setLogin({...login, role:'Client', name:'José Araiza'});
        setUserMenu(false);
    }

    return (
        <>
            <Header>
                <Logo/>
                <BrandTitle to='/'>Consultify</BrandTitle>
                <NavMenu>
                    <NavMenuLink to='/buscar'>Encuentra un Experto</NavMenuLink>
                    <NavMenuLink to='/login' $show={login.status}>Inicia Sesión</NavMenuLink>
                    <Button to='/signup' $show={login.status}>Únete Ahora</Button>
                    <NavMenuLink to='/profile/dashboard' $show={!login.status}>Mi Cuenta</NavMenuLink>
                    <UserMenu>
                        <Avatar onClick={ToggleMenu} src={ login.role === 'Client' ? avatar: avatar2 } $show={!login.status}/>
                        <UserMenuDropdown $show={userMenu}>
                            <UserMenuOption onClick={ChangeToExpert}>Cambiar a Experto</UserMenuOption>
                            <UserMenuOption onClick={ChangeToClient}>Cambiar a Cliente</UserMenuOption>
                            <UserMenuOption onClick={CloseSession}>Cerrar Sesión</UserMenuOption> 
                        </UserMenuDropdown>
                        
                    </UserMenu>
                     
                </NavMenu>
            </Header>
        </>
    )
}

export default Navbar;