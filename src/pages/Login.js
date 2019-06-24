import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button,
 } from 'reactstrap';
 import Header from '../Components/Header';
 import { Redirect } from 'react-router-dom';
 //import TextField from '@material-ui/core/TextField';
 import axios from 'axios';
 
//  import {
//    LinkButtons,
//    SubmitButtons,
//    signupButton,
//    homeButton,
//    loginButton,
//    inputStyle,
//    HeaderBar,
//  } from '../Components';

 

export default class Login extends Component { 
  constructor() {
    super();
  
  this.state = { 
    username: '',
    password: '',
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
  const { email, password } = this.state;
  if (email === '' || password === '') {
    this.setState({
      showError: false,
      showNullError: true,
      loggedIn: false,
    });
  } else {
    try {
      const response = await axios.post('http://localhost:3000/loginUser', {
        email,
        password,
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
    email,
    password,
    showError,
    loggedIn,
    showNullError,
  } = this.state;
  if (!loggedIn) {
    return (
      <div>
        <h1>GoalSetter</h1>
        <form className="profile-form" onSubmit={this.loginUser}>
          <Container
            // style={inputStyle}
            id="email"
            label="email"
            value={email}
            onChange={this.handleChange('email')}
            placeholder="Email"
          />
          <Container
            // style={inputStyle}
            id="password"
            label="password"
            value={password}
            onChange={this.handleChange('password')}
            placeholder="Password"
            type="password"
          />
          <button className="form-submit" onClick={this.handleFormSubmit}>Login</button>
          {/* <SubmitButtons buttonStyle={loginButton} buttonText="Login" /> */}
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
            <button className="form-signup" onClick={this.handleFormSignUp}>Sign Up </button>
            {/* <LinkButtons
              buttonText="SignUp"
              buttonStyle={signupButton}
              link="/signup"
            /> */}
          </div>
        )}
        <Link className="link" to="/">Don't have an account? <span className="link-home">Signup</span></Link>
        {/* <LinkButtons buttonText="Go Home" buttonStyle={homeButton} link="/" /> */}
      </div>
    );
  }
  return <Redirect to={`/userProfile/${email}`} />;
}
  
  render () {                                   
      return (
        <div>
           <Container className="App">
           <Header title />
          <h2>Login </h2>
        <Form id="login" name="login" method="POST" action="/users/login">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="Email"
                placeholder="myemail@email.com"
                onChange={this._handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Email">Password</Label>
              <Input
                type="password"
                name="Password"
                id="Password"
                placeholder="********"
                onChange={this._handleChange}
              />
            </FormGroup>
          </Col>
          <button className="form-submit" onClick={this.handleFormSubmit}>Login</button>
          <Link className="link" to="/">Don't have an account? <span className="link-home">Signup</span></Link>
        </Form>
        </Container>
        </div>

        
      )
   }
}