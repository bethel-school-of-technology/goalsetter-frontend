import React from 'react';
import axios from 'axios';
import Header from '../components/Header';



class Profile extends React.Component {
  state = {
    goalData: []
  };

  fetchGoalData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then(response => {
      this.setState(() => {
        return {
          goalData: response.data
        };
      });
    });
  };

  componentDidMount() {
    this.fetchGoalData();
  }

  render() {
    console.log(this.state.goalData);
    if (this.state.goalData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const goals = this.state.goalData.map(goal => (
      <div key={goal.Goal}>
        <Header title />
        <a href="login" >Logout</a>
        <em>{goal.Goal}</em>: <em>{goal.DateFinished}</em>
        
      </div>
      

    ));
    return <div>{goals}</div>;

  }
}


export default Profile;