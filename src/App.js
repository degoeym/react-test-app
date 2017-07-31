import React, { Component } from 'react';
import Main from './main';
import Header from './components/common/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
