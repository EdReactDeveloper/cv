import React, { Component } from 'react';
import './css/style.css'
import Routes from './routers'; 
import { Router} from 'react-router-dom';
import {createBrowserHistory} from 'history'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router onUpdate={()=>window.scrollTo(0,0)}  history={createBrowserHistory()}>
        <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
