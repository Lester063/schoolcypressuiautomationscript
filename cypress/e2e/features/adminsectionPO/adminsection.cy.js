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
subjects = ['walato','78','79','80','81'],

/*
Given('I am logged in as an Admin',()=>{

});
*/
Given('I navigated to VIEW SECTIONS',()=>{
    globalobject.clickButton(school.navbarlink.viewSection,'text');
});
Given('I click the Add Section button',()=>{
    globalobject.clickButton(school.addsectionmodalTrigger,'!text');
});
When('I add three subject selection',()=>{
    for(i=0;i<3;i++){
        globalobject.clickButton(school.addselectSection,'!text');
    }
});
When('I choose a year and section',()=>{
    adminSection.selectOption(school.gradeyear,0,'11');
    adminSection.selectOption(school.section,0,'A');
});
When('I select subjects',()=>{
   for(xy=1;xy<=4;xy++){
        adminSection.selectOption(school.selectsubject,xy,subjects[xy])
   }
});
When('I select course',()=>{
    adminSection.selectOption(school.selectcourse,0,'ABM');
});
When('I entered maximum numbers',()=>{
    cy.get(school.maxstudentSection).type('3');
});
When('I choose start and end date of section to be available in enrollment',()=>{
    //globalobject.clickButton(school.start_date,'!text');
    cy.get(school.start_date).click().type('2022-10-16T08:30')
    cy.get(school.end_date).click().type('2022-10-16T20:30')
});
When('I click ADD SECTION button',()=>{
    globalobject.clickButton(school.addsectionButton,'!text');
});
Then('the section should be created successfully',()=>{
    globalobject.assertText('Created Section Successfully.','visible');
})