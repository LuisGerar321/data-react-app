import React,  { useState, createContext  } from "react"



//Creando un contexto//
//Sirve como un intermediaro y puedan encontrarlo y encontrar la data
export const ThemeContext =  createContext();


//Global information//
const themeConfigFixed = {
        day: {
                backgroundColor: 'whitesmoke',
                color: 'black',
              },
        night: {
                backgroundColor: '#282c34',
                color: 'whitesmoke',
        }
}


//Creart un componente que permite proveer el contenido a todos sus hijos
export const ThemeProvider = ( {children}  ) =>{
        
        const [isDay, setIsDay   ] = useState(  true );
        const [ theme,  setTheme  ] =  useState(  themeConfigFixed.night  ); 

        return(
                //Aqui voy a proveer algo entonces quito el div
                <ThemeContext.Provider  value =  {   {  isDay, setIsDay,    theme, setTheme, themeConfigFixed}   } >
                        {children}
                </ThemeContext.Provider>

        )
}



