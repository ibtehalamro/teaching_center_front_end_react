import React, { useEffect, useState } from "react";
import { studentLinks } from "../../Constants/Links/Links";
import { getFormattedDate } from "../Helpers.js/DataFormatters";
import { PopUp } from "../layout/popup";
import { AssignStudentToSection } from "./AssignStudentToSection";

export const StudentSectionsList = ({ studentStyle, studentId }) => {
  const [sections, setSections] = useState(null);
  const [update,setUpdate]=useState("no");

  useEffect(() => {
    let fetched = true;
    const getStudentSectionsList = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
       studentLinks.getStudentSectionByStudentId + studentId,
        requestOptions
      );
      const json = await response.json();

      if (fetched) {
        setSections(json.data);
      }
    };

    getStudentSectionsList();
    return () => (fetched = false);
  }, [sections,update]);

  return (
    <div className={studentStyle.student__sections}>
      <br/>
      {update==="yes"&& <PopUp close={()=>{setUpdate("no")}}><AssignStudentToSection studentId={studentId}/></PopUp>}
      <button  className={studentStyle.assignSectionToStudentButton} onClick={() =>{ setUpdate("yes");}} >Assign student to section</button>
      {sections != null && sections.length == 0&& <h1>No sections found.</h1>    }
      {sections != null &&
        sections.map((element) => {
          return (
            <div key={element.id} className={studentStyle.student__sections__item}>
              <div> <h3> |{element.name}</h3></div>
              <div>
             <h5> <i>|{element.firstName+" " + element.lastName}</i></h5>
              </div>
              <div>
             <span>  Start Date: {getFormattedDate(element.startDate)}{"  "}-{"  "} End Date: {element.endDate}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};
