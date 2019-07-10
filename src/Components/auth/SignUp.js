import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/authActions';
import classnames from 'classnames';
import {
  Container, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    // If logged in and user navigates to SignUp page, should redirect them to profile
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { FirstName, LastName, Email, Password } = this.state;

    //Check for Errors
    if (Password === '') {
      this.setState({
        errors: { Password: 'Password is required' }
      });
      return;
    }

    if (FirstName === '') {
      this.setState({
        errors: { FirstName: 'First Name is required' }
      });
      return;
    }

    if (LastName === '') {
      this.setState({
        errors: { LastName: 'Last Name is required' }
      });
      return;
    }

    if (Email === '') {
      this.setState({
        errors: { Email: 'Email is required' }
      });
      return;
    }

    const newUser = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Password: this.state.Password,
    };


    // console.log('newUser: ', newUser)
    this.props.signupUser(newUser, this.props.history);
  };

  render() {
    const { errors, FirstName, LastName, Email, Password } = this.state;

    return (
      <Container className="Home">
        <h2 className="signup-header">Sign Up</h2>
        <Form noValidate onSubmit={this.onSubmit}>
          <FormGroup className="signup-form-group" style={{ paddingLeft: "11.250px" }}>
            <h2>Sign Up</h2>
            <div className="signup-form" style={{ paddingLeft: "11.250px" }}>
              <Label htmlFor="FirstName">First Name</Label>
              <Input
                onChange={this.onChange}
                value={FirstName}
                error={errors.FirstName}
                id="FirstName"
                type="text"
                className={classnames("", {
                  invalid: errors.FirstName
                })}
              />
              <span className="red-text">{errors.FirstName}</span>
            </div>
            <div className="signup-form" style={{ paddingLeft: "11.250px" }}>
              <Label htmlFor="LastName">Last Name</Label>
              <Input
                onChange={this.onChange}
                value={LastName}
                error={errors.LastName}
                id="LastName"
                type="text"
                className={classnames("", {
                  invalid: errors.LastName
                })}
              />
              <span className="red-text">{errors.LastName}</span>
            </div>
            <div className="signup-form" style={{ paddingLeft: "11.250px" }}>
              <Label htmlFor="Email">Email</Label>
              <Input
                onChange={this.onChange}
                value={Email}
                error={errors.Email}
                id="Email"
                type="email"
                className={classnames("", {
                  invalid: errors.Email
                })}
              />
              <span className="red-text">{errors.Email}</span>
            </div>
            <div className="signup-form" style={{ paddingLeft: "11.250px" }}>
              <Label htmlFor="Password">Password</Label>
              <Input
                onChange={this.onChange}
                value={Password}
                error={errors.password}
                id="Password"
                type="password"
                className={classnames("", {
                  invalid: errors.Password
                })}
              />
              <span className="red-text">{errors.Password}</span>
            </div>
            <div className="signup-button">
              <Button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "2rem",
                  backgroundColor: "#e85a4f",
                }}
                type="submit"
              >Sign up
              </Button>
            </div>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { signupUser }
)(withRouter(SignUp));

