import React from 'react'

export default function Merge() {

    const stringArray = ["apple ", "banana ", "cherry "];
    const numbers = [1 , 2 , 3 , 4 , 5];

    const mergedArray = [...stringArray, ...numbers];
  return (
    <div>
      <h1>Merge Array</h1>{mergedArray.map((item, index) => (
        <p key={index}>{item}</p>   
        ))}
    </div>
  )
}