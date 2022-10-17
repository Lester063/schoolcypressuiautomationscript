import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { school } from "../../../../schoolpageobject.js";
import loginPO from '../../page_objects/loginPO.cy.js';
import admin_studentPO from '../../page_objects/adminstudentPO.cy.js';
import globalobjects from '../../page_objects/globalObjects.cy.js';
import adminsectionPO from '../../page_objects/adminsectionPO.cy.js';
const globalobject = new globalobjects();
const adminstudent=new admin_studentPO();
const login=new loginPO();

const adminSection = new adminsectionPO();


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
//value of subjects --value are the id of each subject
subjects = ['walato','78','79','80','81'];

/*
Given('I am logged in as an Admin',()=>{

});
*/
Given('I navigated to VIEW SECTIONS',()=>{
    globalobject.clickButton(school.navbarlink.viewSection,'text');
});
Given('I click the Add Section button',()=>{
    adminSection.openaddsectionModal();
});
When('I add three subject selection',()=>{
    adminSection.addsubjectselectOption();
});
When('I choose a year and section',()=>{
    adminSection.selectyearSection();
});
When('I select subjects',()=>{
    adminSection.selectSubject();
});
When('I select course',()=>{
    adminSection.selectCourse();
});
When('I entered maximum numbers',()=>{
    adminSection.entermaxstudentNumber();
});
When('I choose start and end date of section to be available in enrollment',()=>{
    //globalobject.clickButton(school.start_date,'!text');
    adminSection.start_end();
});
When('I click ADD SECTION button',()=>{
    adminSection.addsectionButton();
});
Then('the section should be created successfully',()=>{
    adminSection.assertsectionCreated();
});