import React from "react";
import DisplayData from "./DisplayData";

const EmployeeData = () => {
  const downloadData = () => {
    const fileName = "Employee_Data";
    const employeeDetail = JSON.parse(localStorage.getItem("employeeDetail"));
    const data = JSON.stringify(Object.values(employeeDetail), undefined, 2);
    // Reference: https://stackoverflow.com/a/30800715/8665740
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(data)}`;

    const downloadAnchorNode = document.createElement("a");

    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${fileName}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="form">
      <DisplayData />
      <button type="button" className="buttonStyle" onClick={downloadData}>
        Download Data
      </button>
    </div>
  );
};

export default EmployeeData;
