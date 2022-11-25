 
import React, { useState, useEffect } from "react";
import { courseLinks, sectionLinks } from "../../Constants/Links/Links";

export const CourseSectionsList = ({ courseId, courseName, courseStyle ,showSectionStudents,showCreateSectionForm}) => {
  const [sections, setSections] = useState(null);
  useEffect(() => {
    let fetched = true;
    const getSectionsList = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
      courseLinks.courseSections + courseId,
        requestOptions
      );
      const json = await response.json();

      if (fetched) {
        setSections(json.data);
      }
    };

    getSectionsList();
    return () => (fetched = false);
  }, [sections]);


const viewSectionStudents=(sectionId)=>{
  showSectionStudents(sectionId);
}

const viewCreateNewSectionForm=(courseId)=>{
  showCreateSectionForm(courseId,courseName);
}

  return (
    <div className={courseStyle.course__sections__list}>
     <button onClick={()=>viewCreateNewSectionForm(courseId)}>New Section</button>
      {(sections == null || sections.length == 0) && <h1>No sections added</h1>}
      {(sections != null && sections.length >0) &&     <h1>
        
        Sections for course <span>{courseName}</span>

      </h1>}
      {sections != null &&

        sections.map((element) => {
          return (
            <div key={element.id} className={courseStyle.course__sections__list__item}>
              <div>
                <h5>
                  Teacher Name ={element.firstName} {element.secondName}
                  {element.lastName}
                </h5>
                <h4>
                  {element.startTime} - {element.endTime}
                </h4>
                <h6>
                  {element.startDate.substring(0,element.startDate.indexOf("T"))}{" "}
                  - {element.endDate.substring(0, element.endDate.indexOf("T"))}
                </h6>
              </div>
              <div>
                <h6>
                <button onClick={() => viewSectionStudents(element.id)}>
                Students
              </button>
                </h6>
              </div>
            </div>
          );
        })}
    </div>
  );
};
