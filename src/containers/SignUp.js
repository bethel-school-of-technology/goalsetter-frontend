import React, { Component } from 'react';
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
} from '../components';

// const title = {
//   pageTitle: 'Sign Up',
// };

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      messageFromServer: '',
      showError: false,
      signupError: false,
      loginError: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  registerUser = async (e) => {
    e.preventDefault();
    const {
 first_name, last_name, password, email 
} = this.state;
    if (email === '' || password === '' ) {
      this.setState({
        showError: true,
        loginError: false,
        signupError: true,
      });
    } else {
      try {
        const response = await axios.post(
          'http://localhost:3000/signupUser',
          {
            first_name,
            last_name,
            email,
            password,
          },
        );
        this.setState({
          messageFromServer: response.data.message,
          showError: false,
          loginError: false,
          signupError: false,
        });
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email already taken') {
          this.setState({
            showError: true,
            loginError: true,
            signupError: false,
          });
        }
      }
    }
  };

  // eslint-disable-next-line consistent-return
  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      messageFromServer,
      showError,
      loginError,
      signupError,
    } = this.state;

    if (messageFromServer === '') {
      return (
        <div>
          <HeaderBar title={title} />
          <form className="profile-form" onSubmit={this.signupUser}>
            <TextField
              style={inputStyle}
              id="first_name"
              label="first_name"
              value={first_name}
              onChange={this.handleChange('first_name')}
              placeholder="First Name"
            />
            <TextField
              style={inputStyle}
              id="last_name"
              label="last_name"
              value={last_name}
              onChange={this.handleChange('last_name')}
              placeholder="Last Name"
            />
            <TextField
              style={inputStyle}
              id="email"
              label="email"
              value={email}
              onChange={this.handleChange('email')}
              placeholder="Email"
            />
            <TextField
              style={inputStyle}
              id="password"
              label="password"
              value={password}
              onChange={this.handleChange('password')}
              placeholder="Password"
              type="password"
            />
            <SubmitButtons buttonStyle={signupButton} buttonText="Sign Up" />
          </form>
          {showError === true && signupError === true && (
            <div>
              <p>Email and Password are required fields.</p>
            </div>
          )}
          {showError === true && loginError === true && (
            <div>
              <p>
                That email is already taken. Please choose another
                or login.
              </p>
              <LinkButtons
                buttonText="Login"
                buttonStyle={loginButton}
                link="/login"
              />
            </div>
          )}
          <LinkButtons buttonText="Go Home" buttonStyle={homeButton} link="/" />
        </div>
      );
    }
    if (messageFromServer === 'user created') {
      return (
        <div>
          <HeaderBar title={title} />
          <h3>User successfully registered!</h3>
          <LinkButtons
            buttonText="Go Login"
            buttonStyle={loginButton}
            link="/login"
          />
        </div>
      );
    }
  }
}

export default SignUp;