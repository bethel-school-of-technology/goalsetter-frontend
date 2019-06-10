import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goals from './components/Goals';
import Planets from './components/Planets';
import Login from './pages/Login';
import Users from './components/Users';
import Signup from './pages/Signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <div className="App__Aside">
          <div className="PageSwitcher">
            <a href="#" className="PageSwitcher__Item">Sign In</a>
            <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
          </div>
          <div className="FormTitle">
            <a href="#" className="FormTitle__Link">Sign In</a> or <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
          </div>

          <div>
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="Username">User Name</label>
                  <input type="text" id="Username" className="FormField__Input" placeholder="Enter Your Username" name="Username" />
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="Password" className="FormField__Input" placeholder="Enter Your Password" name="Password" />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <Login/>
        <Users uri="http://localhost:3001/allusers" />
        <Planets uri="http://localhost:3001/staticPlanets" /> */}
      </div>
    );
  }
}

export default App;