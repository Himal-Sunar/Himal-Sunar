import React, { useState } from "react";

export default function GradeEvaluator() {
  const [student, setStudent] = useState({
    name: "",
    math: "",
    science: "",
    english: "",
    nepali: "",
    social: "",
    health: ""
  });
  const [result, setResult] = useState(null);

  // handle text/number input
  const handleChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  // main calculation
  const evaluate = () => {
    const math = parseFloat(student.math);
    const science = parseFloat(student.science);
    const english = parseFloat(student.english);
    const nepali = parseFloat(student.nepali);
    const social = parseFloat(student.social);
    const health = parseFloat(student.health);  
    if ([math, science, english,nepali,science,social,health].some((x) => isNaN(x))) {
      alert("Please enter valid numeric marks (0‑100).");
      return;
    }

    const total = math + science + english + nepali + social + health;
    const percentage = (total / 600) * 100;

    let grade = "";
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B+";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 50) grade = "C";
    else if (percentage >= 40) grade = "D";
    else grade = "F";

    setResult({
      total,
      percentage: percentage.toFixed(2),
      grade
    });
  };

  return (
    <div className="grade-evaluator">
      <h1>Student Grade Evaluator</h1>

      <div className="form">
        <input
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="math"
          placeholder="Math Marks"
          value={student.math}
          onChange={handleChange}
        />
        <input
          type="number"
          name="science"
          placeholder="Science Marks"
          value={student.science}
          onChange={handleChange}
        />
        <input
          type="number"
          name="english"
          placeholder="English Marks"
          value={student.english}
          onChange={handleChange}
        />
        <input
          type="number"
          name="nepali"   
          placeholder="Nepali Marks"
          value={student.nepali}
          onChange={handleChange}
        />
        <input
          type="number"
          name="social"
          placeholder="Social Marks"
          value={student.social}
          onChange={handleChange}
        />
        <input
          type="number"
          name="health"
          placeholder="Health Marks"
          value={student.health}
          onChange={handleChange}
        />
        <button onClick={evaluate}>Evaluate</button>
      </div>

      {result && (
        <div className="result">
          <h2>Result for {student.name || "Unnamed Student"}</h2>
          <p>
            <strong>Total Marks:</strong> {result.total} / 600
          </p>
          <p>
            <strong>Percentage:</strong> {result.percentage}%
          </p>
          <p>
            <strong>Grade:</strong> {result.grade}
          </p>
        </div>
      )}
    </div>
  );
}