import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button,
 } from 'reactstrap';
 import Header from '../Components/Header';

export default class Home extends Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errMessage: ''
    }

    createUser = () => {
      const { firstName, lastName, email, password } = this.state;
      console.log('this.state: ', this.state)
      // what is the current state of name, etc, make sure it's complete.
      if (firstName === '') {
        this.setState({
          errMessage: 'First Name Required'
        })
      }
      // Send data to db via axios post to create user, if successful then reroute user to your other client route that matches login
    }    

    onChange = event => {
      console.log('Event: ', event)
      console.log('Event name: ', event.target.name)
      console.log('Event Value: ', event.target.value)
      // update the state of that with the event.target.value so that your state is the data
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    render () {                                   
       return (
         <Container className="App">
           <Header title />
           <a href="login" >Login</a>
        <h2>Sign Up</h2>
      <Form id="signup" name="signup" method="POST" action="/users/signup">
        <Col>
          <FormGroup>
            <Label>First Name:</Label>
            <Input
              type="text"
              name="firstName"
              id="FirstName"
              placeholder="First Name"
              onChange={this.onChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="LastName"
              placeholder="Last Name"
              onChange={this.onChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="Email"
              name="email"
              id="Email"
              placeholder="myemail@email.com"
              onChange={this.onChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="email">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="********"
              onChange={this.onChange}
            />
          </FormGroup>
        </Col>
        <Button onClick={this.createUser}>Submit</Button>
        <button onClick={this._handleLogout}>LOGOUT</button>
      </Form>
      </Container>
       
       )
    }
 }
 