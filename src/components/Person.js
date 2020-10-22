import React from 'react';

const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>{person.height}</p>
      <p>{person.eye_color}</p>
    </div>
  );
};

export default Person;
