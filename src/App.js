import React from 'react';
import logo from './logo.svg';
import './App.css';
import './ClickMe';
import ButtonClick from './ClickMe';

class App extends React.Component {
  
  render(){
  
  return (
    <div className="App">
    <h1>Hello {this.props.name}</h1>
    <ButtonClick/>
    </div>
  );
  }
}

export default App;
