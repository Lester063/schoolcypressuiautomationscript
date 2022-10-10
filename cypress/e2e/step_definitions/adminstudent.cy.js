import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPO from '../features/loginPO/loginPO.cy.js';
import admin_studentPO from '../features/adminstudentPO/adminstudentPO.cy.js';
const adminstudent=new admin_studentPO();
const login=new loginPO();


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
  
//Should be able to create student account
Given('I am logged in as an Admin',()=>{
    login.getUrl();
    login.getUsername();
    login.getPassword();
    login.loginbuttonClick();
    login.assertLogin();
});
Given('I navigate to VIEW STUDENT > Add Student',()=>{
    adminstudent.gotoPage('VIEW STUDENTS');
    adminstudent.clickButton('Add Student','text')
});

When('I enter the details of student',()=>{
    adminstudent.enterstudentDetails();
});
When('I click the create button',()=>{
    adminstudent.clickButton('#addbutton','!text')
});
Then('the account should be created successfully',()=>{
    adminstudent.assertText('Admin Contact #','visible');
});
//update student data
Given('I am in the student page',()=>{
    adminstudent.gotoPage('VIEW STUDENTS');
});
Given('I search the student I created',()=>{
    adminstudent.search('#searchStudent','Paynadoo');
})
Given('I click the Edit Data button',()=>{
    adminstudent.clickButton('.editbutton','!text');
});
When('I entered new data of the student',()=>{
    adminstudent.newdatastudent();
});
When('I click the update button',()=>{
    adminstudent.clickButton('#submitbutton-editstudent','!text');
});
When('I close the modal box',()=>{
    adminstudent.clickButton('.closebutton-addstudent','!text');
});
Then('the student data should be update successfully',()=>{
    adminstudent.assertText('Edreeeeen Maeee','visible');
});
//deactivate the student
When('I click the activated button',()=>{
    adminstudent.clickButton('ACTIVATED','text');
});
Then('the student should be deactivated',()=>{
    adminstudent.assertText('DEACTIVATED','visible')
});
//Should be able to search and delete the student I created
When('I search for the student',()=>{
    adminstudent.search('#searchStudent','Paynadoooo');
});
When('I delete the student',()=>{
    adminstudent.clickButton('Delete','text');
});
Then('the student should be deleted successfully',()=>{
    adminstudent.assertText('Edreeeeen Maeee','notvisible');
});

