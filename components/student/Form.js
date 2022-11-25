import React from 'react';
import form from '../../styles/form/form.module.scss';
import   {useRouter}  from 'next/router';
import TextInput from '../Form/TextInput';
import NumberInput from '../Form/NumberInput';

export const Form = () => {
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    const { firstName, secondName, lastName, city, mobileNumber } = event.target;
    const student = {
      name: {
        firstName: firstName.value,
        secondName: secondName.value,
        lastName: lastName.value,
      },
      address: {
        city: city.value,
      },
      mobileNumber: mobileNumber.value,
    };
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    };
    const response = await fetch("http://localhost:8081/student", requestOptions);
    const data = await response.json(); 
    if(data.status==="ERROR"){
      alert("Student with same name exists.")
    }
    if(data.status==="SUCCESS"){
      alert("Student info saved successfully.")
      document.getElementById("addStudentForm").reset();
    }
  };
  
  return (
   <div className={form.form_Container}>
  <h1 className={form.form_container_title}>Create New Student</h1>
   <form id="addStudentForm" className={form.form} onSubmit={(event)=>submit( event)}>
   <TextInput elementClass={form.form__group} name="firstName" label="First name" />
   <TextInput elementClass={form.form__group} name="secondName" label="Second name" />
   <TextInput elementClass={form.form__group} name="lastName" label="Last name" />
   <TextInput elementClass={form.form__group} name="city" label="City" />
   <NumberInput elementClass={form.form__group} name="mobileNumber" label="Mobile Number" />

    <input type="submit" value={"Enter"} />
   </form>
   </div>
  )
}
