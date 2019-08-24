import React from 'react';
import './App.css';
import C3 from "./Component/C3";
import Logo from './img/logo.png'
import {InjectGlobal} from "./style";
import Header from './Component/C1'
import {IconInjectGlobal} from "./img/iconfont/iconfont";
function App() {
  return (
    <div className="App">
      <InjectGlobal/>
      <IconInjectGlobal/>
      <Header/>
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <C3 />
        <p>
          Get to know your life.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
