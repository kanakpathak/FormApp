import React from "react";
import "../styles/employeeForm.css";

const DisplayData = () => {
  let data = localStorage.getItem("employeeDetail");
  if (!data.length) return null;
  data = JSON.parse(data);
  return (
    <div className="formData">
      {Object.keys(data).map((empid, index) => {
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
              <p>Contact: </p>
              {data[empid].contact.map((info, index) => {
                return (
                  <p key={index}>
                    {"  "}
                    {info.contactType.toLowerCase()}-{info.contactNumber}
                    {"  "}
                  </p>
                );
              })}
            </div>
            <div style={{ display: "flex" }}>
              <p>Skills: </p>
              {data[empid].skills.map((skill, index) => {
                return index === data[empid].skills.length - 1 ? (
                  <p>{skill} </p>
                ) : (
                  <p>{skill}, </p>
                );
              })}
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
