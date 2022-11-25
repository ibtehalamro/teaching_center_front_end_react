import { Form } from "../../components/teacher/Form";
const newTeacher = () => {
  return(<>
   
    <Form submit={submit} />
    </>);
};
const submit = async (event,router) => {
  event.preventDefault();
   const { firstName, secondName, lastName, city, mobileNumber } = event.target;
  const teacher = {
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
    body: JSON.stringify(teacher),
  };
  const response = await fetch("http://localhost:8081/teacher", requestOptions);
  const data = await response.json(); 
  router.push(`/${data.data.id}`);
};
export default newTeacher;
