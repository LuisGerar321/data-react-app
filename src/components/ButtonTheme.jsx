import React,  {  useContext, setState   } from 'react'
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { ThemeContext } from '../context/ThemeContext';

export const ButtonTheme = () => {
        const  {   isDay, setIsDay,    theme, setTheme, themeConfigFixed} = useContext(ThemeContext)

        const callBackTheme = ()=>{
                setIsDay(!isDay);
                !isDay ? setTheme( themeConfigFixed.night) : setTheme( themeConfigFixed.day   );
        }
        return (
                <div>
                        <IconButton  aria-label="Night" onClick =  {  callBackTheme   }   >
                                <Brightness4Icon/>
                        </IconButton>
                </div>
        )
}
