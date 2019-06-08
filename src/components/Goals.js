import React from 'react';

import axios from 'axios';

class Goals extends React.Component {
    state = {
        goalData:  []
    };

    fetchGoalData = () => {
        var encodeURI = window.encodeURI(this.props.uri);
        return axios.get(encodeURI).then(response => {
            this.setState( () => {
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
            return (<div> Failed to fetch data from server</div>);
        }
        const goals = this.state.goalData.map(goal => (
            <div key={goal.name}>
                <em>{goal.name}</em>: {goal.numberOfGoals}
            </div>
        ));
        return (<div>{goals}</div>);
    }

}

export default Goals;