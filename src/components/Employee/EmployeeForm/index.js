import React, { useState } from "react";
import { CheckAlpha, CheckNum } from "../../../utils/index";
import Form from "./Form";

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

const EmployeeForm = ({ setViewFlag }) => {
  const [employee, setEmployee] = useState(
    JSON.parse(JSON.stringify(initialState))
  );

  const employeeDetail = JSON.parse(localStorage.getItem("employeeDetail"));

  const checkValidity = () => {
    const { name, designation, contact } = employee;

    if (!(CheckAlpha(name) && CheckAlpha(designation))) {
      alert("Enter alphabets only in Name and designation");
      return false;
    }

    if (!CheckNum(contact[0].contactNumber)) {
      alert("Enter 10 digit contact number");
      return false;
    }
    return true;
  };

  const addContact = () => {
    if (employee.contact.length < 4) {
      setEmployee({
        ...employee,
        contact: [
          ...employee.contact,
          { contactType: "Primary", contactNumber: "" }
        ]
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
    const { name, value, id } = event.target;

    if (name === "contactType" || name === "contactNumber") {
      const contactDetail = JSON.parse(JSON.stringify(employee.contact));
      contactDetail[id][name] = value;
      setEmployee({
        ...employee,
        contact: contactDetail
      });
    } else if (name === "skills") {
      const skill = employee.skills;
      skill[id] = value;
      setEmployee({
        ...employee,
        skills: [...skill]
      });
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  };

  const onSubmit = () => {
    if (!checkValidity()) return;
    setViewFlag(false);

    const index = employeeDetail ? Object.keys(employeeDetail).length + 1 : 1;
    localStorage.setItem(
      "employeeDetail",
      JSON.stringify({ ...employeeDetail, [index]: employee })
    );
    setEmployee(JSON.parse(JSON.stringify(initialState)));
  };

  return (
    <div className="form">
      <Form
        empdetail={employee}
        onChangeHandler={onChangeHandler}
        addContact={addContact}
        addSkill={addSkill}
      />
      <div className="buttonStyle" onClick={onSubmit}>
        Add Employee
      </div>
      <div className="buttonStyle" onClick={() => setViewFlag(true)}>
        View Data
      </div>
    </div>
  );
};

export default EmployeeForm;
