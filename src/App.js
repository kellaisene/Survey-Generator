import React, { Component } from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import NewSurvey from './components/NewSurvey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Survey Generator</h1>
        </header>
          <NewSurvey/>
        
      </div>
    );
  }
}

export default App;
