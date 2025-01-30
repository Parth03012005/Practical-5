import React, { useState } from "react";
import "../styles/SignUpForm.css";
function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    dob: "",
    gender: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const validate = (name, value) => {
    let error = "";
    if (!value) error = `${name} is required.`;
    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email format.";
    }
    if (name === "mobile" && value && !/^\d{10}$/.test(value)) {
      error = "Mobile number must be 10 digits.";
    }
    if (name === "confirmPassword" && value !== formData.password) {
      error = "Passwords do not match.";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });

    const allValid =
      Object.values(formData).every((field) => field.trim() !== "") &&
      Object.values(errors).every((err) => err === "");
    setIsSubmitDisabled(!allValid);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      address: "",
      dob: "",
      gender: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setIsSubmitDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign-Up Form</h2>
      {Object.keys(formData).map((field, index) => (
        <div key={index}>
          <label>
            {field.charAt(0).toUpperCase() + field.slice(1)}:
            {field === "gender" ? (
              <>
                <select
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </>
            ) : (
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            )}
          </label>
          {errors[field] && <p className="error">{errors[field]}</p>}
        </div>
      ))}
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
      <button type="submit" disabled={isSubmitDisabled}>
        Submit
      </button>
    </form>
  );
}

export default SignUpForm;
