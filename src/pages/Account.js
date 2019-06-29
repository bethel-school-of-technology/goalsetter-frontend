import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
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
          </div>
        </div>
      </div>
    );
  }
}
Account.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Account);



