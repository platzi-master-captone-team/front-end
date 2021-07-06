import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from '../../utils/loginStatus';
import cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { 
    Header,
    BrandTitle,
    NavMenuLink,
    NavBarContainer,
    UserMenuDropdown,
    UserMenuOption,
    UserMenuLink,
    LoginButton,
    NavMenu,
    UserMenu,
    Button,
    Avatar,
    Logo 
} from "./Navbar.styles";

const Navbar = () => {
    let history = useHistory();
    const { login, setLogin } = useContext(LoginContext);

    const avatarURL = 'https://ui-avatars.com/api/?name='+login.name+'&rounded=true&background=FFB900&bold=true';

    const [userMenu, setUserMenu] = useState(false);

    function ToggleMenu () {
        setUserMenu(!userMenu);
    }

    function getLoginStatus () {
        const token = cookie.get('token') 
        //console.log('navbar token authorized:', token)  
        
        if(token && login.status === false) {
            //console.log('enter decoding: '+typeof(token))
            const tokenData = jwt_decode(token);
            //console.log("tokendata: " + tokenData);
            const userRole = tokenData.role_id === 1 ? 'Experto': 'Cliente';
            
            setLogin({...login, status:true, role: userRole, name:tokenData.name});
        }
    }

    function CloseSession () {
        setLogin({...login, status:false, role:'', name:''});
        setUserMenu(false);
        cookie.remove('token')
        history.push("/");
    }

    function goDashboard () {
        setUserMenu(false);
        history.push("/profile/dashboard");
    }

    function ChangeToExpert () {
        setLogin({...login, role:'Experto', name:'Ana Rojas'});
        setUserMenu(false);
    }

    function ChangeToClient () {
        setLogin({...login, role:'Cliente', name:'José Araiza'});
        setUserMenu(false);
    }

    useEffect(() => {
        getLoginStatus();
      });

    return (
        <>
            <Header>
            <NavBarContainer>
                <Logo/>
                <BrandTitle to='/'>Consultify</BrandTitle>
                <NavMenu>
                    <NavMenuLink to='/buscar'>Encuentra un Experto</NavMenuLink>
                    
                    <LoginButton to='/login' $show={login.status} type="primary">Inicia Sesión</LoginButton>
                    <Button to='/signup' $show={login.status}>Regístrate</Button>
                    <NavMenuLink to='/profile/dashboard' $show={!login.status}>Mi Cuenta</NavMenuLink>
                    <UserMenu>
                        <Avatar onClick={ToggleMenu} src={ avatarURL } $show={!login.status}/>
                        <UserMenuDropdown $show={userMenu}>
                            <UserMenuLink to="/buscar" >Encuentra un Experto</UserMenuLink>
                            <UserMenuLink to="/profile/dashboard" >Ir al Dashboard</UserMenuLink>
                            <UserMenuOption onClick={CloseSession}>Cerrar Sesión</UserMenuOption> 
                        </UserMenuDropdown>
                        
                    </UserMenu>
                     
                </NavMenu>
            </NavBarContainer>
            </Header>
        </>
    )
}

export default Navbar;