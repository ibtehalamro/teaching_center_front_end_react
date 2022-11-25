import React, { useState } from 'react'
import form from '../../styles/form/form.module.scss';
import TextInput from '../Form/TextInput';
import SelectInput from '../Form/SelectInput';
import { resetForm, setFormElementsDisabled, setFormElementsEnabled } from '../Form/CommonForm';

export const CourseForm = () => {
  const [courseType,setCourseType] = useState(-99);
 const courseTypes=[{key:"Computer", value:"computer"},
 {key:"Math", value:"math"},
 {key:"Arabic", value:"arabic"},
 {key:"English", value:"english"},
 {key:"Other", value:"other"}];

  const submit = async (event) => {
    event.preventDefault();
    if(courseType==-99){
      alert ("Please select a course type.");
    return;
    }
    setFormElementsDisabled("createNewCourseForm");
    const {name} = event.target;

    const course = {
      name: name.value,
      type: courseType
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    };
    const response = await fetch("http://localhost:8081/course", requestOptions);
    const data = await response.json();
     
     if(data.status ==="ERROR"){
      alert (data.message);
     }
     if(data.status ==="SUCCESS"){
      alert (data.message);
      resetForm("createNewCourseForm");
      setCourseType(-99);

     }
     setFormElementsEnabled("createNewCourseForm");
  };
  return (
    <div className={form.form_Container}>
    <h1 className={form.form_container_title}>Create New Course</h1>
    <form id="createNewCourseForm" className={form.form} onSubmit={(event)=>submit( event)}>
     
      <TextInput elementClass={form.form__group} name="name" label="Course name" required/>
      <SelectInput elementClass={form.form__group} name="type" label="Course type" options={courseTypes} onChange={event=>{setCourseType(event.target.value)}} required/>
      <input className={form.form__submit} type="submit" value={"Enter"} />
    </form>
    </div>
  )
}