import { useContext, useEffect, useState } from "react";
import SectionMenu from '../../components/SectionMenu/SectionMenu';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import { LoginContext } from '../../utils/loginStatus';
import { useHistory, useLocation } from 'react-router-dom';
import {
    ProfileMain,
    Avatar,
    User,
    UserInfo,
    UserName,
    UserRole,
    Sidebar,
    MenuSelect,
    MenuOption
} from './Profile.styles';


const Profile = () => {
    const history = useHistory();
    const location = useLocation();


    const { login } = useContext(LoginContext);
    const avatarURL = 'https://ui-avatars.com/api/?name='+login.name+'&rounded=true&background=FFB900&bold=true';

    const [menuSelect, setMenuSelect] = useState();

    function changeSection (ev) {
        
        const toURL = "/profile/"+ ev.target.value;
        history.push(toURL);
    }

    useEffect(() => {
        let currentPath = location.pathname.split('/')[2];
        setMenuSelect(currentPath)
    }, [location]);

    return(
        <ProfileMain>
            <Sidebar>
                <User>
                    <Avatar src={ avatarURL }/>
                    <UserInfo>
                        <UserName>{login.name}</UserName>
                        <UserRole>{login.role}</UserRole>
                    </UserInfo>
                </User>
                <SectionMenu />
                <MenuSelect id="menu-cliente" profile="Cliente" $show={login.role} value={menuSelect} onChange={changeSection}>    
                    <MenuOption value="dashboard">Dashboard</MenuOption>
                    <MenuOption value="history">Historial de Citas</MenuOption>
                    <MenuOption value="payment">Configuración de Módulo de Pago</MenuOption>
                    <MenuOption value="personal">Configuración Personal</MenuOption>
                    <MenuOption value="terms">Terminos y Condiciones</MenuOption>
                </MenuSelect>
                <MenuSelect id="menu-experto" profile="Experto" $show={login.role} value={menuSelect} onChange={changeSection}>    
                    <MenuOption value="dashboard">Dashboard</MenuOption>
                    <MenuOption value="history">Historial de Citas</MenuOption>
                    <MenuOption value="availability">Configuración de Disponibilidad</MenuOption>
                    <MenuOption value="payment">Configuración de Módulo de Retiro</MenuOption>
                    <MenuOption value="personal">Configuración Personal</MenuOption>
                    <MenuOption value="profesional">Configuración Profesional</MenuOption>
                    <MenuOption value="terms">Terminos y Condiciones</MenuOption>
                </MenuSelect>
                <hr />    <hr />
            </Sidebar>
            <ProfileSection/>
        </ProfileMain>
    )
}

export default Profile;
