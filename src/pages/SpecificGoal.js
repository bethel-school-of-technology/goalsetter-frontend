import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateGoal } from "../actions/authActions";
import GoalDetails from "../Components/goalDetails";
import { Link } from "react-router-dom";
import axios from 'axios';
import {
  Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class SpecificGoal extends Component {
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
    const updateGoalDetails = {
      // GoalId: this.state.GoalId,
      Goal: this.state.Goal,
      DateFinished: this.state.DateFinished,
      Notes: this.state.Notes,
      userId: this.props.auth.user.id,
    };
    // console.log("NEW GOAL", newGoal);

    this.props.updateGoal(updateGoalDetails, this.props.history);
  };

  onSubmitDelete = (e) =>  {
    console.log("CALLING DELETE FUNCTION")
    axios.delete(`http://localhost:3001/goals/:id}`) //Not Functioning Because We don't know how to access GoalId
    e.preventDefault();
    this.props.history.push("/profile/");
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };


  render() {
    console.log("PROPS:", this.props);
    const { Goal, DateFinished, Notes } = this.state;
    return (
      <div>
        <h1>UPDATE YOUR GOAL! </h1>
      <div>
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
          <Button component={Link} to="/Users">Update Goal Details</Button>
        </Form>
      </div>
      <div>
             <Button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}onClick={this.onSubmitDelete}>Delete This Goal
            </Button>
      </div>
      </div>
      


    )
  }
}

SpecificGoal.propTypes = {
  updateGoal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { updateGoal }
)(SpecificGoal);