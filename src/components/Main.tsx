import React, { useState } from "react";
import StudentForm from "./StudentForm";

const Main = () => {
  var [formArr, setFormArr] = useState([
    {
      label: "Name",
      type: "text",
      value: "",
      error: false,
    },
    { label: "Age", type: "text", value: "", error: false },
  ]);
  var [qualification, setQualification] = useState([
    { label: "High School", check: false },
    { label: "Intermediate", check: false },
    { label: "Graduation", check: false },
    { label: "Post Graduation", check: false },
  ]);
  var [file, setFile] = useState([
    {
      type: "file",
      label: "Select Photo of size 50kb to 200kb",
      min: "50kb",
      max: "200kb",
      fileType: "png",
      error: false,
    },
    {
      type: "file",
      label: "Select Id Proof of size 100kb to 500kb ",
      min: "100kb",
      max: "500kb",
      fileType: "pdf",
      error: false,
    },
  ]);
  return (
    <div className="container">
      <StudentForm
        formArr={formArr}
        setFormArr={setFormArr}
        qualification={qualification}
        setQualification={setQualification}
        file={file}
        setFile={setFile}
      />
    </div>
  );
};

export default Main;
