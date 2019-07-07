import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, deleteUser, setCurrentUser} from "../actions/authActions";
import { Button } from 'reactstrap';
import axios from 'axios';
import Home from '../Components/layout/Home';

class Account extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onSubmit = (e) =>  {
    console.log("CALLING DELETE FUNCTION")
    axios.delete(`http://localhost:3001/users/${this.props.auth.user.id}`)
    e.preventDefault();
    this.props.logoutUser();
  };

render() {

    console.log('PROPS:', this.props);
    const { user } = this.props.auth;

  return (
    <div>
      <Home />
      <div className="account-spacer">
        <spacer className="account-spacer">space</spacer>
        <h4 className="account-welcome">Hello, {user.firstName} {user.lastName}</h4>
      </div>
      <Button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem",
          backgroundColor:"#e85a4f",
        }}onClick={this.onLogoutClick}>Logout
      </Button>
      <Button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem",
          backgroundColor:"#e85a4f",
        }}onClick={this.onSubmit}>Delete
      </Button>
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



