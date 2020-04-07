import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Historia from "./Historia.js";
import Menu from "./Menu.js";
import ChangeButton from "./ChangeButton"

function App() {
  const [language, setLanguage] = useState("espanol")
  function changeLanguage(){
    if (language === "espanol"){
      setLanguage("english")
    } else {
      setLanguage("espanol")
    }
  }
      return (
    <div className="App">
      <ChangeButton language={language} buttonClick={() => changeLanguage()} />
      <Historia language={language}/>
      <Menu language={language} />
    </div>
    );
}
export default App; 
