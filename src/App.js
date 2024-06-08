import { useState } from 'react';
import './App.css';
import Navbar from './Cromponents/Navbar.js'
import TextForm from './Cromponents/TextForm.js'

function App() {

  const [mode , setMode] = useState('light')

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = "black"
      document.body.style.transition = ".5s"
      document.body.style.color = "white"
    } else {
      setMode('light')
      document.body.style.background = "white"
      document.body.style.transition = ".5s"
      document.body.style.color = "black"
    }
  }

  return (
  <>
  <Navbar title = "SIT" aboutText="Abour Us" mode={mode} toogleMode={toogleMode}/>
  <TextForm heading="Enter your text"/>
  </>
  );
}

export default App;
    