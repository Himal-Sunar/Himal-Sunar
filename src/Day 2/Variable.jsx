import React from 'react'

export default function Variable() {
    let letMessage = "This is declared with let";
    const constMessage = "This is declared with const";

    letMessage ="let allows reassigment";

    // constMessage = "This will cause an error ";
  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
        <h2>let vs const in React</h2>
        <p>
            <strong>letMessage:</strong> {letMessage}
        </p>
        <p>
            <strong>constMessage:</strong> {constMessage}
        </p>
      
    </div>
  )
}
