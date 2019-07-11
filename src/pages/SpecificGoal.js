import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateGoal } from "../actions/authActions";
import axios from 'axios';
import moment from 'moment';
import Home from '../Components/layout/Home';
import {
  Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class SpecificGoal extends Component {
  state = {
    specificGoal: ""
  }

  componentDidMount() {
    const jwToken = localStorage.getItem('jwtToken');

    axios({
      method: 'get',
      baseURL: `http://localhost:3001/goals/${this.props.match.params.GoalId}`,
      headers: { 'Authorization': jwToken }
    }).then(response => {
      this.setState(() => {
        return {
          specificGoal: response.data
        };
      });
    });
  };

  //THIS IS THE UPDATE GOAL FUNCTION//
  onSubmitUpdate = (e) => {
    axios.put(`http://localhost:3001/goals/${this.props.match.params.GoalId}`, this.state) 
    e.preventDefault();
    this.props.history.push("/goals");
  };
  

  //THIS IS THE DELETE GOAL FUNCTION//
  onSubmitDelete = (e) => {
    axios.delete(`http://localhost:3001/goals/${this.props.match.params.GoalId}`)
    e.preventDefault();
    this.props.history.push("/goals");
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };


  render() {

    const { Goal, DateFinished, Notes } = this.state;
    return (

      <div>
        <Home />
      <h1>UPDATE YOUR GOAL! </h1>
        <Form noValidate onSubmit={this.onSubmit}>
          <div className="add-specific-goal-spacer">
          </div>
          <Col className="topMargin">
            <FormGroup>
              <Label className="colorRed">Goal: {this.state.specificGoal.Goal}</Label>
              <Input
                type="text"
                name="Goal"
                id="Goal"
                placeholder="Modifiy Goal Here"
                onChange={this.onChange}
                value={Goal}
              />
            </FormGroup>
          </Col>
          <Col className="topMargin_bottom">
            <FormGroup>
              <Label className="colorRed">Date Finished: {moment(this.state.specificGoal.DateFinished).format('LL')}</Label>
              <Input
                type="date"
                name="DateFinished"
                id="DateFinished"
                placeholder="Modifiy Date Here"
                onChange={this.onChange}
                value={DateFinished}
              />
            </FormGroup>
          </Col >
          <Col className="topMargin_white">
            <FormGroup>
              <Label className="colorRed">Notes: {this.state.specificGoal.Notes}</Label>
              <Input
                type="textarea"
                name="Notes"
                id="Notes"
                placeholder="Modifiy Notes Here"
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
            }} onClick={this.onSubmitUpdate}>Update Goal
          </Button>
          <div></div>
          <Button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem",
              backgroundColor: "#e85a4f",
            }} onClick={this.onSubmitDelete}>Delete This Goal
          </Button>
        </Form>
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

