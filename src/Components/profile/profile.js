import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

import AddGoal from "../AddGoal";
import ProfileGoals from "../profileGoals";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


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
    const { errors, Email, Password } = this.state;
    const uriString = "http://localhost:3001/goals/"+this.props.auth.user.id;
return (
    <div>
      <Container className="App">
       <AddGoal />
       <ProfileGoals uri={uriString} />
    </Container>
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

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";


// class Profile extends Component {
//   onLogoutClick = e => {
//     e.preventDefault();
//     this.props.logoutUser();
//   };
// render() {
//     const { user } = this.props.auth;
// return (
//       <div style={{ height: "75vh" }} className="container valign-wrapper">
//         <div className="row">
//           <div className="col s12 center-align">
//             <h4>
//               <b>Hello,</b> {user.Email}
              
//             </h4>
//             <button
//               style={{
//                 width: "150px",
//                 borderRadius: "3px",
//                 letterSpacing: "1.5px",
//                 marginTop: "1rem"
//               }}
//               onClick={this.onLogoutClick}
//               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// Profile.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth
// });
// export default connect(
//   mapStateToProps,
//   { logoutUser }
// )(Profile);
