import React, { Component } from 'react';
import {
  Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createGoal } from "../actions/authActions";

import Home from '../Components/layout/Home';

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
      this.props.history.push("/goals"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  setCurrentUser(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/goals"); // push user to profile when they login
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

  render() {

    const { Goal, DateFinished, Notes } = this.state;
    return (
      <div>
        <Form noValidate onSubmit={this.onSubmit}>
          <Home />
          <div className="add-goal-spacer">
          </div>
          <Input type="hidden" name="userId" value={this.props.auth.user.id} />
          <Col className="topMargin">
            <FormGroup className="goals-page">
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
          <Button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem",
              backgroundColor: "#e85a4f",
            }}
            type="submit"
            component={Link} to="/goals"
          >Create Goal!
        </Button>
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