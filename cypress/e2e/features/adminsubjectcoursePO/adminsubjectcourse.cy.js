import { Given, When, Then,And, Before } from "@badeball/cypress-cucumber-preprocessor";
import globalobjects from '../../page_objects/globalObjects.cy.js';
import subjectcourse from '../../page_objects/adminsubjectcoursePO.cy.js';
import loginPO from '../../page_objects/loginPO.cy.js';

const subjectcoursepo=new subjectcourse();
const globalobject = new globalobjects();
const login=new loginPO();
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
beforeEach(function(){
    login.getUrl();
    login.getUsername();
    login.getPassword();
    login.loginbuttonClick();
})
Given('I am logged in as an Admins',()=>{
    globalobject.assertText('Lester','visible');
});

Given('I navigate SUBJECT > VIEW SUBJECT',()=>{
    globalobject.clickButton('SUBJECT/COURSE','text');
    globalobject.clickButton('VIEW SUBJECT','text');
});
When('I enter the course name and description in text box',()=>{
    subjectcoursepo.addsubjectDetails();
});
When('I click the Add button',()=>{
    globalobject.clickButton('Add','text');
});
Then('the course should be created successfully',()=>{
    globalobject.assertText('this is new','visible');
})

//delete the subject
When('I click delete the newly created subject',()=>{
    cy.get('.redblackButton').last().click();
});
Then('the subject should be deleted successfully',()=>{
    globalobject.assertText('this is new','notvisible');
})