import React, { useState } from "react";
import "./loginform.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "kaludon1234@gmail.com",
    password: "Kaludon1234"
  });

  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const validate = (fieldValues = formData) => {
    const validationErrors = {};

    if ("email" in fieldValues) {
      if (!fieldValues.email) {
        validationErrors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fieldValues.email)
      ) {
        validationErrors.email = "Invalid email address";
      }
    }

    if ("password" in fieldValues) {
      if (!fieldValues.password) {
        validationErrors.password = "Password is required";
      } else if (fieldValues.password.length < 6) {
        validationErrors.password = "Password must be at least 6 characters";
      }
    }

    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Reset login error on any input change
    setLoginError("");
  };

  // Validate individual fields on blur to show immediate feedback
  const handleBlur = (e) => {
    const { name, value } = e.target;

    const fieldError = validate({ [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...fieldError
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Hardcoded check for demo
      if (
        formData.email === "kaludon1234@gmail.com" &&
        formData.password === "Kaludon1234"
      ) {
        setLoginSuccess(true);
        setLoginError("");
        setErrors({});
        setFormData({ email: "", password: "" }); // Reset form
        console.log("Login successful!");
      } else {
        setLoginSuccess(false);
        setLoginError("Invalid email or password.");
      }
    } else {
      setLoginSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form" noValidate>
      <h2>Login</h2>

      {loginSuccess && <p className="success">Login successful!</p>}
      {loginError && <p className="error">{loginError}</p>}

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby="email-error"
          aria-invalid={errors.email ? "true" : "false"}
          required
        />
        {errors.email && (
          <p id="email-error" className="error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby="password-error"
          aria-invalid={errors.password ? "true" : "false"}
          required
        />
        {errors.password && (
          <p id="password-error" className="error" role="alert">
            {errors.password}
          </p>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
