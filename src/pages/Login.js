import React, { Component } from 'react';
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button,
 } from 'reactstrap';
export default class Login extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div className="App__Aside">
        <Container className="App">
          <h2>Sign In</h2>
        <Form id="login" name="login" method="POST" action="/users/login">
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="username">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
        </Container>
        </div>        
      )
   }
}