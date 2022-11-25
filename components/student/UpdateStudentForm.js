import React, { useState, useEffect } from "react";
import form from "../../styles/form/form.module.scss";
import TextInput from "../Form/TextInput";
import NumberInput from "../Form/NumberInput";
import { studentLinks } from "../../Constants/Links/Links";
import { setFormElementsDisabled } from "../Form/CommonForm";

export const UpdateStudentForm = ({ studentId }) => {
  const [student, setStudent] = useState(null);
  useEffect(() => {
    let fetched = true;
    const getStudentByID = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        studentLinks.getStudentById + studentId,
        requestOptions
      );
      const json = await response.json();

      if (json.status === "ERROR") {
        alert("Student not found." + studentId);
      }
      if (json.status === "SUCCESS") {
        if (fetched) {
          setStudent(json.data?.student);
        }
      }
    };
    if (fetched) {
      getStudentByID();
    }
    return () => (fetched = false);
  }, []);

  useEffect(() => {}, [studentId]);

  const submit = async (event) => {
    event.preventDefault();
    const { firstName, secondName, lastName, city, mobileNumber } =
      event.target;
    const student = {
      id:studentId,
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
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    };
    const response = await fetch(studentLinks.updateStudent,
      requestOptions
    );
    const data = await response.json();
    if (data.status === "ERROR") {
      alert("Student with same name exists.");
    }
    if (data.status === "SUCCESS") {
      alert("Student info updated successfully.");
      setFormElementsDisabled("updateStudentForm");
     }
  };

  return (
    <div className="update_form_Container ">
      <div className={[form.form_Container, form.update_from].join(" ")}>
        {student !== null && (
          <>
            <h1 className={form.form_container_title}>Update student data</h1>
            <form
              id="updateStudentForm"
              className={form.form}
              onSubmit={(event) => submit(event)}
            >
              <TextInput
                elementClass={form.form__group}
                name="firstName"
                label="First name"
                value={student.firstName}
              />
              <TextInput
                elementClass={form.form__group}
                name="secondName"
                label="Second name"
                value={student.secondName}
              />
              <TextInput
                elementClass={form.form__group}
                name="lastName"
                label="Last name"
                value={student.lastName}
              />
              <TextInput
                elementClass={form.form__group}
                name="city"
                label="City"
                value={student.city}
              />
              <NumberInput
                elementClass={form.form__group}
                name="mobileNumber"
                label="Mobile Number"
                value={student.mobileNumber}
              />

              <input type="submit" value={"Enter"} />
            </form>
          </>
        )}
      </div>
    </div>
  );
};
