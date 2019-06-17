import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button,
 } from 'reactstrap';
 import Header from '../Components/Header';
 import ProfileGoals from '../Components/profileGoals';
 import UserInformation from '../Components/UserInformation';

export default class Account extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div>
          <Container className="App">
           <Header title />
           <UserInformation uri="http://localhost:3001/users/profile" />
        </Container>
        </div>

        
      )
   }
}
