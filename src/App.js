import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/Textform.js'

function App() {

  const [mode , setMode] = useState('light')

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = "black"
      document.body.style.color = "white"
      setmyText("Enable Dark Mode");
    } else {
      setMode('light')
      document.body.style.background = "white"
      document.body.style.color = "black"
      setmyText("Enable Light Mode");
    }
  }


  const toogleMode2 = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = "green"
      document.body.style.color = "yellow"
    } 
    else {
      setMode('light')
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }
  
  const toogleMode3 = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = "red"
      document.body.style.color = "blue"
    } 
    else {
      setMode('light')
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }

  const toogleMode4 = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = "cyan"
      document.body.style.color = "darkblue"
    } 
    else {
      setMode('light')
      document.body.style.background = "white"
      document.body.style.color = "black"
    }
  }

  const [myText , setmyText] = useState ('Enable Dark Mode');

  return (
  <>
  <Navbar title = "SIT" aboutText="Abour Us" mode={mode} toogleMode={toogleMode} myText={myText} toogleMode2={toogleMode2} toogleMode3={toogleMode3} toogleMode4={toogleMode4}/>
  <TextForm heading="Enter your text" mode={mode} toogleMode={toogleMode} toogleMode2={toogleMode2} toogleMode3={toogleMode3} toogleMode4={toogleMode4}/>
  </>
  );
}

export default App;
    