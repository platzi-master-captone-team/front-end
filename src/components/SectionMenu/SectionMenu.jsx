
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import {
    Menu,
    MenuItem
} from './SectionMenu.styles';

const SectionMenu = () => {
    let location = useLocation();
    
    const [active, setActive] = useState('dashboard');

    useEffect(() => {
        let currentPath = location.pathname.split('/')[2];
        setActive(currentPath)
    }, [location]);

    return(
        <Menu>
            <MenuItem to='/profile/dashboard' id="dashboard" active={active}>Dashboard</MenuItem>
            <MenuItem to='/profile/history' id="history" active={active}>Historial de Citas</MenuItem>
            <MenuItem to='/profile/payment' id="payment" active={active}>Configuración de <br/> Método de Pago</MenuItem>
            <MenuItem to='/profile/personal' id="personal" active={active}>Configuración <br/> Personal</MenuItem>
            <MenuItem to='/profile/terms' id="terms" active={active}>Términos y <br/> Condiciones</MenuItem>
        </Menu>
    );
}

export default SectionMenu;