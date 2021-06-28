import { useState, createContext, useMemo, useContext } from 'react';
import { LoginContext } from './loginStatus';



const BannerContext = createContext(); 

const BannerProvider = (props) => {
    const { login } = useContext(LoginContext);
    const [banner, setBanner] = useState({show: login.status, type:'chat', message:'Tienes un cita con tu cliente.'}

    );

const value = useMemo(
   () => ({banner, setBanner}),[banner])


    return (
        <BannerContext.Provider
            value={value}
        >
            {props.children}
        </BannerContext.Provider>
    );
}
export { BannerContext, BannerProvider };