import React, { Component } from 'react';
import Event from './components/Event';
import KEYS from './components/Keys'
import logo from './logo.svg';
import './App.css';



console.log(KEYS.REACT_APP_API_KEY)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">


          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Event />
        </header>
      </div>
    );
  }
}

export default App;
