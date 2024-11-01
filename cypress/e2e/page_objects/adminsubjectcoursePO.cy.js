import { school } from "../../../schoolpageobject.js"
class SubjectCourse{
    addSubjectDetails(){
        cy.get(school.newSubject,{timeout:300}).type(school.newsubjectInput);
        cy.get(school.subjectCode,{timeout:300}).type(school.subjectcodeInput);
        cy.get(school.subjectDescription,{timeout:300}).type(school.subjectdescriptionInput);
    }
    addCourseDetails(){
        cy.get(school.newCourse,{timeout:300}).type(school.newcourseInput);
        cy.get(school.courseDescription,{timeout:300}).type(school.coursedescriptionInput);
    }
    
}

export default SubjectCourse