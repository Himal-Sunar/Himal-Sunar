import React, { useState } from 'react';
// import '../Styles/style.css';
export default function DayNavigation() {

 
    const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const Day2Options = [
    "Array",
    "Calculator",
    "Condition",
    "Multimlication Table",
    "Variable",
    "Userlist",
  ]
  
  return (
    <div>
      <nav  className='day-nav'>
        <ul className='day-nav-list'>
          <li className='day-nav-item'>
            <a href='#' className='day-nav-link' onClick={toggleMenu}>
              Day 2
            </a>
            {open && (
              <ul className='dropdown-menu'>
                {Day2Options.map((option, index) => (
                  <li key={index} className='dropdown-item'>
                    <a href={`#${option.toLowerCase()}`} className='dropdown-link'>
                      {option}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}