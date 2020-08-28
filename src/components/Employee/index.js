import React, { useState } from "react";
import "../../styles/employeeForm.css";
import ViewData from "./EmployeeData";
import Form from "./EmployeeForm";
import employeeData from "../../constants/index";

const Employee = () => {
  const [viewFlag, setViewFlag] = useState(false);

  return (
    <div className="form">
      <Form setViewFlag={setViewFlag} />
      {employeeData === null ? null : viewFlag && <ViewData />}
    </div>
  );
};
export default Employee;
