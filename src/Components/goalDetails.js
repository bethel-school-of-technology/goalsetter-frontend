import React from 'react';
import axios from 'axios';


class GoalDetails extends React.Component {
  state = {
    goalData: []
  };

  fetchGoalData = () => {
    // var encodedURI = window.encodeURI(this.props.uri);
    axios.get(`http://localhost:3001/goals`).then(response => {
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
      
    });
  };

  componentDidMount() {
    this.fetchGoalData();
    console.log("CURRENT STATE", this.goalData);
  }
  

  

  fetchSpecificGoalData = () => {
    // var encodedURI = window.encodeURI(this.props.uri);
    axios.get(`http://localhost:3001/goals/specificgoals/${this.state.GoalId}`).then(response => {
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

 

  render() {
    console.log(this.state.goalData);
    if (this.state.goalData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const goals = this.state.goalData.map(goal => (
      // const goalDate = new Date(goal.DateFinished);
    <div key={goal.Goal}> 
        <a href="/specificGoal"><li className="Goals">{goal.Goal} : { goal.DateFinished }</li>  </a>
    </div>
      

    ));
    return <div>{goals}</div>;

  }
}


export default GoalDetails;