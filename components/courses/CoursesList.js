import Link from "next/link";
import React, { useEffect, useState } from "react";

export const CoursesList = ({ courseStyle, showSections }) => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    let fetched = true;
    const getCoursesList = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        "http://localhost:8081/course/list",
        requestOptions
      );
      const json = await response.json();

      if (fetched) {
        setCourses(json.data);
      }
    };

    getCoursesList();
    return () => (fetched = false);
  }, [courses]);

  const viewSectionsForCourse = (courseId, courseName) => {
    showSections({ courseId: courseId, courseName: courseName });
  };
  return (
    <div className={courseStyle.courses__list}>
      {courses != null &&
        courses.length > 0 &&
        courses.map((element) => (
          <div key={element.id} className={[courseStyle.courses__list__item, courseStyle[element.type.toLowerCase()]].join(" ")}>
            <div className={courseStyle.courses__list__item__title}>
              <div>{element.name}</div>
            </div>
            <div className={courseStyle.courses__list__item__links}>
              <Link href={"/student/edit/" + element.id}>Edit</Link> 
               <button
                onClick={() => viewSectionsForCourse(element.id, element.name)}
              >
                Sections
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
