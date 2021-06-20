
import {
    Menu,
    MenuItem
} from './SectionMenu.styles';

const SectionMenu = () => {
    return(
        <Menu>
            <MenuItem to='/profile/dashboard' >Dashboard</MenuItem>
            <MenuItem to='/profile/history' >Historial de Citas</MenuItem>
            <MenuItem to='/profile/payment' >Configuración de <br/> Método de Pago</MenuItem>
            <MenuItem to='/profile/personal' >Configuración <br/> Personal</MenuItem>
            <MenuItem to='/profile/terms' >Términos y <br/> Condiciones</MenuItem>
        </Menu>
    );
}

export default SectionMenu;