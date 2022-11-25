import React, { useEffect, useState } from "react";
import { PopUp } from "../layout/popup";
import { Form } from "./Form";
import { UpdateStudentForm } from "./UpdateStudentForm";

export const StudentsList = ({ studentStyle, showSections }) => {
  const [students, setStudents] = useState(null);
  const [update,setUpdate]=useState("no");
  const[studentId,setStudentId]=useState(0);
   
  useEffect(() => {
    let fetched = true;
    const getStudentsList = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        "http://localhost:8081/student/list",
        requestOptions
      );
      const json = await response.json();

      if (fetched) {
        setStudents(json.data);
      }
    };
    
    getStudentsList();
    return () => (fetched = false);
  }, [students,update]);

  const viewSectionsForStudent = (studentId) => {
    
    showSections(studentId);
  };
  return (
    <>
     {update==="yes"&& <PopUp close={()=>{setUpdate("no")}}><UpdateStudentForm studentId={studentId}/></PopUp>}
     
      {students != null &&
        students.length > 0 &&
        students.map((element) => (
          <div  
            key={element.id}
            className={studentStyle.student__container__card}
          >
            <div>
              <div>
                <div className={studentStyle.name}>
                  {element.firstName} {element.secondName} {element.lastName}
                </div>
                <br />
                <button className={studentStyle.studentSectionsButton} onClick={() => viewSectionsForStudent(element.id)}>
                  Sections
                </button>
              </div>
              <div className={studentStyle.editLink}>
                <button onClick={() =>{setStudentId(element.id); setUpdate("yes");}}>Edit</button>
              </div>
              
            </div>
          </div>
        ))}
    </>
  );
};
