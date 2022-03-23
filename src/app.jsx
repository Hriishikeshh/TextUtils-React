import React, { useState } from 'react'
import Alert from './components/Alert'
// import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//   } from "react-router-dom";

function App(){
    const [mode, setmode] = useState("light")
    const toggleMode = ()=>{
        if(mode==="light"){
            setmode("dark");
            document.body.style.backgroundColor="#202020";
            showAlert("Dark mode is enabled","success")
        }
        else{
            setmode("light");
            document.body.style.backgroundColor="white";
            showAlert("Light mode is enabled","success")
        }
        
    }
    const [alert, setAlert] = useState(null)
    const showAlert = (message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }
    return (
        <>
            <Navbar title="TextUtility" aboutText="About" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className='container my-3' >
                <TextForm heading="Enter the Text to analyse" mode={mode} showAlert={showAlert}/>
            </div>
            
            {/* <About/> */}
            
        </>
    )
            
}
export default App
