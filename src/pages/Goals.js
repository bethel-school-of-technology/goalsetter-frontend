import React, { Component } from 'react';
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button,
 } from 'reactstrap';
export default class Goals extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div>
           <Container className="App">
          <h2>Set It And Go Get It</h2>
        <Form id="signup" name="signup" method="POST" action="/">
          <Col>
            <FormGroup>
              <Label>Goal:</Label>
              <Input
                type="text"
                name="goal"
                id="goal"
                placeholder="What are you aiming for?"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Due Date</Label>
              <Input
                type="date"
                name="DateFinished"
                id="DateFinished"
                placeholder="When Do You Want This Finished?"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Reminder</Label>
              <Input
                type="text"
                name="Reminder"
                id="Reminder"
                placeholder="How Often Do You Want To Be Reminded?"
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
                placeholder="Anything you need to remember?"
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