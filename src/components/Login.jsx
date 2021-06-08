import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import { ButtonComp } from './ButtonComp';
import 'bootstrap/dist/css/bootstrap.min.css';



//This is local gotting by the user//
const formInfo  = {
        user: "admin",
        password: "12345",
}

export const Login = () => {
        
        return (
                <div>
                        <h1>User Name: '{formInfo.user}' </h1>
                        <h2>Pasword: '{formInfo.password}'</h2>
                        <ButtonComp  formUser = {formInfo.user}   formPass =  {formInfo.password}        />
                </div>
        )
}
