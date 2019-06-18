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
<div 
key={goal.Goal}>
 <a href="/specificGoal"><li className="Flower">{goal.Goal} : {goal.DateFinished}</li>  </a>
        </div>
      

    ));
    return <div>{goals}</div>;

  }
}


export default ProfileGoals;