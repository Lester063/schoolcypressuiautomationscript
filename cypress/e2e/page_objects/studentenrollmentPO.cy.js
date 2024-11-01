import loginPO from '../page_objects/loginPO.cy.js';
import { school } from "../../../schoolpageobject.js"
import adminsectionPO from '../page_objects/adminsectionPO.cy.js';

const login=new loginPO();
const adminSection = new adminsectionPO();
let subjects=['ICT MAJOR', 'Math'];
let profile=['Test1 Student', 't.student241@school.com'];
class StudentEnrollment{
    thereIsSection(){
        login.loginUser('Admin', 'admin@school.com', 'qwerty123');
    
        cy.contains(school.navbarlink.viewSection,{timeout:300}).click();
        adminSection.openAddSectionModal();
        adminSection.addSubjectSelectOption();
        adminSection.selectYearSection();
        adminSection.selectSubject();
        adminSection.selectCourse();
        adminSection.enterMaxStudentNumber();
        adminSection.sectionStartEnd();
        adminSection.addSectionButton();
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
    goToMyRegistrationPage(){
        cy.contains(school.studentnavbar.viewRegistration).click();
    }
    openRegistration(){
        cy.get(school.registrationToggle).click();
    }
    assertRegisteredSubject(){
        cy.wrap(subjects).each((ele)=>
            cy.contains(ele).should('be.visible')
        );
    }
    goToGrades(){
        cy.contains(school.studentnavbar.viewGrades).should('be.visible').click({force:true});
    }
    goToProfileInfo(){
        cy.contains(school.studentnavbar.profile,{timeout:300}).click();
        cy.contains(school.studentnavbar.viewProfile).should('be.visible').click({force:true});
    }
    assertProfile(){
        cy.wrap(profile).each((el)=>cy.contains(el).should('be.visible'))
    }

    goToPassword(){
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
    assertChangedPassword(){
        //cy.contains('Changed Password Successfully').should('be.visible');
    }
}

export default StudentEnrollment