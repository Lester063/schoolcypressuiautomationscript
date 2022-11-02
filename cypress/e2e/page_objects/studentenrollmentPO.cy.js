import loginPO from '../page_objects/loginPO.cy.js';
import { school } from "../../../schoolpageobject.js"
import adminsectionPO from '../page_objects/adminsectionPO.cy.js';

const login=new loginPO();
const adminSection = new adminsectionPO();
let subjects=['MATH','ENGLISH','SCIENCE','FILIPINO'];
class StudentEnrollment{
    thereisSection(){
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
    }
    loginStudent(){
        cy.visit('http://localhost/college/login/loginpage.php');
        cy.get(school.inputstudentEmail).type('l.tuazon232@school.com').click({force:true});
        cy.get(school.inputstudentPassword).type('qwerty123').click({force:true});
        cy.get('.login-submitButton').click({force:true});
    }
    selectSection(){
        cy.get(school.selectsection).click();
    }
    clickEnrollbutton(){
        cy.get(school.enrollbutton).click();
    }
    assertEnroll(){
        cy.get(school.enrollmentMessage).should('contain', 'Success!');
    }
    gotoMyRegistrationPage(){
        cy.contains(school.studentnavbar.viewRegistration).click();
    }
    openRegistration(){
        cy.get(school.registrationToggle).click();
    }
    assertRegisteredSubject(){
        for(var subjectNum=0;subjectNum<=3;subjectNum++){
            cy.contains(subjects[subjectNum]).should('be.visible');
        }
        
    }
}

export default StudentEnrollment