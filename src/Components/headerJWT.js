import React from 'react';
import Axios from 'axios';
import { async } from 'q';

async; componentDidMount(); {
    let accessString = localStorage.getItem('JWT');
    if (accessString === null ) {
        this.setState({
            isLoading: false,
            error: true,
        });
    }
    await Axios
    .get('http://localhost:3000/findUser', {
        params: {
            Email: this.props.match.params.Email,
        },
        headers: { Authorization: `JWT ${accessString}`},
    })
    .then(response => {
        this.setState({
            FirstName: response.data.FirstName,
            LastName: response.data.LastName,
            Email: response.data.Email,
            Password: response.data.Password,
            isLoading: false,
            error: false,
        });
    })
    .catch(error => {
        console.log(error.data);
    });
}