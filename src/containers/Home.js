import React from 'react';
import {
  HeaderBar,
  LinkButtons,
  loginButton,
  signupButton,
} from '../components';

const title = {
  pageTitle: 'Home Screen',
};

const Home = () => (
  <div className="home-page">
    <HeaderBar title={title} />
    <LinkButtons
      buttonText="Sign UP"
      buttonStyle={signupButton}
      link="/signup"
    />
    <LinkButtons buttonText="Login" buttonStyle={loginButton} link="/login" />
  </div>
);

export default Home;