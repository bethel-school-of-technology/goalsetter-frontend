import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/authActions';
import classnames from 'classnames';
import { Container } from 'reactstrap';

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
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
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
        <h2>Sign Up</h2>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={FirstName}
                  error={errors.FirstName}
                  id="FirstName"
                  type="text"
                  className={classnames("", {
                    invalid:errors.FirstName
                  })}
                />
                <label htmlFor="FirstName">First Name</label> 
                <span className="red-text">{errors.FirstName}</span>        
                </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={LastName}
                  error={errors.LastName}
                  id="LastName"
                  type="text"
                  className={classnames("", {
                    invalid: errors.LastName
                  })}
                />
                <label htmlFor="LastName">Last Name</label>
                <span className="red-text">{errors.LastName}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={Email}
                  error={errors.Email}
                  id="Email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.Email
                  })}
                />
                <label htmlFor="Email">Email</label>
                <span className="red-text">{errors.Email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={Password}
                  error={errors.password}
                  id="Password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.Password
                  })}
                />
                <label htmlFor="Password">Password</label>
                <span className="red-text">{errors.Password}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                >Sign up
                </button>
              </div>
            </form>
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

