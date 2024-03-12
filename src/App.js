import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); 
  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
     },2000);
    
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#292b2f';
      showAlert("DarkMode has been Enabled","Success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been Enabled","Success")
    }
  }

  return (
    <>
   
    <Navbar title="TextUtils" aboutText='About us' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
      
      <Textform showAlert={showAlert} heading="Enter your Text" mode={mode}/>
      
    


      
      
    </>
  );
}

export default App;
