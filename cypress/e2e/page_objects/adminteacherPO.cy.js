import { school } from "../../../schoolpageobject.js"
class Adminteacher{
    //create teacher
    createteacherPage(){
        cy.contains(school.navbarlink.viewTeacher,{timeout:300}).click();
        cy.contains(school.navbarlink.addTeacher,{timeout:300}).click();
    }
    enterteacherDetails(){
        cy.get(school.teacherFirstname,{timeout:300}).type('Erica');
        cy.get(school.teacherMiddlename,{timeout:300}).type('Tuazon');
        cy.get(school.teacherLastname,{timeout:300}).type('Ventura');
        cy.get(school.teacherContactnumber,{timeout:300}).type('09212483577');
        cy.get(school.teacherUserlevel,{timeout:300}).select('TEACHER');
        cy.get(school.teacherDepartment,{timeout:300}).select('math');
        cy.get(school.teacherRank,{timeout:300}).select('teacher1');
    }
    addteacherButton(){
        cy.get(school.teacheraddButton,{timeout:300}).click();
    }
    //edit -the data
    newteacherdetails(){
        cy.get(school.teacherlastnameEdit,{timeout:300}).type('Venturaaa');
    }
}

export default Adminteacher