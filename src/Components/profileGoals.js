import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class ProfileGoals extends React.Component {
  state = {
    goalData: []
  };

  fetchGoalData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then(response => {
      console.log("response", response);
      this.setState(() => {
        return {
          goalData: response.data
        };
      });
      this.state.goalData.forEach(gd => {
        const gDate = new Date(gd.DateFinished);
        gd.DateFinished = new Intl.DateTimeFormat('en-US').format(gDate); // 6/4/2019
      });
      console.log("CURRENT STATE", this.state);
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
      // const goalDate = new Date(goal.DateFinished);
<div 
key={goal.Goal}> 
 <a href="/specificGoal"><li className="Flower">{goal.Goal} : { goal.DateFinished }</li>  </a>
        </div>
      

    ));
    return <div>{goals}</div>;

  }
}


export default ProfileGoals;