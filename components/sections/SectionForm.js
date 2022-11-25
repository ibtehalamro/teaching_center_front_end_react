import React from "react";
import form from "../../styles/form/form.module.scss";
import { useRouter } from "next/router";
import TextInput from '../Form/TextInput';
import DateInput from "../Form/DateInput";
import TimeInput from "../Form/TimeInput";

export const SectionForm = ({courseId,courseName} ) => {
  const router = useRouter();
  const submit = async (event, router) => {
    event.preventDefault();
    const { startDate,endDate,startTime,endTime,teacherId} = event.target;
    const section = {
    courseId:courseId,
     startDate:startDate.value,
     endDate:endDate.value,
     startTime:startTime.value,
     endTime:endTime.value,
     teacherId:teacherId.value
    };
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(section),
    };
    const response = await fetch("http://localhost:8081/section/", requestOptions);
    const data = await response.json();
     router.push(`/sections/`);
  };
  return (
    <div className={form.form_Container}>
    <h1 className={form.form_container_title}>Create New Section for {courseName} Course</h1>
      <form className={form.form} onSubmit={(event) => submit(event, router)}>
      <DateInput elementClass={form.form__group} name="startDate" label="Start date" />
      <DateInput elementClass={form.form__group} name="endDate" label="End date" />
      <TimeInput elementClass={form.form__group} name="startTime" label="Start time" />
      <TimeInput elementClass={form.form__group} name="endTime" label="End time" />

<input
          className={form.textInput}
          type="number"
          name="teacherId"
          placeholder="teacher Id"
        />
        <input type="submit" value={"Enter"} />
      </form>
    </div>
  );
};
