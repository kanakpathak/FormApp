import React from "react";
import "../../../styles/employeeForm.css";

const Contact = ({ contact, onChangeHandler, index }) => {
  return (
    <div>
      <select
        id={index}
        name="contactType"
        onChange={() => onChangeHandler(event)}
      >
        <option value="Primary">Primary</option>
        <option value="Home">Home</option>
        <option value="Emergency">Emergency</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        name="contactNumber"
        id={index}
        value={contact.contactNumber}
        onChange={() => onChangeHandler(event)}
      />
    </div>
  );
};

const Skills = ({ skill, onChangeHandler, index }) => {
  return (
    <div>
      <input
        type="text"
        name="skills"
        id={index}
        value={skill}
        onChange={() => onChangeHandler(event)}
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
                  <Contact
                    contact={contact}
                    onChangeHandler={onChangeHandler}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <input
            type="button"
            className="formButton"
            onClick={addContact}
            value="+"
          />
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
          <input
            type="button"
            className="formButton"
            onClick={addSkill}
            value="+"
          />
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
