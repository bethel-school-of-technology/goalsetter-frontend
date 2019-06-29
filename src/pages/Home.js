import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button,
 } from 'reactstrap';
 import Header from '../Components/Header';
 import axios from 'axios';
import { async } from 'q';
import { Link } from 'react-router-dom';




export default class Home extends Component {
    state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      errMessage: ''
    }

    componentDidMount() {
      console.log('this: ', this.props.history)
    }

    createUser =  async e => {
      this.setState({ loading: true })
      const { FirstName, LastName, Email, Password } = this.state;

      const bodyFormData = {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
        redirect: false,
      }

      const res = await axios.post(
        "http://localhost:3001/users/signup",
        bodyFormData
      )
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })

      if (res.status === 200) {
        console.log('it was successful for us!')
        // because this is true, we want to redirect the user to /login
        this.setState({
          loading: false,
          redirect: true,
        })
      }
}    

    onChange = event => {
      // update the state of that with the eent.target.value so that your state is the data
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    

    render () {
      if (this.state.redirect) {
        return <Redirect to='/login' />
      }
      
       return (
         <Container className="Home">
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
              onChange={this.onChange}
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
              onChange={this.onChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="Email"
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
              name="Password"
              id="Password"
              placeholder="********"
              onChange={this.onChange}
            />
          </FormGroup>
        </Col>
        <Button onClick={this.createUser}>Submit</Button>
      </Form>
      </Container>
       
       )
    }
 }
 