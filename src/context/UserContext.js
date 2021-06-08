import React , { useState, useEffect   , createContext} from 'react'
import USERS from "../users.js"
import fetchUsers from '../services/fetchNotes.js';

export const UserContext =  createContext();


export const UserProvider  = ( {children}) => {
        const [users_, setUsers] = useState( USERS);
        const [isLoading , updateLoading] =  useState(true);

        useEffect(  ()=>{
                const  receiveUsers = async  () =>  {
                        const {data} = await fetchUsers()
                        setUsers(data);
                        console.log("This is the request",data  );
                        updateLoading( false );
             
                };
                receiveUsers();
        },[ ] )

        if(isLoading){
                return <p>Loading...</p>;
        }else{
                return(

                        <UserContext.Provider value =  {  {users_,  setUsers}   }>
                                {children}
                        </UserContext.Provider>
                )
        }

}