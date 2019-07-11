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
                    <a href="/signup">SignUp</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/goals">Goals</a>
                </li>
                <li>
                    <a href="/account">Account</a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer