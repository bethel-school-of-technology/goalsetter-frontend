import React, { Component } from 'react';
import {
 Container, Col, Form,
 FormGroup, Label, Input,
 Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from 'classnames';
import { createGoal } from "../actions/authActions";


class Goals extends Component {
    constructor() {
      super();
      this.state = {
        userId: "",
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        
      };
    }
  
    setCurrentUser(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/profile/"); // push user to profile when they login
      }
  if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }

    onSubmit = e => {
      e.preventDefault();
      const newGoal = {
        Goal: this.state.Goal,
        DateFinished: this.state.DateFinished,
        Notes: this.state.Notes,
        userId: this.props.auth.id,
      };
      this.props.createGoal(newGoal, this.props.history); 
    };

  
 
 render () {
    console.log("PROPS:", this.props);
    const { Goal, DateFinished, Notes, userId} = this.state;
    return (
      <div>
   <Form id="goals" name="goals" method="POST" action="/goals" onSubmit={this.onSubmit}>
     <Col className="topMargin">
       <FormGroup>
         <Label className="colorRed">Goal:</Label>
         <Input
           type="text"
           name="Goal"
           id="Goal"
           placeholder="Goal"
           onChange={this.onChange}
          value={Goal}
          
         />
       </FormGroup>
     </Col>
     <Col className="topMargin_bottom">
       <FormGroup>
         <Label className="colorRed">Date Finished</Label>
         <Input
           type="date"
           name="DateFinished"
           id="DateFinished"
           placeholder="When do you want to finish?"
           onChange={this.onChange}
          value={DateFinished}
         />
       </FormGroup>
     </Col >
     <Col className="topMargin_white">
       <FormGroup>
         <Label>Notes</Label>
         <Input
           type="textarea"
           name="Notes"
           id="Notes"
           placeholder="Tell us more about this goal."
           onChange={this.onChange}
          value={Notes}
         />
       </FormGroup>
     </Col>
     <Button component={Link} to="/Users">Submit</Button>
   </Form>


   </div>


    )
 }
}

Goals.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Goals);