import { school } from "../../../schoolpageobject.js"
class Adminteacher{
    
    //create teacher
    createTeacherPage(){
        cy.contains(school.navbarLink.viewTeacher,{timeout:300}).click();
        cy.contains(school.navbarLink.addTeacher,{timeout:300}).click();
    }
    enterTeacherDetails(){
        cy.get(school.teacherFirstname,{timeout:300}).type('Forthetest');
        cy.get(school.teacherMiddlename,{timeout:300}).type('Fortheautomation');
        cy.get(school.teacherLastname,{timeout:300}).type('Forthepractice');
        cy.get(school.teacherContactnumber,{timeout:300}).type('09212483577');
        cy.get(school.teacherUserlevel,{timeout:300}).select('TEACHER');
        cy.get(school.teacherDepartment,{timeout:300}).select('math');
        cy.get(school.teacherRank,{timeout:300}).select('teacher1');
    }
    addTeacherButton(){
        cy.get(school.teacherAddButton,{timeout:300}).click();
    }
    //edit -the data
    newTeacherDetails(){
        cy.get(school.teacherLastNameEdit,{timeout:300}).clear().type('Forthepracticeupdate');
    }
}

export default Adminteacher