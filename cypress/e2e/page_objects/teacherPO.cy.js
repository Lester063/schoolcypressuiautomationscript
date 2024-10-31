import { school } from "../../../schoolpageobject.js";

let studentName=['Student, Test1'];
class Teacher{
    loginTeacher(){
        cy.visit('http://localhost/school/login/loginteacher.php');
        cy.get(school.teacherEmail).type('test1teacher1@school.com');
        cy.get(school.teacherPassword).type('qwerty123');
        cy.get(school.studentloginButton).click();//studentloginButton has same css with teacherloginbutton
    }
    gotoMyAdvisoryPage(){
        cy.contains(school.teachernavbar.myAdvisory).click();
    }
    viewAdvisoryStudent(){
        cy.get(school.viewAdvisoryStudentList).eq(0).click();
    }
    assertAdvisoryListPage(){
        for(var x=0;x<studentName.length;x++){
            cy.contains(studentName[x]).should('be.visible');
        }
    }
    gotoSectionHandlePage(){
        cy.contains(school.teachernavbar.sectionHandle).click();
    }
    viewSectionHandleStudent(){
        cy.get(school.viewSectionHandleList,{timeout:300}).click();
    }
}

export default Teacher