import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <header>
                GOALSetter
            </header>
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
        </nav>
    );
};

export default sideDrawer