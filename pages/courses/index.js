 import React, { useState, useEffect } from "react";
import { CourseSectionsList } from "../../components/courses/CourseSectionsList";
import { CoursesList } from "../../components/courses/CoursesList";
import {CourseForm} from "../../components/courses/NewCourseForm";
import { SectionForm } from "../../components/sections/SectionForm";
import { SectionStudentsList } from "../../components/sections/SectionStudentsList";
import courseStyle from "../../styles/course/course.module.scss";

const Courses = () => {
  const [componentName, setComponentName] = useState("new course");
  const [courseObject,setCourseObject] = useState(0);
  useEffect(() => {}, [componentName]);

  const buttonElement = (buttonComponentName, buttonLabel) => {
    return (
      <button key={buttonLabel} className={["component__links__link"].join(" ")} onClick={() => setComponentName(buttonComponentName)}>
        {buttonLabel}
      </button>
    );
  };

  const showSections = (courseObject) => { 
    const course={...courseObject}
  setCourseObject(course);
  setComponentName("sections");
  }

  const showSectionStudents = (sectionId) => { 
    const course=sectionId
  setCourseObject(course);
  setComponentName("sectionStudents");
  }
  const viewCreateSectionForm = (courseId) => { 
    const course=courseId;
  setCourseObject(course);
  setComponentName("createSection");
  }

  const components = [
    {
      name: "new course",
      buttonLabel: "New Course",
      component: <CourseForm key={"form"}/>,
    },
    {
      name: "courses",
      buttonLabel: "Courses List",
      component: (
        <CoursesList key={"list"} courseStyle={courseStyle}
         showSections={n=>showSections(n)}
        />
      ),
    },
    {
      name: "sections",
      buttonLabel: "none",
      component: (
        <CourseSectionsList key={"sections"} 
       courseStyle={courseStyle}   courseId={courseObject.courseId} courseName={courseObject.courseName}
       showSectionStudents={sectionId=>showSectionStudents(sectionId)} showCreateSectionForm={(courseId,courseName)=>viewCreateSectionForm(courseId,courseName)} />
      ),
    },
    {
      name: "sectionStudents",
      buttonLabel: "none",
      component: (
        <SectionStudentsList key={"students"} 
       courseStyle={courseStyle}   sectionId={courseObject} 
       showSectionStudents={sectionId=>showSectionStudents(sectionId)} />
      ),
    }, {
      name: "createSection",
      buttonLabel: "none",
      component: (
        <SectionForm key={"createSection"} 
           sectionId={courseObject} 
            />
      ),
    },
  ];
  return (
    <div>
      <div className="component__links">
     {components.map((component) => {
      if(component.buttonLabel!=="none")
        return buttonElement(component.name, component.buttonLabel);
      })}
      </div>

      {components.map((cName) => {
        if (componentName == cName.name) return cName.component;
      })}
    
    </div>
  );
};

export default Courses;







// import Link from "next/link";

// const Courses= () => {
//     return (
//       <div>
//           <div>
//           <Link href="/courses/new">New Course</Link> 
//            <Link href="/courses/list">Course List</Link>
//           </div>
//       </div>
//     )
//   }
  
  
//   export default Courses;