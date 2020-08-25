import React from "react";
import "../styles/employeeForm.css";

const DisplayData = () => {
  let data = localStorage.getItem("employeeDetail");
  console.log("data", data);
  if (!data.length) return null;
  data = JSON.parse(data);
  return (
    <div className="formData">
      {Object.keys(data).map((empid, index) => {
        return (
          <div key={empid}>
            <div>Employee #{empid}</div>
            <div>Name: {data[empid].name}</div>
            <div>Designation: {data[empid].designation}</div>
            <div>
              <div>Contact:</div>
              {data[empid].contact.map((info, index) => {
                return (
                  <div key={index}>
                    <p>{info.contactType.toLowerCase()}</p>
                    <p>-</p>
                    <p>{info.contactNumber}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <div>Skills:</div>
              {data[empid].skills.map((skill, index) => {
                return index === data[empid].skills.length - 1 ? (
                  <div>{skill}</div>
                ) : (
                  <div>{skill}, </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayData;
