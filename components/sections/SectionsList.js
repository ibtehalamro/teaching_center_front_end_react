import Link from 'next/link';
import React from 'react'

export const SectionsList = ({sections}) => {
  const s = JSON.parse(JSON.stringify(sections));

  return  ( 
    <>
      {s.map((element) => {
        return (
          <h6>
            {element.id} -- {element.courseId}  <Link href={"/sections/studentsList/"+element.id}>Students</Link>
          </h6>
        );
      })}
    </>
  );
}
