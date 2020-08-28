import React from "react";
import "../../../styles/employeeForm.css";

const DisplayData = () => {
  let data = localStorage.getItem("employeeDetail");
  if (!data.length) return null;
  data = JSON.parse(data);
  return (
    <div className="formData">
      {Object.keys(data).map(empid => {
        return (
          <div
            key={empid}
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "0px",
              margin: "25px",
              justifyContent: "space-evenly"
            }}
          >
            <div>
              <p>
                <strong>Employee #{empid}</strong>
              </p>
            </div>
            <div>
              <p>Name: {data[empid].name}</p>
            </div>
            <div>
              <p>Designation: {data[empid].designation}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>Contact : </p>
              {data[empid].contact.map((info, index) => {
                return info.contactNumber !== "" ? (
                  <p key={index} style={{ paddingLeft: "10px" }}>
                    {info.contactType[0].toUpperCase()}
                    {info.contactType.slice(1).toLowerCase()}-
                    {info.contactNumber}
                  </p>
                ) : (
                  ""
                );
              })}
            </div>
            <div style={{ display: "flex" }}>
              <p>Skills: </p>
              {data[empid].skills.map((skill, index) => {
                return skill !== "" ? (
                  <p key={index} style={{ paddingLeft: "10px" }}>
                    {skill}
                    {index === data[empid].skills.length - 1 ? "" : ", "}
                  </p>
                ) : (
                  ""
                );
              })}
            </div>
            <div>
              <p>Date of Birth: {data[empid].dob}</p>
            </div>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayData;
