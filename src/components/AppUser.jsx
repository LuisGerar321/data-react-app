import React, {useContext}  from 'react'

import { Login } from './Login'
import { SignUp } from './SignUp'
import { ThemeContext } from '../context/ThemeContext'
import { ButtonTheme } from './ButtonTheme'
import { LoginContext } from '../context/LoginContext '
import { ButtonComp } from './ButtonComp'
import { UserProvider } from '../context/UserContext'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

// import { LoginProvider } from '../context/LoginContext '

import {Card} from './Card.jsx';



export const AppUser = () => {
        
        const  {   isDay, setIsDay,    theme, setTheme} = useContext(ThemeContext)
        const   {user, setUser, password, setPassword, isLoggedIn,  setIsLoggedIn }    = useContext( LoginContext);

        console.log(  isDay,    theme   );
        return (

                !isLoggedIn ?
                <div style  =  {  {...theme, height:"100vh"   }   }>

                        {/* <LoginProvider> */}
                                <Login/>
                                <SignUp></SignUp>
                                <ButtonTheme/>
                        {/* </LoginProvider> */}

                        
                </div>: 
                <div style  =  {  {...theme, height:"100%"   }   }       >

                        <UserProvider> 

{/* #e6e6e6 */}
                                <Navbar variant="light" style =  { { backgroundColor:  "#c7c6c6"}  } >
                                <Navbar.Brand href="#home">Login as: {user}</Navbar.Brand>
                                <Nav className="mr-auto"   >
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                                <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                {/* <Button variant="outline-primary">Search</Button> */}
                                <ButtonComp/>
                                </Form>
                                </Navbar>


                                
                                <ButtonTheme/>

                                <Card>    </Card>
                        </UserProvider>
                </div>


               
        )
}
