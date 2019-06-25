import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import {
  LinkButtons,
  deleteButton,
  updateButton,
  loginButton,
  logoutButton,
  HeaderBar,
  linkStyle,
} from '../components';

const loading = {
  margin: '1em',
  fontSize: '24px',
};

const title = {
  pageTitle: 'User Profile Screen',
};

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      isLoading: true,
      deleted: false,
      error: false,
    };
  }

  async componentDidMount() {
    const accessString = localStorage.getItem('JWT');
    const {
      match: {
        params: { Email },
      },
    } = this.props;
    console.log(Email);
    if (accessString == null) {
      this.setState({
        isLoading: false,
        error: true,
      });
    } else {
      try {
        const response = await axios.get('http://localhost:3001/findUser', {
          params: {
            Email,
          },
          headers: { Authorization: `JWT ${accessString}` },
        });
        this.setState({
          FirstName: response.data.FirstName,
          LastName: response.data.LastName,
          Email: response.data.Email,
          Password: response.data.Password,
          isLoading: false,
          error: false,
        });
      } catch (error) {
        console.error(error.response.data);
        this.setState({
          error: true,
        });
      }
    }
  }

  deleteUser = async (e) => {
    const accessString = localStorage.getItem('JWT');
    const {
      match: {
        params: { Email },
      },
    } = this.props;
    if (accessString === null) {
      this.setState({
        isLoading: false,
        error: true,
      });
    }

    e.preventDefault();
    try {
      const response = await axios.delete('http://localhost:3000/deleteUser', {
        params: {
          Email,
        },
        headers: { Authorization: `JWT ${accessString}` },
      });
      console.log(response.data);
      localStorage.removeItem('JWT');
      this.setState({
        deleted: true,
      });
    } catch (error) {
      console.error(error.response.data);
      this.setState({
        error: true,
      });
    }
  };

  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('JWT');
  };

  render() {
    const {
      FirstName,
      LastName,
      Email,
      Password,
      error,
      isLoading,
      deleted,
    } = this.state;

    if (error) {
      return (
        <div>
          <HeaderBar title={title} />
          <div style={loading}>
            Problem fetching user data. Please login again.
          </div>
          <LinkButtons
            buttonText="Login"
            buttonStyle={loginButton}
            link="/login"
          />
        </div>
      );
    }
    if (isLoading) {
      return (
        <div>
          <HeaderBar title={title} />
          <div style={loading}>Loading User Data...</div>
        </div>
      );
    }
    if (deleted) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <HeaderBar title={title} />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>{FirstName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell>{LastName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{Email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Password</TableCell>
              <TableCell style={{ WebkitTextSecurity: 'disc' }}>
                {Password}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          style={deleteButton}
          variant="contained"
          color="primary"
          onClick={this.deleteUser}
        >
          Delete User
        </Button>
        <LinkButtons
          buttonStyle={updateButton}
          buttonText="Update User"
          link={`/updateUser/${Email}`}
        />
        <Button
          style={logoutButton}
          variant="contained"
          color="primary"
          onClick={this.logout}
        >
          <Link style={linkStyle} to="/">
            Logout
          </Link>
        </Button>
      </div>
    );
  }
}

Profile.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      Email: PropTypes.string.isRequired,
    }),
  }),
};

export default Profile;