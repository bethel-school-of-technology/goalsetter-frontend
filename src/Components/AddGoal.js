import React from 'react';

const AddGoal = ({ title }) => (
    <div>
        <h1> <a href="/Goals" className="AddGoal">+ Add Goal</a></h1>
      
      
      <h1>{title}</h1>
    </div>
  );

export default AddGoal;