import React, { Component } from "react";
import DrawerToggleButton from '../SideDrawer/SideDrawerButton';
import './Toolbar.css';
import { BrowserRouter as Router } from 'react-router-dom';

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
                </ul>
            </div>
            </Router>
        </nav>
    </header>
);

export default toolbar;
