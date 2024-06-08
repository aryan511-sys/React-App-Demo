import './App.css';
import Navbar from './Cromponents/Navbar.js'
// import TextForm from './Cromponents/TextForm.js'
import AboutUs from './Cromponents/AboutUs';

function App() {
  return (
  <>
  <Navbar title = "SIT" aboutText="Abour Us"/>
  {/* <TextForm heading="Enter your text"/> */}
  <AboutUs title="About Us" />
  </> 
  );
}

export default App;
    