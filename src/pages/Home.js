import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button,
 } from 'reactstrap';



export default class Home extends Component {
    state = { 
    }
    render () {                                   
       return (
         <Container className="App">
        <h2>Sign Up</h2>
      <Form id="signup" name="signup" method="POST" action="/">
        <Col>
          <FormGroup>
            <Label>First Name:</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </FormGroup>
        </Col>
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
        <Button component={Link} to="/Login">Submit</Button>
      </Form>
            <a href="goals">Goals</a>
            <a href="login" >Login</a>
            <a href="planets">Planets</a>
            <a href="users">Users</a>
      </Container>
       
       )
    }
 }
 