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
            email: this.props.match.params.email,
        },
        headers: { Authorization: `JWT ${accessString}`},
    })
    .then(response => {
        this.setState({
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: response.data.email,
            password: response.data.password,
            isLoading: false,
            error: false,
        });
    })
    .catch(error => {
        console.log(error.data);
    });
}