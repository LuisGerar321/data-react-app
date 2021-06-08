import React, {Fragment, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import postUser from '../services/postNote';

export const SignUp = () => {
        const  [data, setData] = useState( {
                email: '',
                fisrt_name: '',
                last_name: '',
        })

        const handleInputChange = (event) =>{
                console.log(event.target.value)
                setData({
                        ...data,
                        [event.target.name]: event.target.value
                })
        }
        const sendData = async (event) => {
                event.preventDefault();
                console.log( `Sended... ${data.email},  ${data.fisrt_name}, ${data.last_name}`)
                await postUser(data.email, data.fisrt_name, data.last_name );
        }
        return (
                <div className = "formu" >
                        <h1>Sign Up</h1>

                        <form action="" className = "row" onSubmit = {sendData}>
                                <div className = "col-md-3">
                                        <input
                                                className = "form-control"
                                                placeholder = "Enter email"
                                                type="email"
                                                name = "email" 
                                                onChange  = {handleInputChange}
                                        />
                                </div>
                                <div className = "col-md-3">
                                        <input
                                                className = "form-control"
                                                placeholder = "Enter first name"
                                                type="text"
                                                name  = "fisrt_name"
                                                onChange  = {handleInputChange}
                                        />
                                </div>

                                <div className = "col-md-3">
                                        <input 
                                                className = "form-control"
                                                placeholder = "Enter last name"
                                                type="text"
                                                name = "last_name"
                                                onChange  = {handleInputChange}
                                        />
                                </div>
                                <div className = "col-md-3">
                                        <Button  variant="outline-primary" type="submit"  >   Sign In   </Button>
                                </div>



                               
                        </form>
                </div>
        )
}
