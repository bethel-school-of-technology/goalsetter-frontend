import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import {
  LinkButtons,
  SubmitButtons,
  HeaderBar,
  homeButton,
  saveButton,
  loginButton,
  inputStyle,
  HeaderBar,
} from '../components';

const loading = {
  margin: '1em',
  fontSize: '24px',
};

const title = {
  pageTitle: 'Update User Profile Screen',
};

class UpdateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      loadingUser: false,
      updated: false,
      error: false,
    };
  }

  async componentDidMount() {
    this.setState({ loadingUser: true });

    const accessString = localStorage.getItem('JWT');
    if (accessString === null) {
      this.setState({
        loadingUser: false,
        error: true,
      });
    }
    const {
      match: {
        params: { Email },
      },
    } = this.props;
    try {
      const response = await axios.get('http://localhost:3000/findUser', {
        params: {
          Email,
        },
        headers: { Authorization: `JWT ${accessString}` },
      });
      console.log(response.data);
      this.setState({
        loadingUser: false,
        FirstName: response.data.FirstName ? response.data.first_name : '',
        LastName: response.data.LastName ? response.data.LastName : '',
        Email: response.data.Email,
        Password: response.data.Password,
        error: false,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updateUser = async (e) => {
    const accessString = localStorage.getItem('JWT');
    if (accessString === null) {
      this.setState({
        loadingUser: false,
        error: true,
      });
    }
    const {
 FirstName, LastName, Email
} = this.state;
    e.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:3001/updateUser',
        {
          FirstName,
          LastName,
          Email,
        },
        {
          headers: { Authorization: `JWT ${accessString}` },
        },
      );
      // eslint-disable-next-line no-unused-vars
      console.log(response.data);
      this.setState({
        updated: true,
        error: false,
      });
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        loadingUser: false,
        error: true,
      });
    }
  };

  // eslint-disable-next-line consistent-return
  render() {
    const {
      FirstName,
      LastName,
      Email,
      Password,
      updated,
      error,
      loadingUser,
    } = this.state;

    if (error) {
      return (
        <div>
          <HeaderBar title={title} />
          <p style={loading}>
            There was a problem accessing your data. Please go login again.
          </p>
          <LinkButtons
            style={loginButton}
            buttonText="Login"
            link="/login"
          />
        </div>
      );
    }
    if (loadingUser !== false) {
      return (
        <div>
          <HeaderBar title={title} />
          <p style={loading}>Loading user data...</p>
        </div>
      );
    }
    if (loadingUser === false && updated === true) {
      return <Redirect to={`/userProfile/${Email}`} />;
    }
    if (loadingUser === false) {
      return (
        <div>
          <HeaderBar title={title} />
          <form className="profile-form" onSubmit={this.updateUser}>
            <TextField
              style={inputStyle}
              id="FirstName"
              label="FirstName"
              value={FirstName}
              onChange={this.handleChange('FirstName')}
              placeholder="First Name"
            />
            <TextField
              style={inputStyle}
              id="LastName"
              label="LastName"
              value={LastName}
              onChange={this.handleChange('LastName')}
              placeholder="Last Name"
            />
            <TextField
              style={inputStyle}
              id="Email"
              label="Email"
              value={Email}
              onChange={this.handleChange('Email')}
              placeholder="Email"
            />
            <TextField
              style={inputStyle}
              id="Password"
              label="Password"
              value={Password}
              readOnly
              disabled
              type="Password"
            />
            <SubmitButtons buttonStyle={saveButton} buttonText="Save Changes" />
          </form>
          <LinkButtons buttonStyle={homeButton} buttonText="Home" link="/" />
          <LinkButtons
            buttonStyle={cancelButton}
            buttonText="Cancel Changes"
            link={`/userProfile/${Email}`}
          />
        </div>
      );
    }
  }
}

UpdateProfile.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
  }),
};

export default UpdateProfile;