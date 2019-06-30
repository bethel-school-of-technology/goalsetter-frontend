import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, deleteUser } from "../actions/authActions";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


class Account extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onSubmit = e => {
    e.preventDefault();
    const deleteUserInfo = {
       userId: this.props.auth.user.id,
    };
    // console.log("NEW GOAL", newGoal);
    
    this.props.deleteUser(deleteUserInfo, this.props.history); 
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };



render() {

    console.log('PROPS:', this.props);
    const { user } = this.props.auth;

return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>Hello, {user.firstName} {user.lastName}</h4>
            <Button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}onClick={this.onLogoutClick}>Logout
            </Button>
            <Button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}onClick={this.onSubmit}>Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
Account.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, deleteUser }
)(Account);



