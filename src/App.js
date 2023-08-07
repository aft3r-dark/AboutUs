import React from 'react';
import TeamMember from './TeamMembers.js';
import teamData from './TeamData.js';
import './App.css';

const App = () => {
  return (
    <div className="team-page">
      <h1>Meet the team of <i>ExpirAItion Date: a GPT Mystery</i></h1>
      <div className="team-container">
        {teamData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default App;