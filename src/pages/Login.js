import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
           <Container className="App">
          <h2>Login </h2>
        <Form id="login" name="login" method="POST" action="/">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
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
          <Button component={Link} to="/Login">Submit</Button>
        </Form>
        </Container>
        </div>

        
      )
   }
}