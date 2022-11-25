 
import { SectionsList } from "../../components/sections/SectionsList";
 
const List = (props) => {
  return (
    <>
      <h1> Sections List </h1>
      <SectionsList sections={props.data}/>
    </>
  );
};

export async function getServerSideProps  ()   {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(
    "http://localhost:8081/section/list",
    requestOptions
  );
  const data = await response.json();

  
  return {props: data}; //this data represents the list of students from the db
};

export default List;
