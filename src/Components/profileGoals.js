import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProfileGoals extends React.Component {
  state = {
    goalData: []
  };
  // fetchGoalData = () => {
  //   var encodedURI = window.encodeURI(this.props.uri);
  //   return axios.get(encodedURI).then(response => {
  //     this.setState(() => {
  //       return {
  //         goalData: response.data
  //       };
  //     });
  //     this.state.goalData.forEach(gd => {
  //       const gDate = new Date(gd.DateFinished);
  //       gd.DateFinished = new Intl.DateTimeFormat('en-US').format(gDate); // 6/4/2019
  //     });
  //   });
  // };

  // componentDidMount() {
  //   this.fetchGoalData();
  //   console.log("PROPS:", this.props)
  // }

  fetchGoalData = () => {
    const jwToken = localStorage.getItem('jwtToken');

    axios({
      method: 'get', 
      baseURL: `http://localhost:3001/goals`,
      headers: { 'Authorization': jwToken }
    }).then(response => {
      this.setState(() => {
        return {
          goalData: response.data
        };
      });
      this.state.goalData.forEach(gd => {
        const gDate = new Date(gd.DateFinished);
        gd.DateFinished = new Intl.DateTimeFormat('en-US').format(gDate); // 6/4/2019
      });
    });
  };

  componentDidMount() {
    this.fetchGoalData();
    console.log("PROPS:", this.props)
  }


  render() {
    if (this.state.goalData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }

    const goals = this.state.goalData.map(goal => (
      // const goalDate = new Date(goal.DateFinished);
      <div 
        key={goal.Goal}>
        <Link to={`/goals/${goal.GoalId}`}> <li className="Goals">{goal.Goal} : {goal.DateFinished}</li></Link>
      </div>


    ));
    return <div className="profile-goals-display">{goals}</div>;

  }
}


export default ProfileGoals;