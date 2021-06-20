
import {
    Menu,
    MenuItem
} from './SectionMenu.styles';

const SectionMenu = () => {
    return(
        <Menu>
            <MenuItem active>Dashboard</MenuItem>
            <MenuItem>Historial de Citas</MenuItem>
            <MenuItem>Configuración de <br/> Método de Pago</MenuItem>
            <MenuItem>Configuración <br/> Personal</MenuItem>
            <MenuItem>Términos y <br/> Condiciones</MenuItem>
        </Menu>
    );
}

export default SectionMenu;