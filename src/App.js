import React, { Component } from 'react';
import './App.css';
//import Goals from './components/Goals';
//import Planets from './components/Planets';
import Login from './pages/Login';
import Users from './pages/Users';
import Home from './pages/Home';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Goals from './pages/Goals';
import ProfileGoals from './Components/profileGoals';
import Account from './pages/Account';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/goals' render={() => 
          (<div className="App">
            <Goals />
          </div>)
          // !isAuthenticated ? (
          //   <div className="App">
          //     <Login />
          //   </div>
          // ) : (
          //   <div className="App">
          //     <Goals />
          //   </div>
          // )

          }/>
          <Route exact={true} path='/login' render={() => (
            <div className="App">
              <Login />
            </div>
          )}/>
          <Route exact={true} path='/profile' render={() => (
            <div className="App">
              <Profile />
            </div>
          )}/>
        
        </div>
          <Route exact={true} path='/users' render={() => (
            <div className="App">
              <Users uri="http://localhost:3001/allusers"  />
            </div>
          )}/>
          {/* <Route exact={true} path='/goals/allgoals' render={() => (
            <div className="App">
              <Users uri="http://localhost:3001/goals/allgoals"  />
            </div>
          )}/> */}
         
          <Route exact={true} path='/users/logout' render={() => (
            <div className="App">
              <Users uri="http://localhost:3001/users/logout"  />
            </div>
          )}/>
          <Route exact={true} path='/account' render={() => (
            <div className="App">
              <Account uri="http://localhost:3001/users/profile" />
            </div>
          )}/>
      </BrowserRouter>
    );
  }
}
export default App;