import loginPO from '../page_objects/loginPO.cy.js';
import { school } from "../../../schoolpageobject.js"
import adminsectionPO from '../page_objects/adminsectionPO.cy.js';

const login=new loginPO();
const adminSection = new adminsectionPO();
class Enrolled{
    thereisEnrolledstudent(){
        login.getUrl();
        login.getUsername();
        login.getPassword();
        login.loginbuttonClick();
    
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
        adminSection.assignteachersLink();
        cy.get(school.selectAdviser,{timeout:300}).select('71');
        cy.get(school.selectTeacher,{timeout:300}).eq(0).select('72');
        cy.get(school.selectTeacher,{timeout:300}).eq(1).select('73');
        cy.get(school.selectTeacher,{timeout:300}).eq(2).select('74');
        cy.get(school.selectTeacher,{timeout:300}).eq(3).select('75');
        cy.get(school.assignteacherButton,{timeout:300}).click();
    
        cy.visit(school.adminpageUrl);
        cy.get(school.studentUsername,{timeout:300}).type('l.tuazon232@school.com');
        cy.get(school.studentPassword,{timeout:300}).type('qwerty123');
        cy.get(school.studentloginButton,{timeout:3000}).click();
    
        cy.contains(school.studentnavbar.enrollment,{timeout:300}).click();
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
        cy.contains('Tuazon,').should('be.visible');
    }
    assertPendinglist(){
        cy.contains(school.textPending,{timeout:300}).click();
        cy.contains('Tuazon,').should('not.exist');
    }

    //drop subject
    studentAdddropsubject(){
        cy.get('a[href*="viewstudent_enrolledsubject.php?student_number"]',{timeout:300}).click();
    }
    dropSubject(){
        for(var x=0;x<=3;x++){
            cy.get('.redblackButton',{scrollBehavior: false,force:true}).eq(x).click();
        }
    }
    assertDropsubject(){
        cy.reload();
        cy.contains('ADD AGAIN').should('be.visible');
    }

    //add back the subject
    addagainSubject(){
        for(var y=0;y<=3;y++){
            cy.get(school.bluewhiteButton,{scrollBehavior: false,force:true}).eq(y).click();
        }
    }
    assertAddbacksubject(){
        cy.reload();
        cy.get(school.redblackButton).last().should('be.visible');
    }
}

export default Enrolled