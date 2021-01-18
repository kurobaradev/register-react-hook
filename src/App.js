import React, { useState, useEffect} from "react";
import  Button  from 'react-bootstrap';
import "./index.css";

export default function App() {
  const [values, setValues] = useState ({
    firstName:'',
    lastName:'',
    email:'',
  });
  const [submitted, setSubmitted] = useState(false); 
  const [valid, setValid] = useState(false);
  

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,firstName: event.target.value,}));
  };
  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,lastName: event.target.value,}));
  };
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({...values,email: event.target.value,}));
  };
  const handleSubmit =(event) =>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
  }
    setSubmitted(true);
  };

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `register`;
  });
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && <div className='success-message'>Success! Thank you for registering</div>}
        <input
         value={values.firstName}
          id="first-name"
         className="form-field"
         type="text"
         placeholder="First Name"
         name="firstName"
         onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName && <span>Please enter a first name</span>}
        <input
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleLastNameInputChange}
        />
       {submitted && !values.lastName && <span>Please enter a last name</span>}
        
        <input
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleEmailInputChange}
        />
         {submitted && !values.email && <span>Please enter a last name</span>}
        <button className="form-field" type="submit">
          Register
        </button>
        
        <a href="#" style={{color: "blue"}} col={6}>reset passw</a>
        <a href="#" style={{color: "blue"}} col={6}>Login</a>
          
      </form>
    </div>
  );
}
