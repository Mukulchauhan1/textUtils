
import './App.css';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';

import {
  BrowserRouter ,
  Route,
  Routes, 
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(msg, type)=>{
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
<Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} aboutText="About"/> 
<Alert alert={alert} />
<div className='container my-3'>

        <Routes>
          <Route path="/about"
          element={<About/>}/>
          
           <Route path="/"
           element={<TextForm heading="Enter the text to analyze below" mode={mode}  showAlert={showAlert}/>}/> 
           
        </Routes> 
  
</div>
</BrowserRouter>

    </>
  );
}

export default App;
