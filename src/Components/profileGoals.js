import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ProfileGoals extends React.Component {
  state = {
    goalData: []
  };

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

      console.log("state after initilization...", this.state);
    });
  };

  componentDidMount() {
    this.fetchGoalData();

  }


  render() {
    if (this.state.goalData.length === 0) {
      return <div>You haven't made any goals yet! Let's change that. Click the <b>+ADD GOAL</b> button above to create your first goal! </div>;
    }

    const goals = this.state.goalData.map(goal => (
      
      <div
        key={goal.Goal}>
        <Link to={`/goals/${goal.GoalId}`}>
          <li className="Goals">
            {goal.Goal} : { moment(goal.DateFinished).format('LL') }
          </li>
        </Link>
      </div>


    ));
    return <div className="profile-goals-display">{goals}</div>;

  }
}


export default ProfileGoals;