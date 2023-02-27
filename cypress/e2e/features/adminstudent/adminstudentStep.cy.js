import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPO from '../../page_objects/loginPO.cy.js';
import admin_studentPO from '../../page_objects/adminstudentPO.cy.js';
import globalobjects from '../../page_objects/globalObjects.cy.js';
import { school } from "../../../../schoolpageobject.js"
const globalobject = new globalobjects();
const adminstudent=new admin_studentPO();
const login=new loginPO();


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
/*
beforeEach(function(){
    login.getUrl();
    login.getUsername();
    login.getPassword();
    login.loginbuttonClick();
})
*/
//Should be able to create student account
/*
beforeEach(function(){
    login.getUrl();
    login.getUsername();
    login.getPassword();
    login.loginbuttonClick();
});
*/
Given('I am logged in as an Admin',()=>{
    login.getUrl();
    login.getUsername();
    login.getPassword();
    login.loginbuttonClick();
    globalobject.assertText('Lester','visible');
});

Given('I navigate to VIEW STUDENT > Add Student',()=>{
    adminstudent.gotoPage(school.navbarlink.viewStudent);
    globalobject.clickButton(school.addStudent,'text')
});

When('I enter the details of student',()=>{
    adminstudent.enterstudentDetails();
});
When('I click the create button',()=>{
    adminstudent.addstudentButton();
});
Then('the account should be created successfully',()=>{
    globalobject.assertText('Admin Contact #','visible');
});
//update student data
Given('I am in the student page',()=>{
    globalobject.clickButton('VIEW STUDENTS','text');
    globalobject.assertText('VIEW STUDENT','visible');
});
Given('I search the student I created',()=>{
    globalobject.search(school.searchField,'Tuazonn');
})
Given('I click the Edit Data button',()=>{
    globalobject.clickButton(school.editButton,'!text');
});
When('I entered new data of the student',()=>{
    adminstudent.newdatastudent();
});
When('I click the update button',()=>{
    globalobject.clickButton(school.submiteditButton,'!text');
});/*
When('I close the modal box',()=>{
    globalobject.clickButton(school.modalcloseButton,'!text');
});*/
Then('the student data should be update successfully',()=>{
    globalobject.assertText('Tuazonn, Lesterr','visible');
});
//deactivate the student
When('I click the activated button',()=>{
    globalobject.clickButton(school.activatedText,'text');
});
Then('the student should be deactivated',()=>{
    globalobject.assertText(school.deactivatedText,'visible')
});
//Should be able to search and delete the student I created
When('I search for the student',()=>{
    globalobject.search(school.searchField,'Tuazonn');
});
When('I delete the student',()=>{
    globalobject.clickButton(school.deleteText,'text');
});
Then('the student should be deleted successfully',()=>{
    globalobject.assertText('Lesterr','notvisible');
});

