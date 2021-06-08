import React, {createContext, useState} from 'react';


export const LoginContext  = createContext();


export const LoginProvider =  ({children}) =>{
        const [  user, setUser  ] = useState("");
        const [ password, setPassword    ] = useState("");
        const [ isLoggedIn, setIsLoggedIn ] = useState(false);

        return(
                <LoginContext.Provider value  = {  {user, setUser, password, setPassword, isLoggedIn,  setIsLoggedIn }  }>
                        {children}
                </LoginContext.Provider>

        );

}