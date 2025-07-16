import React from 'react'

export default function Condition() {

    var isLoggedIn = true;

  return (
    <div    className='Condition'   style={{color: isLoggedIn ? "green" : "red"}}>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>} 
        <p>{isLoggedIn ? "You are logged in." : "You are not logged in."}</p>
        <p>{isLoggedIn ? "Enjoy your stay!" : "Have a great day!"}</p>
        <p>{isLoggedIn ? "Feel free to explore." : "Please sign up."}</p>
        <p>{isLoggedIn ? "Your account is active." : "Create an account to get started."}</p>
        <p>{isLoggedIn ? "Thank you for being a member." : "Join us today!"}</p>
        <p>{isLoggedIn ? "We value your presence." : "We hope to see you soon!"}</p>
        <p>{isLoggedIn ? "Your feedback is appreciated." : "We would love to hear from you."}</p>
        <p>{isLoggedIn ? "Check out our latest features." : "Discover what you are missing."}</p>
      <button>{isLoggedIn ? "Logout" : "Login"}</button>
      <button>{isLoggedIn ? "Profile" : "Sign Up"}</button>
    </div>
  )
}