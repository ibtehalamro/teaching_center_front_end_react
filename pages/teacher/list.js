 
import { TeachersList } from "../../components/teacher/teachersList";

const List = (props) => {
  return (
    <>
      <h1> Teachers List </h1>
      <TeachersList teachers={props.data}/>
    </>
  );
};

export async function getServerSideProps  ()   {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(
    "http://localhost:8081/teacher/list",
    requestOptions
  );
  const data = await response.json();

  
  return {props: data}; //this data represents the list of teachers from the db
};

export default List;
