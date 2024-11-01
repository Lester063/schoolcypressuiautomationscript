import { school } from "../../../schoolpageobject.js";

let studentName=['Student, Test1'];
class Teacher{
    goToMyAdvisoryPage(){
        cy.contains(school.teacherNavbar.myAdvisory).click();
    }
    viewAdvisoryStudent(){
        cy.get(school.viewAdvisoryStudentList).eq(0).click();
    }
    assertAdvisoryListPage(){
        for(var x=0;x<studentName.length;x++){
            cy.contains(studentName[x]).should('be.visible');
        }
    }
    goToSectionHandlePage(){
        cy.contains(school.teacherNavbar.sectionHandle).click();
    }
    viewSectionHandleStudent(){
        cy.get(school.viewSectionHandleList,{timeout:300}).click();
    }
}

export default Teacher