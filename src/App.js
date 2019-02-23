import React, { Component } from 'react';
import './App.css';

import About from './About';
import Header from './Header';
import Portfolio from './Portfolio';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
     
        <Header title="Portfolio" button="Find out More"></Header>
        <About className="about-us"></About>
        <Portfolio></Portfolio>
        <Blog></Blog>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
