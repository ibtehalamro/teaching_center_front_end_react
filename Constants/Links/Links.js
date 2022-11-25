const domain="http://localhost:8081";

export const sectionLinks={
    studentsRelatedToSection:domain+"/section/list/student/",
    getSectionsList:domain+"/section/list/",
     getCurrentSectionsList:domain+"/section/currentSections/",
     assignStudentToSection:domain+"/section/assignStudent/"
}

export const courseLinks={
    courseSections:domain+"/course/sections/"
}

export const studentLinks={
    getStudentById:domain+"/student/",
    updateStudent:domain+"/student/",
    getStudentSectionByStudentId:domain+"/student/list/sections/"
}