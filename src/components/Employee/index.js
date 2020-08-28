import React, { useState } from "react";
import EmployeeData from "./EmployeeData";
import EmployeeForm from "./EmployeeForm";

const Employee = () => {
  const [viewFlag, setViewFlag] = useState(false);
  const employeeDetail = JSON.parse(localStorage.getItem("employeeDetail"));
  return (
    <div className="form">
      <EmployeeForm setViewFlag={setViewFlag} />
      {employeeDetail && viewFlag ? <EmployeeData /> : null}
    </div>
  );
};
export default Employee;
