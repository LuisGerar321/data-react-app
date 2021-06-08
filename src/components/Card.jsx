import React, {useState, useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';






export const Card = () => {
        const {users_, setUsers} = useContext(UserContext);
        const {theme, themeConfigFixed, isDay} = useContext (  ThemeContext  )


        const callBackDelate = (index ) => {
                const myUsers =  users_.filter( user => user.id !== index );
                console.log( index    ,myUsers     );
                setUsers(  myUsers    );
        }
        return (
                <div className = "CardsContainers">
                        {
                                users_.map( (element, index) =>
                                        isDay ?
                                        <div  key = {index} className = "nightCard" >
                                                <IconButton className = "delete"  onClick = { () =>  { callBackDelate(element.id)}  }  >
                                                      <HighlightOffIcon/>  
                                                </IconButton>
                                                <img className = "img" src={ element.avatar} alt="" />
                                                <hr />
                                                <h2> {element.first_name} {element.last_name} </h2>
                                                <hr />
                                                <h6> {element.email}  </h6>
                                                <hr />
                                                <h6> {element.id}  </h6>


                                                
                                        </div>:
                                        <div   className = "dayCard"     >
                                                <IconButton className = "delete"   onClick = { () =>  { callBackDelate(element.id)}  }>
                                                      <HighlightOffIcon/>  
                                                </IconButton>
                                                <img className = "img" src={ element.avatar} alt="" />
                                                <hr />
                                                <h2> {element.name} </h2>
                                                <hr />
                                                <h6> {element.biography}  </h6>
                                                <hr />
                                                <h6> {element.id}  </h6>
                                        </div>
                                )
                        }
                </div>
        )
}
