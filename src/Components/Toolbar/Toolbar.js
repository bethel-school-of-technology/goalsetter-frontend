import React, { Component } from "react";


import DrawerToggleButton from '../SideDrawer/SideDrawerButton';
import './Toolbar.css';

// temp add links
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from '../auth/SignUp';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <Router>
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/goals">GOALSetter</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <a href="http://localhost:3000/signup">SignUp</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/login">Login</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/goals">Goals</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/account">Account</a>
                    </li>
                    {/* <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />

                    <Switch>
                        <PrivateRoute exact path="/goals" component={Profile} />
                        <PrivateRoute exact path="/Account" component={Account} />
                        <PrivateRoute exact path="/goals/create" component={Goals} />
                        <PrivateRoute exact path="/specificgoal" component={SpecificGoal} />
                    </Switch> */}
            
                    {/* add temp */}
                    {/* <li><a href="/">link</a></li>
                   
                    <li>
                    <Link className="Republican" to="/signup">Sign Up</Link>
                    </li> */}
                    
                    {/* not working */}
                    {/* <Route exact path="/signup" component={SignUp}>SignUp</Route> */}
                </ul>
            </div>
            </Router>
        </nav>
    </header>
);

export default toolbar;
