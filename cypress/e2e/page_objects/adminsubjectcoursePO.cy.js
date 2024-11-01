import { school } from "../../../schoolpageobject.js"
class SubjectCourse{
    addSubjectDetails(){
        cy.get(school.newSubject,{timeout:300}).type(school.newSubjectInput);
        cy.get(school.subjectCode,{timeout:300}).type(school.subjectCodeInput);
        cy.get(school.subjectDescription,{timeout:300}).type(school.subjectDescriptionInput);
    }
    addCourseDetails(){
        cy.get(school.newCourse,{timeout:300}).type(school.newCourseInput);
        cy.get(school.courseDescription,{timeout:300}).type(school.courseDescriptionInput);
    }
    
}

export default SubjectCourse