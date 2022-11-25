import React, { useState, useEffect } from "react";
import form from "../../styles/form/form.module.scss";
 
import { sectionLinks } from "../../Constants/Links/Links";
 
import SelectInput from "../Form/SelectInput";

export const AssignStudentToSection = ({ studentId }) => {
  const [sections, setSections] = useState(null);
  const [sectionId,setSectionId]= useState(0);
  useEffect(() => {
    let fetched = true;
    const getSectionsList = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        sectionLinks.getCurrentSectionsList ,
        requestOptions
      );
      const json = await response.json();

      if (json.status === "ERROR") {
        alert("Sections fetching failed.");
      }
      if (json.status === "SUCCESS") {
        if (fetched) {
          setSections(json.data);
        }
      }
    };
    if (fetched) {
      getSectionsList();
    }
    return () => (fetched = false);
  }, []);

  useEffect(() => {}, [studentId]);

  const submit = async (event) => {
    event.preventDefault();
 
    if(sectionId==-99){
      alert ("Please select a section");
    return;
    }

    console.log("Student id", sectionId);
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({sectionId,studentId}),
    };
    const response = await fetch(
      sectionLinks.assignStudentToSection,
      requestOptions
    );
    const data = await response.json();
    if (data.status === "ERROR") {
      alert(data.message);
    }
    if (data.status === "FAIL") {
      alert(data.message);
    }
    if (data.status === "SUCCESS") {
      alert(`Student assigned to this section.`);
    }
  };

  return (
    <div className="">
      <div className={[form.form_Container, form.update_from].join(" ")}>
     {sections!= null&&
      <>
       <h1 className={form.form_container_title}>Assign Student To Section</h1>
      <form
        id="AssignStudentToSection"
        className={form.form}
        onSubmit={(event) => submit(event)}>
        
        <SelectInput
         elementClass={form.form__group}
         name="sectionId"
         label="Sections"
         onChange={(event) =>setSectionId(event.target.value)}
         options={sections.map(section =>  { return {value:section.courseName,key:section.sectionId}})}
       />
        <input type="submit" value={"Enter"} />
      </form>
    </>}  
      </div>
    </div>
  );
};
