import { Given, When, Then,And, Before } from "@badeball/cypress-cucumber-preprocessor";
import { school } from "../../../../schoolpageobject.js"//importing globalobjectss (css/path)

import adminenrolledPO from '../../page_objects/adminenrolledPO.cy.js';
import studentEnrollmentPO from '../../page_objects/studentenrollmentPO.cy.js';
import loginPO from '../../page_objects/loginPO.cy.js';
import adminsectionPO from '../../page_objects/adminsectionPO.cy.js';

const studentenrollmentPO= new studentEnrollmentPO();
const enrolled = new adminenrolledPO()
const login=new loginPO();
const adminSection = new adminsectionPO();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

//enrollment
Given('today is the enrollment day',()=>{
    studentenrollmentPO.thereIsSection();
});
Given('I am logged in as a Student',()=>{
    login.loginUser('Student', 't.student241@school.com', 'qwerty123')
});
When('I navigate to ENROLLMENT Page',()=>{
    cy.contains(school.studentnavbar.enrollment).click();
});
When('I choose a section',()=>{
    studentenrollmentPO.selectSection();
});
When('I click the Enroll button',()=>{
    studentenrollmentPO.clickEnrollbutton();
});
Then('I should see a success message that I enrolled successfully',()=>{
    studentenrollmentPO.assertEnroll();
});
Then('I delete the section to clear the section table',()=>{
    login.loginUser('Admin', 'admin@school.com', 'qwerty123');
    cy.contains(school.navbarlink.viewSection).click();
    adminSection.deleteSectionButton();
});

//view registration
Given('I already enrolled',()=>{
    enrolled.thereIsEnrolledstudent();
    //login admin
    login.loginUser('Admin', 'admin@school.com', 'qwerty123');
    //view enrolled
    enrolled.viewEnrolledPage();
    //pending
    enrolled.clickPendingTab();
    //accept student
    enrolled.clickPendingStudent();
});


/*
Given('I am logged in as a Student',()=>{
})
*/
Given('I navigate to MY REGISTRATION Page',()=>{
    studentenrollmentPO.goToMyRegistrationPage();
});
When('I click the section bar',()=>{
    studentenrollmentPO.openRegistration();
});
Then('I should see the subject I enrolled',()=>{
    studentenrollmentPO.assertRegisteredSubject();
})
/*
Then('I delete the section to clear the section table',()=>{
});
*/

//view my grades
/*
Given('I already enrolled',()=>{
});
Given('I am logged in as a Student',()=>{
})
*/
Given('I navigate to GRADES tab',()=>{
    studentenrollmentPO.goToGrades();
});
When('I expand my grade for the year',()=>{
    studentenrollmentPO.openRegistration();
});
Then('I should see my enrolled subject with grades',()=>{
    studentenrollmentPO.assertRegisteredSubject();
});
/*
Then('I delete the section to clear the section table',()=>{
});
*/

When('I navigate to PROFILE > VIEW PROFILE',()=>{
    studentenrollmentPO.goToProfileInfo();
});
Then('my info should be displayed',()=>{
    studentenrollmentPO.assertProfile();
});
//change password
/*
Given('I am logged in as a Student',()=>{
})
*/
Given('I navigate to PROFILE > PASSWORD',()=>{
    studentenrollmentPO.goToPassword();
});
When('I entered my old and new password, {string} {string} {string}',(oldPassword, newPassword, verifyPassword)=>{
    studentenrollmentPO.changePassword(oldPassword, newPassword, verifyPassword);
});
When('I click Change Password button',()=>{
    studentenrollmentPO.clickChangePassword();
});
Then('I should be able to change my password successfully',()=>{
    studentenrollmentPO.assertChangedPassword();
})