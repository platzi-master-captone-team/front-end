
import { useState, useEffect, useContext } from 'react';
import {useLocation} from "react-router-dom";
import { LoginContext } from '../../utils/loginStatus';
import {
    Menu,
    MenuItem
} from './SectionMenu.styles';

const SectionMenu = () => {
    let location = useLocation();
    
    const { login } = useContext(LoginContext);
    const [active, setActive] = useState('dashboard');

    useEffect(() => {
        let currentPath = location.pathname.split('/')[2];
        setActive(currentPath)
    }, [location]);

    return(
        <Menu>
            <MenuItem to='/profile/dashboard' id="dashboard" active={active}>Dashboard</MenuItem>
            <MenuItem to='/profile/history' id="history" active={active}>Historial de Citas</MenuItem>
            <MenuItem to='/profile/availability' id="availability" active={active} profile="Experto" $show={login.role}>Configuración de<br/> Disponibilidad</MenuItem>
            <MenuItem to='/profile/payment' id="payment" active={active} profile="Cliente" $show={login.role}>Configuración de <br/> Método de Pago</MenuItem>
            <MenuItem to='/profile/payment' id="payment" active={active} profile="Experto" $show={login.role}>Configuración de <br/> Método de Retiro</MenuItem>
            <MenuItem to='/profile/personal' id="personal" active={active}>Configuración <br/> Personal</MenuItem>
            <MenuItem to='/profile/profesional' id="profesional" active={active} profile="Experto" $show={login.role}>Configuración <br/> Profesional</MenuItem>
            <MenuItem to='/profile/terms' id="terms" active={active}>Términos y <br/> Condiciones</MenuItem>
        </Menu>
    );
}

export default SectionMenu;