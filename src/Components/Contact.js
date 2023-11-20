import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = () => {
    // Save the email to local storage
    saveDataToLocal("userEmail", email);

    // Clear the email input
    setEmail("");
  };

  const saveDataToLocal = (key, data) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind ?</h1>
      <h1 className="primary-heading">Let Us Help you</h1>
      <span className="secondary-heading">Interested in submiting your own book to our web app . you can reach us via email</span>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="secondary-button" onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
