import React from "react";

const DisplayData = () => {
  const employeeDetail = JSON.parse(localStorage.getItem("employeeDetail"));
  return (
    <div className="formData">
      {Object.keys(employeeDetail).map(empid => {
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
              <p>Name: {employeeDetail[empid].name}</p>
            </div>
            <div>
              <p>Designation: {employeeDetail[empid].designation}</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <p>Contact : </p>
              {employeeDetail[empid].contact.map((info, index) => {
                return (
                  <div key={index}>
                    {info.contactNumber !== "" ? (
                      <p key={index} style={{ paddingLeft: "10px" }}>
                        {info.contactType[0].toUpperCase()}
                        {info.contactType.slice(1).toLowerCase()}-
                        {info.contactNumber}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <p>Skills: </p>
              {employeeDetail[empid].skills.map((skill, index) => {
                return skill !== "" ? (
                  <p key={index} style={{ paddingLeft: "10px" }}>
                    {skill}
                    {index === employeeDetail[empid].skills.length - 1
                      ? ""
                      : ", "}
                  </p>
                ) : (
                  ""
                );
              })}
            </div>
            <div>
              <p>Date of Birth: {employeeDetail[empid].dob}</p>
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
