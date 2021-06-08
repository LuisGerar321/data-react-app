import React , { useState, createContext} from 'react'
import USERS from "../users.js"

export const UserContext =  createContext();


export const UserProvider  = ( {children}) => {
        const [users_, setUsers] = useState( USERS);
        return(
                <UserContext.Provider value =  {  {users_,  setUsers}   }>
                        {children}
                </UserContext.Provider>
        )
}