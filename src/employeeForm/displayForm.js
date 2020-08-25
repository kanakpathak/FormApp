/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from "react";
import "../styles/employeeForm.css";

const Contact = ({ contact, onChangeHandler, index }) => {
  return (
    <div>
      <select
        name="contactType"
        value={contact.contactType}
        onChange={() => onChangeHandler(event, index)}
      >
        <option value="primary">Primary</option>
        <option value="home">Home</option>
        <option value="emergency">Office</option>
        <option value="other">Other</option>
      </select>
      <input
        type="text"
        name="contactNumber"
        value={contact.contactNumber}
        onChange={() => onChangeHandler(event, index)}
      />
      {console.log("contact.contactNumber", contact.contactNumber)}
    </div>
  );
};

const Skills = ({ skill, onChangeHandler, index }) => {
  return (
    <div>
      <input
        type="text"
        name="skills"
        value={skill}
        onChange={() => onChangeHandler(event, index)}
      />
    </div>
  );
};

const DisplayForm = ({ empdetail, onChangeHandler, addContact, addSkill }) => {
  return (
    <div className="employeeForm">
      <div className="formGroup">
        <div className="formLabel">Name:</div>
        <div className="formInput">
          <input
            type="text"
            name="name"
            value={empdetail.name}
            onChange={onChangeHandler}
            autoFocus
            required
          />
        </div>
      </div>
      <div className="formGroup">
        <div className="formLabel">Designation:</div>
        <div className="formInput">
          <input
            type="text"
            name="designation"
            value={empdetail.designation}
            onChange={onChangeHandler}
            required
          />
        </div>
      </div>
      <div className="formGroup">
        <div className="formLabel">Contact Details:</div>
        <div className="formInput">
          <div>
            {empdetail.contact.map((contact, index) => {
              return (
                <div key={index}>
                  {console.log("renderung")}
                  <Contact
                    contact={contact}
                    onChangeHandler={onChangeHandler}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <button className="formButton" onClick={addContact}>
            +
          </button>
        </div>
      </div>
      <div className="formGroup">
        <div className="formLabel">Skills:</div>
        <div className="formInput">
          <div>
            {empdetail.skills.map((skill, index) => {
              return (
                <div key={index}>
                  <Skills
                    skill={skill}
                    onChangeHandler={onChangeHandler}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <button className="formButton" onClick={addSkill}>
            +
          </button>
        </div>
      </div>
      <div className="formGroup">
        <div className="formLabel">Date of birth:</div>
        <div className="formInput">
          <input
            type="date"
            name="dob"
            value={empdetail.dob}
            onChange={onChangeHandler}
            max="2004-12-31"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayForm;
