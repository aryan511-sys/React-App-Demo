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
      document.body.style.color = "white"
      setmyText("ડાર્ક મોડ ચાલુ છે.");
    } else {
      setMode('light')
      document.body.style.background = "white"
      document.body.style.color = "black"
      setmyText("લાઇટ મોડ ચાલુ છે.");
    }
  }

  const [myText , setmyText] = useState ('લાઇટ મોડ ચાલુ છે.');

  return (
  <>
  <Navbar title = "SIT" aboutText="Abour Us" mode={mode} toogleMode={toogleMode} myText={myText}/>
  <TextForm heading="Enter your text" mode={mode} toogleMode={toogleMode}/>
  </>
  );
}

export default App;
    