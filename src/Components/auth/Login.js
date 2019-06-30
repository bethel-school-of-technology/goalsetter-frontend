import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      errors: {}
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

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
      const userData = {
      Email: this.state.Email,
      Password: this.state.Password
    };

this.props.loginUser(userData);

  };

render() {
    const { errors, Email, Password } = this.state;
return (
      <Container className="Login">
        <h2>Login</h2>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              {/* <h4>
                <b>Login</b> below
              </h4> */}
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={Email}
                  error={errors.Email}
                  id="Email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.Email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.Email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={Password}
                  error={errors.Password}
                  id="Password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.Password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="Password">Password</label>
                <span className="red-text">
                  {errors.Password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button className="GSColor"
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit">Login
                </Button>
              </div>
            </form>
            </Container>
    );
  }
}

Login.propTypes = {
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
)(Login);
