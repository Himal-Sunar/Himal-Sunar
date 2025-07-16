import React from 'react';

export default function ShowObject() {

  const person = {
    name: 'Himal Dai',
    age: 18,
    city: 'Bardiya'
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </div>
  );
}