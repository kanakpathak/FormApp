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
      contactType: "Primary",
      contactNumber: ""
    }
  ],
  skills: [""],
  dob: ""
};

const Form = () => {
  const [employee, setEmployee] = useState(
    JSON.parse(JSON.stringify(initialState))
  );
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
    const index = localData ? Object.keys(localData).length + 1 : 1;
    localStorage.setItem(
      "employeeDetail",
      JSON.stringify({ ...localData, [index]: employee })
    );
    setEmployee(JSON.parse(JSON.stringify(initialState)));
  };

  const addContact = () => {
    const c = {
      contactType: "Primary",
      contactNumber: ""
    };

    if (employee.contact.length < 4) {
      setEmployee({
        ...employee,
        contact: [...employee.contact, JSON.parse(JSON.stringify(c))]
      });
    }
  };

  const addSkill = () => {
    if (employee.skills.length < 10) {
      setEmployee({
        ...employee,
        skills: JSON.parse(JSON.stringify([...employee.skills, ""]))
      });
    }
  };

  const onChangeHandler = event => {
    const name = event.target.name;
    const val = event.target.value;
    let id;
    if (name === "contactType" || name === "contactNumber") {
      id = event.target.id;
      const contactDetail = JSON.parse(JSON.stringify(employee.contact));
      contactDetail[id][name] = val;
      setEmployee({
        ...employee,
        contact: contactDetail
      });
    } else if (name === "skills") {
      id = event.target.id;
      const skill = employee.skills;
      skill[id] = val;
      setEmployee({
        ...employee,
        skills: [...skill]
      });
    } else {
      setEmployee({ ...employee, [name]: val });
    }
  };

  const downloadData = () => {
    let employeeData = Object.values(
      JSON.parse(localStorage.getItem("employeeDetail"))
    );
    const fileName = "Employee_Data";

    employeeData = JSON.stringify(employeeData, undefined, 2);

    //Reference: https://stackoverflow.com/a/30800715/8665740
    const dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(employeeData);

    const downloadAnchorNode = document.createElement("a");

    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", fileName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
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
      {flag && (
        <div className="buttonStyle" onClick={downloadData}>
          Download Data
        </div>
      )}
    </div>
  );
};
export default Form;
