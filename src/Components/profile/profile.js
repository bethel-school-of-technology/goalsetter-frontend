import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import AddGoal from "../AddGoal";
import ProfileGoals from "../profileGoals";


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      Id: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      errors: {}
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

render() {
    console.log("PROPS:", this.props);
    // const { errors, Email, Password } = this.state;
    const uriString = "http://localhost:3001/goals/"+this.props.auth.user.id;
return (
    <div>
      <div className="App">
       <AddGoal />
       <ProfileGoals uri={uriString} />
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

