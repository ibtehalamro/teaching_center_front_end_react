import React from "react";

export const TeachersList = ({ teachers }) => {
  const s = JSON.parse(JSON.stringify(teachers));
  return (
    <>
      {s.map((element) => {
        return (
          <h6>
            {element.id} -- {element.firstName} {element.lastName}
          </h6>
        );
      })}
    </>
  );
};
