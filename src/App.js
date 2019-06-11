import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Goals from './components/Goals';
//import Planets from './components/Planets';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import Home from './pages/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Goals from './pages/Goals';
import Planets from './pages/Planets';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/goals' render={() => (
            <div className="App">
              <Goals />
            </div>
          )}/>
          <Route exact={true} path='/signup' render={() => (
            <div className="App">
              <SignUp />
            </div>
          )}/>
        </div>
        <Route exact={true} path='/planets' render={() => (
            <div className="App">
              <Planets uri="http://localhost:3001/staticPlanets"  />
            </div>
          )}/>
          <Route exact={true} path='/users' render={() => (
            <div className="App">
              <Users uri="http://localhost:3001/allusers"  />
            </div>
          )}/>
      </BrowserRouter>
    );
  }
}
export default App;