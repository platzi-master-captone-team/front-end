import { useState, createContext, useMemo } from 'react';

const LoginContext = createContext(); 

const LoginProvider = (props) => {
    const [login, setLogin] = useState({status: false, role:'', name:''});

const value = useMemo(
   () => ({login, setLogin}),[login])


    return (
        <LoginContext.Provider
            value={value}
        >
            {props.children}
        </LoginContext.Provider>
    );
}
export { LoginContext, LoginProvider };