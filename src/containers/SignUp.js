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
      FirstName: '',
      LastName: '',
      email: '',
      Password: '',
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
 FirstName, LastName, Password, Email 
} = this.state;
    if (Email === '' || Password === '' ) {
      this.setState({
        showError: true,
        loginError: false,
        signupError: true,
      });
    } else {
      try {
        console.log('DATA: ', FirstName, LastName, Password, Email)
        // const response = await axios.post(
        //   'http://localhost:3000/signupUser',
        //   {
        //     FirstName: first_name,
        //     last_name,
        //     email,
        //     password,
        //   },
        // );
        // this.setState({
        //   messageFromServer: response.data.message,
        //   showError: false,
        //   loginError: false,
        //   signupError: false,
        // });
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'Email already taken') {
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
      FirstName,
      LastName,
      Email,
      Password,
      messageFromServer,
      showError,
      loginError,
      signupError,
    } = this.state;

    if (messageFromServer === '') {
      return (
        <div>
          <HeaderBar title='signup' />
          <form className="profile-form" onSubmit={this.signupUser}>
            <TextField
              style={inputStyle}
              id="FirstName"
              label="FirstName"
              value={FirstName}
              onChange={this.handleChange('FirstName')}
              placeholder="First Name"
            />
            <TextField
              style={inputStyle}
              id="LastName"
              label="LastName"
              value={LastName}
              onChange={this.handleChange('LastName')}
              placeholder="Last Name"
            />
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
              type="Password"
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