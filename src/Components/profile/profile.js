import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import AddGoal from "../AddGoal";
import ProfileGoals from "../profileGoals";

import Home from '../layout/Home';

class Profile extends Component {


  render() {
    console.log('PROPS:', this.props);
    const { user } = this.props.auth;
    // const uriString = "http://localhost:3001/goals/"+this.props.auth.user.id;
    return (
      <div>
        <div className="App">
          <Home />
          <AddGoal />
          <ProfileGoals />
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
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
)(Profile);

