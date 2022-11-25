import Link from "next/link";
import studentStyle from "../../styles/students/student.module.scss";
import React, { useState, useEffect } from "react";
import { Form } from "../../components/student/Form";
import { StudentsList } from "../../components/student/studentsList";
import { StudentSectionsList } from "../../components/student/StudentSectionsList";

const Student = () => {
  const [componentName, setComponentName] = useState("new student");
  const [studentId,setStudentId] = useState(0);
  useEffect(() => {}, [componentName]);

  const buttonElement = (buttonComponentName, buttonLabel) => {
    return (
      <button key={buttonLabel} className={["component__links__link"]} onClick={() => setComponentName(buttonComponentName)}>
        {buttonLabel}
      </button>
    );
  };

  const showSections = (studentId) => { 
  setStudentId(studentId);
  setComponentName("sections");
  }
  const components = [
    {
      name: "new student",
      buttonLabel: "New Student",
      component: <Form key={"form"}/>,
    },
    {
      name: "students",
      buttonLabel: "Students",
      component: (
        <StudentsList key={"list"}
          studentStyle={studentStyle} showSections={n=>showSections(n)}
        />
      ),
    },
    {
      name: "sections",
      buttonLabel: "none",
      component: (
        <StudentSectionsList key={"sections"}
          studentStyle={studentStyle} studentId={studentId} 
        />
      ),
    },
  ];
  return (
    <div>
      <div className={"component__links"}>
     {components.map((component) => {
      if(component.buttonLabel!=="none")
        return buttonElement(component.name, component.buttonLabel);
      })}
      </div>

      {components.map((cName) => {
        if (componentName == cName.name) return cName.component;
      })}
    
    </div>
  );
};

export default Student;
