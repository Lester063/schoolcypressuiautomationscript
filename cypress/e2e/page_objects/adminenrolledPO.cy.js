import loginPO from '../page_objects/loginPO.cy.js';
import { school } from "../../../schoolpageobject.js"
import adminsectionPO from '../page_objects/adminsectionPO.cy.js';

const login=new loginPO();
const adminSection = new adminsectionPO();
class Enrolled{
    thereIsEnrolledstudent(){
        login.loginUser('Admin', 'admin@school.com', 'qwerty123');
    
        cy.contains(school.navbarLink.viewSection,{timeout:300}).click();
        adminSection.openAddSectionModal();
        adminSection.addSubjectSelectOption();
        adminSection.selectYearSection();
        adminSection.selectSubject();
        adminSection.selectCourse();
        adminSection.enterMaxStudentNumber();
        adminSection.sectionStartEnd();
        adminSection.addSectionButton();
        cy.reload();
        adminSection.navigateToAssignTeacherPage();
        adminSection.assignAdviser();
        adminSection.assignTeachers();
        adminSection.clickAssignButton();
    
        login.loginUser('Student', 't.student241@school.com', 'qwerty123');
    
        cy.contains(school.studentNavbar.enrollment,{timeout:300}).click({force:true});
        cy.get(school.clickSection,{timeout:300}).eq(0).click();
    
        cy.get(school.clickEnrollbutton,{timeout:300}).click();
    }
    viewEnrolledPage(){
        cy.contains(school.navbarLink.viewEnrolled,{timeout:300}).click();
    }
    clickPendingTab(){
        cy.contains(school.textPending,{timeout:300}).click();
    }
    clickPendingStudent(){
        //first student -- eq will determine
        cy.get(school.approveStudent,{timeout:300}).eq(0).click();
    }
    assertIfStudentAccepted(){
        cy.contains(school.textApproved,{timeout:300}).click();
        cy.contains('Student').should('be.visible');
    }
    assertPendingList(){
        cy.contains(school.textPending,{timeout:300}).click();
        cy.contains('Student').should('not.exist');
    }

    //drop subject
    studentAddDropSubject(){
        cy.get(school.addDropLink,{timeout:300}).click();
    }
    dropSubject(){
        for(var x=0;x<=1;x++){
            cy.get(school.redBlackButton,{scrollBehavior: false,force:true}).eq(x).click();
        }
        
    }
    assertDropSubject(){
        cy.reload();
        cy.contains('ADD AGAIN').should('be.visible');
    }

    //add back the subject
    addAgainSubject(){
        for(var y=0;y<=1;y++){
            cy.get(school.blueWhiteButton,{scrollBehavior: false,force:true}).eq(y).click();
        }
    }
    assertAddBackSubject(){
        cy.reload();
        cy.get(school.redBlackButton).last().should('be.visible');
    }
}

export default Enrolled