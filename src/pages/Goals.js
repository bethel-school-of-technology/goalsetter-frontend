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
    <Form id="goals" name="goals" method="POST" action="/goals">
      <Col>
        <FormGroup>
          <Label>Goal:</Label>
          <Input
            type="text"
            name="Goal"
            id="Goal"
            placeholder="Goal"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Date Finished</Label>
          <Input
            type="date"
            name="DateFinished"
            id="DateFinished"
            placeholder="When do you want to finish?"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Notes</Label>
          <Input
            type="text"
            name="Notes"
            id="Notes"
            placeholder="Tell us more about this goal."
          />
        </FormGroup>
      </Col>
      <Button component={Link} to="/Users">Submit</Button>
    </Form>
          
    </Container>
     
     )
  }
}

