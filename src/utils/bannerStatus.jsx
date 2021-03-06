import { useState, createContext, useMemo, useContext } from 'react';

const BannerContext = createContext(); 

const BannerProvider = (props) => {

    const [banner, setBanner] = useState({show: props.status, type:'chat', message:'Tienes un cita con tu cliente.'}
   
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