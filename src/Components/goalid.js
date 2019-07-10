import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateGoal } from "../actions/authActions";
import axios from 'axios';
import moment from 'moment';
import {
  Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class GoalID extends Component {
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

      console.log("+++DID MOUNT+++", this.state);
    });
  };

  //THIS IS THE UPDATE GOAL FUNCTION//
  onSubmitUpdate = (e) => {
    axios.put(`http://localhost:3001/goals/${this.props.match.params.GoalId}`, this.state) 
    // updateGoalDetails = {
    //       GoalId: this.props.match.params.GoalId,
    //       Goal: this.state.specificGoal.Goal,
    //       DateFinished: this.state.specificGoal.DateFinished,
    //       Notes: this.state.specificGoal.Notes,
    //       userId: this.props.auth.user.id,
    //     };
    e.preventDefault();
    this.props.history.push(`http://localhost:3001/goals/${this.props.match.params.GoalId}`);
  };
  // onSubmit = (e, updateGoalDetails) => {
  //   axios({
  //     method: 'put',
  //     baseURL: `http://localhost:3001/goals/${this.props.match.params.GoalId}`,
      
  //   })
  //   e.preventDefault();
  //   updateGoalDetails = {
  //     GoalId: this.state.GoalId,
  //     Goal: this.state.Goal,
  //     DateFinished: this.state.DateFinished,
  //     Notes: this.state.Notes,
  //     userId: this.props.auth.user.id,
  //   };
  //   this.props.onSubmit(updateGoalDetails);
  // };

  //THIS IS THE DELETE GOAL FUNCTION//
  onSubmitDelete = (e) => {
    console.log("CALLING DELETE FUNCTION")
    axios.delete(`http://localhost:3001/goals/${this.props.match.params.GoalId}`).then(res => {
      console.log("RESPONSE", res);
    }).catch(err => {
      console.log(err);
    }) 
    e.preventDefault();
    this.props.history.push("/goals/");
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log("NEW STATE AFTER CHANGE", this.state);
  };


  render() {

    console.log('=====PROPS:======', this.props);
    // const { Goal, DateFinished, Notes } = this.state;
    console.log('=====+=STATE=+===:', this.state);
    const { Goal, DateFinished, Notes } = this.state;
    console.log('=====+=SPECIFIC=+===:', this.state.specificGoal);
    return (
      <div>
        <h1>UPDATE YOUR GOAL! </h1>
        <h2>{Goal}</h2>
        <div>

          <Form noValidate onSubmit={this.onSubmit}>

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
            {/* <Button component={Link} to="/Users">Update Goal Details</Button> */}
          </Form>
        </div>
        <div>
          <Button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }} onClick={this.onSubmitDelete}>Delete This Goal
      </Button>
          
        </div>
      </div>



    )
  }
}

GoalID.propTypes = {
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
)(GoalID);
