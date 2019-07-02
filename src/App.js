import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";
import Goals from './pages/Goals';
import Account from './pages/Account';
import SignUp from './Components/auth/SignUp';
import Login from './Components/auth/Login';
import Home from './Components/layout/Home';
import PrivateRoute from './Components/private-route/PrivateRoute';
import Profile from './Components/profile/profile';
import SpecificGoal from './pages/SpecificGoal';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Home />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          
          <Switch>
              <PrivateRoute exact path="/profile" component={Profile}  />
              <PrivateRoute exact path="/Account" component={Account}  />
              <PrivateRoute exact path="/goals" component={Goals} />
              <PrivateRoute exact path="/specificgoal/:GoalId(\d+)" component={SpecificGoal} />
            </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}
export default App;

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//             <div className="App">
//              <Route exact path='/signup' component={SignUp}/> 
//              <Route exact path='/login' component={Login}/>
//             </div>
//           </BrowserRouter>
          // <Route exact={true} path='/goals' render={() => 
          // (<div className="App">
          //   <Goals />
          
          // !isAuthenticated ? (
          //   <div className="App">
          //     <Login />
          //   </div>
          // ) : (
          //   <div className="App">
          //     <Goals />
          //   </div>
          // )

        //   }/>
        //   <Route exact={true} path='/login' render={() => (
        //     <div className="App">
        //       <Login />
        //     </div>
        //   )}/>
        //   <Route exact={true} path='/profile' render={() => (
        //     <div className="App">
        //       <Profile />
        //     </div>
        //   )}/>
        
        // </div>
        //   <Route exact={true} path='/users' render={() => (
        //     <div className="App">
        //       <Users uri="http://localhost:3001/allusers"  />
        //     </div>
        //   )}/>
        //   {/* <Route exact={true} path='/goals/allgoals' render={() => (
        //     <div className="App">
        //       <Users uri="http://localhost:3001/goals/allgoals"  />
        //     </div>
        //   )}/> */}
         
        //   <Route exact={true} path='/users/logout' render={() => (
        //     <div className="Users">
        //       <Users uri="http://localhost:3001/users/logout"  />
        //     </div>
        //   )}/>
        //   <Route exact={true} path='/account' render={() => (
        //     <div className="App">
        //       <Account uri="http://localhost:3001/users/profile" />
        //     </div>
        //   )}/>
      
//     );
//   }
// }
// export default App;