import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import GoalDetails from "../Components/goalDetails";
import { Link } from "react-router-dom";
import axios from 'axios';

class SpecificGoal extends Component {
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
    console.log("PROPS:", this.state);
    console.log("WHAT IS THIS:", this.state.goalData);
    if (this.state.goalData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const goals = this.state.goalData.map(goal => (
      // const goalDate = new Date(goal.DateFinished);
<div 
key={goal.Goal}> 
 <Link to={`/specificgoal/${goal.GoalId}`}> <li className="Flower">{goal.Goal} : { goal.DateFinished }</li></Link>
</div>
      

//     ));
    
//     const { errors, Email, Password } = this.state;
//     const uriString = "http://localhost:3001/goals";
// return (
//     <div>
//       <div className="App">
//        <GoalDetails uri={uriString} />
//     </div>
//     </div>

//   )
//   }
// }

// SpecificGoal.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });
// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(SpecificGoal);


));
return <div>{goals}</div>;

}
}


export default SpecificGoal;