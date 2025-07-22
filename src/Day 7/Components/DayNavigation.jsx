import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/DayNavigation.css"; // Assuming you have a CSS file for styling

const DayNavigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (day) => {
    setOpenDropdown((prev) => (prev === day ? null : day));
  };

  const dayContents = {
    "Day 1": ["backgroundchanger"],
    "Day 2": ["Array", "calculator", "condition", "multiplication", "Variable"],
    "Day 3": ["GradeEvaluator", "merge", "object", "userlist"],
    "Day 4": ["Emoji Picker", "Users"],
    "Day 5": ["Focusinput", "Lifting State", "Loginform"],
    "Day 6": ["Home", "View User"],
    "Day 9": ["Complete Form"],
  };

  const formatPath = (day, label) =>
    `/${day.toLowerCase().replace(/\s+/g, "")}/${label
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {Object.entries(dayContents).map(([day, topics]) => (
          <li className="nav-item" key={day} onClick={() => handleToggle(day)}>
            {day}
            <ul className={`submenu ${openDropdown === day ? "open" : ""}`}>
              {topics.map((topic) => (
                <li className="submenu-item" key={topic}>
                  <Link to={formatPath(day, topic)}>{topic}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DayNavigation;
