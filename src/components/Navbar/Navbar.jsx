import { 
    Header,
    BrandTitle,
    NavMenuLink,
    NavMenu,
    Button,
    Logo 
} from "./Navbar.styles";

const Navbar = () => {
    return (
        <>
            <Header>
                <Logo/>
                <BrandTitle to='/'>Consultify</BrandTitle>
                <NavMenu>
                    <NavMenuLink to='/search'>Encuentra un Experto</NavMenuLink>
                    <NavMenuLink to='/login'>Inicia Sesión</NavMenuLink>
                    <Button to='/signup'>Únete Ahora</Button>
                </NavMenu>
            </Header>
        </>
    )
}

export default Navbar;