import Switch from 'react-switch'
import { useContext } from 'react';
import { ThemeContext } from '../App';


const Title=()=>{
    const {theme,setTheme} = useContext(ThemeContext)
    return(
        <header>
            <span>Mode [{theme}]</span>
            <Switch/>
        </header>
    );
}

export default Title