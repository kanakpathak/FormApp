/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import DisplayForm from "./displayForm";
import "../styles/employeeForm.css";
import DisplayData from "./displayData";

const initialState = {
  name: "",
  designation: "",
  contact: [
    {
      contactType: "",
      contactNumber: ""
    }
  ],
  skills: [""],
  dob: ""
};

const Form = () => {
  const [employee, setEmployee] = useState(initialState);
  const [id, setId] = useState(1);
  const [flag, setFlag] = useState(false);

  const checkvalidity = () => {
    const alphareg = /^[ A-Za-z ]+$/;
    const numreg = /^[0-9]{10}$/;

    if (
      employee.name !== "" &&
      employee.designation !== "" &&
      employee.name.match(alphareg) &&
      employee.designation.match(alphareg)
    ) {
      if (employee.contact.contactNumber !== "") {
        if (!employee.contact[0].contactNumber.match(numreg)) {
          alert(
            "Enter digits only in Contact Number and make sure length is 10"
          );
          return false;
        }
      }
      return true;
    }
    alert(
      "Make sure you have entered alphabets for Name/Designation and fields are not empty"
    );
    return false;
  };

  const onSubmit = () => {
    if (!checkvalidity()) return;

    setFlag(false);
    const localData = JSON.parse(localStorage.getItem("employeeDetail"));
    localStorage.setItem(
      "employeeDetail",
      JSON.stringify({ ...localData, [id]: employee })
    );
    setId(id + 1);
    setEmployee({
      ...initialState,
      contact: initialState.contact,
      skills: [""]
    });
  };

  const addContact = () => {
    const c = [
      {
        contactType: "",
        contactNumber: ""
      }
    ];
    if (employee.contact.length < 4) {
      setEmployee({
        name: "",
        designation: "",
        contact: c,
        skills: [""],
        dob: ""
      });
    }
  };

  const addSkill = () => {
    if (employee.skills.length < 10) {
      setEmployee({
        ...employee,
        skills: [...employee.skills, ""]
      });
    }
  };

  const onChangeHandler = (event, index) => {
    const prop = event.target.name;
    const val = event.target.value;
    console.log("event.name", event.target.name);
    console.log("employee", employee);
    if (prop === "contactType" || prop === "contactNumber") {
      const contactDetail = employee.contact;
      contactDetail[index][prop] = val;
      setEmployee({ ...employee, contact: contactDetail });
    } else if (prop === "skills") {
      const skill = employee.skills;
      skill[index] = val;
      setEmployee({
        ...employee,
        skills: [...skill]
      });
    } else {
      setEmployee({ ...employee, [prop]: val });
    }
  };

  return (
    <div className="form">
      <DisplayForm
        empdetail={employee}
        onChangeHandler={onChangeHandler}
        addContact={addContact}
        addSkill={addSkill}
      />
      <div className="buttonStyle" onClick={onSubmit}>
        Add Employee
      </div>
      <div className="buttonStyle" onClick={() => setFlag(true)}>
        View Data
      </div>
      {flag && <DisplayData />}
    </div>
  );
};
export default Form;
