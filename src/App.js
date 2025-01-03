import './App.css';
import Title from './Components/Title';
import Content from './Components/Content';
import {createContext,useState} from  'react'

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState('light')

  return (
    <ThemeContext.Provider value = {{theme,setTheme}}>
      <div className = 'App'>
        <Title/>
        <Content/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
