import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import {
  LinkButtons,
  SubmitButtons,
  signupButton,
  homeButton,
  loginButton,
  inputStyle,
  HeaderBar,
} from '../Components';

const title = {
  pageTitle: 'Login',
};

class Login extends Component () {
  constructor() {
    super();

    this.state = {
      Email: '',
      Password: '',
      loggedIn: false,
      showError: false,
      showNullError: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  loginUser = async (e) => {
    e.preventDefault();
    const { Email, Password } = this.state;
    if (Email === '' || Password === '') {
      this.setState({
        showError: false,
        showNullError: true,
        loggedIn: false,
      });
    } else {
      try {
        const response = await axios.post('http://localhost:3001/loginUser', {
          Email,
          Password,
        });
        localStorage.setItem('JWT', response.data.token);
        this.setState({
          loggedIn: true,
          showError: false,
          showNullError: false,
        });
      } catch (error) {
        console.error(error.response.data);
        if (
          error.response.data === 'bad username'
          || error.response.data === 'passwords do not match'
        ) {
          this.setState({
            showError: true,
            showNullError: false,
          });
        }
      }
    }
  };

  render() {
    const {
      Email,
      Password,
      showError,
      loggedIn,
      showNullError,
    } = this.state;
    if (!loggedIn) {
      return (
        <div>
          <HeaderBar title={title} />
          <form className="profile-form" onSubmit={this.loginUser}>
            <TextField
              style={inputStyle}
              id="Email"
              label="Email"
              value={Email}
              onChange={this.handleChange('Email')}
              placeholder="Email"
            />
            <TextField
              style={inputStyle}
              id="Password"
              label="Password"
              value={Password}
              onChange={this.handleChange('Password')}
              placeholder="Password"
              type="password"
            />
            <SubmitButtons buttonStyle={loginButton} buttonText="Login" />
          </form>
          {showNullError && (
            <div>
              <p>The email or password cannot be null.</p>
            </div>
          )}
          {showError && (
            <div>
              <p>
                That email or password isn&apos;t recognized. Please try
                again or signup now.
              </p>
              <LinkButtons
                buttonText="SignUp"
                buttonStyle={signupButton}
                link="/signup"
              />
            </div>
          )}
          <LinkButtons buttonText="Go Home" buttonStyle={homeButton} link="/" />
        </div>
      );
    }
    return <Redirect to={`/userProfile/${Email}`} />;
  }
}

export default Login;