import loginPO from '../page_objects/loginPO.cy.js';
import { school } from "../../../schoolpageobject.js"
import adminsectionPO from '../page_objects/adminsectionPO.cy.js';

const login=new loginPO();
const adminSection = new adminsectionPO();
let subjects=['ICT MAJOR', 'Math'];
let profile=['Test1 Student', 't.student241@school.com'];
class StudentEnrollment{
    thereisSection(){
        login.navigateToAdminLoginPage();
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
        cy.visit('http://localhost/school/login/loginpage.php');
        cy.get(school.inputstudentEmail).type('t.student241@school.com').click({force:true});
        cy.get(school.inputstudentPassword).type(school.qwerty123).click({force:true});
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
        cy.wrap(subjects).each((ele)=>
            cy.contains(ele).should('be.visible')
        );
        /*
        for(var subjectNum=0;subjectNum<=3;subjectNum++){
            cy.contains(subjects[subjectNum]).should('be.visible');
        }*/
        /*
        cy.get('table').each((ele,x)=>
            cy.get(ele).contains(subjects[x])
        );
        */
    }
    gotoGrades(){
        cy.contains(school.studentnavbar.viewGrades).should('be.visible').click({force:true});
    }
    gotoProfileInfo(){
        cy.contains(school.studentnavbar.profile,{timeout:300}).click();
        cy.contains(school.studentnavbar.viewProfile).should('be.visible').click({force:true});
    }
    assertProfile(){
        cy.wrap(profile).each((el)=>cy.contains(el).should('be.visible'))
    }

    gotoPassword(){
        cy.contains(school.studentnavbar.profile,{timeout:300}).click({force:true});
        cy.contains(school.studentnavbar.password).should('be.visible').click({force:true});
    }
    changePassword(oldPassword,newPassword,verifyPassword){
        cy.get(school.oldPassword).clear().type(oldPassword);
        cy.get(school.newPassword).clear().type(newPassword);
        cy.get(school.verifynewPassword).clear().type(verifyPassword);
        school.qwerty123 = verifyPassword;

    }
    clickChangePassword(){
        cy.get(school.changePassword).click({force:true});
    }
    assertchangedPassword(){
        //cy.contains('Changed Password Successfully').should('be.visible');
        
    }
}

export default StudentEnrollment