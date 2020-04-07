import React from 'react';
import logo from './logo.svg';
import './App.css';
import Historia from "./Historia.js";
import Menu from "./Menu.js";
import ChangeButton from "./ChangeButton"

class App extends React.Component {
  constructor(props){
    super(props) 
      this.state = {
        language: "espanol"
      }
  }
  changeLanguage(){
    if (this.state.language === "espanol"){
      this.setState({language: "english"})
    } else {
      this.setState({language: "espanol"})
    }
  }
    render (){
      return (
    <div className="App">
      <ChangeButton language={this.state.language} buttonClick={() => this.changeLanguage()} />
      <Historia language={this.state.language}/>
      <Menu language={this.state.language} />
      <logo/>
      </div>
    );
  }
}
export default App; 
