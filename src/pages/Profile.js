import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
   Container, Col, Form,
   FormGroup, Label, Input,
   Button,
 } from 'reactstrap';
 import Header from '../Components/Header';
 import ProfileGoals from '../Components/profileGoals';
 import AddGoal from '../Components/AddGoal';
 import axios from 'axios';
 import { Redirect } from 'react-router-dom';

 const loading = {
  margin: '1em',
  fontSize: '24px',
};

export default class Profile extends Component { 
  constructor (){
    super();
  
  this.state = { 
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    isLoading: true,
    deleted: false,
    error: false,
  };
  }


  async componentDidMount() {
    const accessString = localStorage.getItem('JWT');
    const {
      match: {
        params: { email },
      },
    } = this.props;
    console.log(email);
    if (accessString == null) {
      this.setState({
        isLoading: false,
        error: true,
      });
    } else {
      try {
        const response = await axios.get('http://localhost:3001/findUser', {
          params: {
            email,
          },
          headers: { Authorization: `JWT ${accessString}` },
        });
        this.setState({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          password: response.data.password,
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
        params: { email },
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
          email,
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
      first_name,
      last_name,
      email,
      password,
      error,
      isLoading,
      deleted,
    } = this.state;

    if (error) {
      return (
        <div>
          <Container className="App">
            <Header title />
            <div style={loading}>
            Problem fetching user data. Please login again.
          </div>
            <AddGoal />
            <ProfileGoals uri="http://localhost:3001/goals" />
         </Container>
        </div>
        );
      }
      if (isLoading) {
        return (
          <div>
            <Container className="App">
            <Header title />
            <div style={loading}>Loading User Data...</div>
            </Container>
          </div>
        );
      }
      if (deleted) {
        return <Redirect to="/" />;
      }
      return (
        <div>
        <Container className="App">
        <Header title />
       <Col>
         <FormGroup>
           <Label>Email</Label>
           <Input
             type="email"
           />
         </FormGroup>
       </Col>
       <Col>
         <FormGroup>
           <Label for="Email">Password</Label>
           <Input
             type="password"
           />
         </FormGroup>
       </Col>

     </Container>
     </div>

     
   )
}
}



//   render () {                                   
//       return (
//         <div>
//           <Container className="App">
//            <Header title />
//            <AddGoal />
//            <ProfileGoals uri="http://localhost:3001/goals" />
//         </Container>
//         </div>

        
//       )
//    }
// }










// import React from 'react';
// import axios from 'axios';
// import Header from '../Components/Header';
// import { Link } from 'react-router-dom';



// class Profile extends React.Component {
//   state = {
//     goalData: []
//   };

//   fetchGoalData = () => {
//     var encodedURI = window.encodeURI(this.props.uri);
//     return axios.get(encodedURI).then(response => {
//       this.setState(() => {
//         return {
//           goalData: response.data
//         };
//       });
//     });
//   };

//   componentDidMount() {
//     this.fetchGoalData();
//   }

//   render() {
//     console.log(this.state.goalData);
//     if (this.state.goalData.length === 0) {
//       return <div>Failed to fetch data from server</div>;
//     }
//     const goals = this.state.goalData.map(goal => (
// <div key={goal.Goal}>
//  <a href className="Flower" component={Link} to="/Users" > {goal.Goal} : <em>{goal.DateFinished}</em> </a>
//         </div>
      

//     ));
//     return <div>{goals}</div>;

//   }
// }


//export default Profile