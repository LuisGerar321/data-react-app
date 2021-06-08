import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginContext } from '../context/LoginContext ';


export const ButtonComp = ({formUser, formPass}) => {
        const  {user, setUser, password, setPassword, isLoggedIn,  setIsLoggedIn }   = useContext(LoginContext);



        const callbackValidateInfoLogIn  = () => {
                //find if  formUser exist and if it match with the password//
                        //change the state//
                        setUser(formUser);
                        setPassword( formPass)
                        setIsLoggedIn(true);
        };

        const callbackLogOut = () => {
                //find if  formUser exist and if it match with the password//
                        //change the state//
                        setUser("");
                        setPassword( "")
                        setIsLoggedIn(false);
        };

        console.log( `user:  ${user}, pass ${password}`  ); 
        return (
                !isLoggedIn?
                <div>
                        <Button  variant="outline-primary" onClick  = { callbackValidateInfoLogIn  }  >   Log in   </Button>    
                </div>:

                <div>
                        <Button variant="outline-primary" onClick  = { callbackLogOut  }  >   Log out   </Button>    
                </div>

        )
}
