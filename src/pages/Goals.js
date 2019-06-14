import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Goals extends Component { 
  state = { 
  }
  render () {                                   
     return (
       <Container className="App">
      <h2>Goals</h2>
    <Form id="goals" name="goals" method="POST" action="/">
      <Col>
        <FormGroup>
          <Label>Goal:</Label>
          <Input
            type="text"
            name="goalName"
            id="goalId"
            placeholder="Goal"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Goal</Label>
          <Input
            type="text"
            name="goalName"
            id="goalId"
            placeholder="Goal"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Goal</Label>
          <Input
            type="text"
            name="goalName"
            id="goalId"
            placeholder="Goal"
          />
        </FormGroup>
      </Col>
      <Button component={Link} to="/Goal">Submit</Button>
    </Form>
          
    </Container>
     
     )
  }
}

