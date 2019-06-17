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
    }
    render () {                                   
       return (
         <Container className="App__Aside">
           <Header title />
           <a href="login" >Login</a>
        <h2>Sign Up</h2>
      <Form id="signup" name="signup" method="POST" action="/users/signup">
        <Col>
          <FormGroup>
            <Label>First Name:</Label>
            <Input
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="First Name"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="LastName"
              id="LastName"
              placeholder="Last Name"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="Email"
              name="Email"
              id="Email"
              placeholder="myemail@email.com"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="email">Password</Label>
            <Input
              type="password"
              name="Password"
              id="Password"
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
      </Form>
      </Container>
       
       )
    }
 }
 