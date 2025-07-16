import React from "react";

export default function Array(){
    let Array = ["bananananana","mangoooooo","appleeeeee"];


    //   for (let i = 0; i<6,i++) {
    //   const element = Array[i];
    //   }

      return(
        <div style={{textAlign: 'center', marginTop:"50px"}}>
            <p>
                <strong>Array Element:</strong>
                <ul style={{listStyle:'none', padding: 0}}>
                    {Array.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </p>
        </div>
      )
}