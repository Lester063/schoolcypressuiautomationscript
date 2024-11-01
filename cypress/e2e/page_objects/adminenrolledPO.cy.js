import loginPO from '../page_objects/loginPO.cy.js';
import { school } from "../../../schoolpageobject.js"
import adminsectionPO from '../page_objects/adminsectionPO.cy.js';

const login=new loginPO();
const adminSection = new adminsectionPO();
class Enrolled{
    thereisEnrolledstudent(){
        login.loginUser('Admin', 'admin@school.com', 'qwerty123');
    
        cy.contains(school.navbarlink.viewSection,{timeout:300}).click();
        adminSection.openaddsectionModal();
        adminSection.addsubjectselectOption();
        adminSection.selectyearSection();
        adminSection.selectSubject();
        adminSection.selectCourse();
        adminSection.entermaxstudentNumber();
        adminSection.start_end();
        adminSection.addsectionButton();
        cy.reload();
        adminSection.navigateToAssignTeacherPage();
        adminSection.assignAdviser();
        adminSection.assignTeachers();
        adminSection.clickAssignButton();
    
        login.loginUser('Student', 't.student241@school.com', 'qwerty123');
    
        cy.contains(school.studentnavbar.enrollment,{timeout:300}).click({force:true});
        cy.get(school.clickSection,{timeout:300}).eq(0).click();
    
        cy.get(school.clickEnrollbutton,{timeout:300}).click();
    }
    viewenrolledPage(){
        cy.contains(school.navbarlink.viewEnrolled,{timeout:300}).click();
    }
    clickPendingtab(){
        cy.contains(school.textPending,{timeout:300}).click();
    }
    clickPendingstudent(){
        //first student -- eq will determine
        cy.get(school.approveStudent,{timeout:300}).eq(0).click();
    }
    assertIfstudentaccepted(){
        cy.contains(school.textApproved,{timeout:300}).click();
        cy.contains('Student').should('be.visible');
    }
    assertPendinglist(){
        cy.contains(school.textPending,{timeout:300}).click();
        cy.contains('Student').should('not.exist');
    }

    //drop subject
    studentAdddropsubject(){
        cy.get(school.addDropLink,{timeout:300}).click();
    }
    dropSubject(){
        for(var x=0;x<=1;x++){
            cy.get(school.redblackButton,{scrollBehavior: false,force:true}).eq(x).click();
        }
        
    }
    assertDropsubject(){
        cy.reload();
        cy.contains('ADD AGAIN').should('be.visible');
    }

    //add back the subject
    addagainSubject(){
        for(var y=0;y<=1;y++){
            cy.get(school.bluewhiteButton,{scrollBehavior: false,force:true}).eq(y).click();
        }
    }
    assertAddbacksubject(){
        cy.reload();
        cy.get(school.redblackButton).last().should('be.visible');
    }
}

export default Enrolled