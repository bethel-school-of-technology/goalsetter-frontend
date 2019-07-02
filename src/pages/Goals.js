import React, { Component } from 'react';
import { Col, Form,
 FormGroup, Label, Input,
 Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
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

    componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/profile"); // push user to dashboard when they login
      }
  if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
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
        userId: this.props.auth.user.id,
      };
      // console.log("NEW GOAL", newGoal);
      
      this.props.createGoal(newGoal, this.props.history); 
    };

    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  
 
 render () {
    console.log("PROPS:", this.props);
    const { Goal, DateFinished, Notes } = this.state;
    return (
      <div>
        {/* <form noValidate onSubmit={this.onSubmit}>
        <div className="input-field col s12">
          <input type="hidden" name="userId" value={this.props.auth.user.id} />
        </div>
        <div>
          <label htmlFor="Goal">Goal</label>
          <input onChange={this.onChange} type="text" name="Goal" value={Goal} id="Goal" placeholder="What's Your Goal?" />
        </div>
        <div>
          <label htmlFor="DateFinished">DateFinished</label>
          <input onChange={this.onChange} type="date" name="DateFinished" id="DateFinished" value={DateFinished} placeholder="When's Your Goal Date?" />
        </div>
        <div>
          <label htmlFor="Notes">Notes</label>
          <input onChange={this.onChange} type="textarea" name="Notes" id="Notes" value={Notes} placeholder="Tell us more about your goal" />
        </div>
        <button type="submit">Submit</button>
        </form> */}
   <Form noValidate onSubmit={this.onSubmit}>
    <Input type="hidden" name="userId" value={this.props.auth.user.id} />
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
  
  createGoal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createGoal }
)(Goals);