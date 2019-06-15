import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button,
 } from 'reactstrap';
 import Header from '../components/Header';

export default class Login extends Component { 
  state = { 
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
                name="Email"
                id="Email"
                placeholder="myemail@email.com"
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
              />
            </FormGroup>
          </Col>
          <Button component={Link} to="/Login">Submit</Button>
        </Form>
        </Container>
        </div>

        
      )
   }
}