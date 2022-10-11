import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPO from '../../page_objects/loginPO.cy.js';
import admin_studentPO from '../../page_objects/adminstudentPO.cy.js';
import globalobjects from '../../page_objects/globalObjects.cy.js';
const globalobject = new globalobjects();
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
    globalobject.clickButton('Add Student','text')
});

When('I enter the details of student',()=>{
    adminstudent.enterstudentDetails();
});
When('I click the create button',()=>{
    globalobject.clickButton('#addbutton','!text')
});
Then('the account should be created successfully',()=>{
    globalobject.assertText('Admin Contact #','visible');
});
//update student data
Given('I am in the student page',()=>{
    adminstudent.gotoPage('VIEW STUDENTS');
});
Given('I search the student I created',()=>{
    globalobject.search('#searchStudent','Paynadoo');
})
Given('I click the Edit Data button',()=>{
    globalobject.clickButton('.editbutton','!text');
});
When('I entered new data of the student',()=>{
    adminstudent.newdatastudent();
});
When('I click the update button',()=>{
    globalobject.clickButton('#submitbutton-editstudent','!text');
});
When('I close the modal box',()=>{
    globalobject.clickButton('.closebutton-addstudent','!text');
});
Then('the student data should be update successfully',()=>{
    globalobject.assertText('Edreeeeen Maeee','visible');
});
//deactivate the student
When('I click the activated button',()=>{
    globalobject.clickButton('ACTIVATED','text');
});
Then('the student should be deactivated',()=>{
    globalobject.assertText('DEACTIVATED','visible')
});
//Should be able to search and delete the student I created
When('I search for the student',()=>{
    globalobject.search('#searchStudent','Paynadoooo');
});
When('I delete the student',()=>{
    globalobject.clickButton('Delete','text');
});
Then('the student should be deleted successfully',()=>{
    globalobject.assertText('Edreeeeen Maeee','notvisible');
});

