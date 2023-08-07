import React from 'react';

const TeamMember = ({ name, role, image, description }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <div className="member-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="description-box">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}; 