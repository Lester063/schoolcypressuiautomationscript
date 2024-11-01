import { Given, When, Then,And, Before } from "@badeball/cypress-cucumber-preprocessor";
import globalobjects from '../../page_objects/globalObjects.cy.js';
import subjectcourse from '../../page_objects/adminsubjectcoursePO.cy.js';
import loginPO from '../../page_objects/loginPO.cy.js';
import { school } from "../../../../schoolpageobject.js"//importing globalobjectss (css/path)
const subjectcoursepo=new subjectcourse();
const globalobject = new globalobjects();
const login=new loginPO();
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});


/*
Given('I am logged in as an Admin',()=>{
    globalobject.assertText('Lester','visible');
});*/

Given('I navigate SUBJECT > VIEW SUBJECT',()=>{
    globalobject.clickButton(school.navbarLink.subjectCourse,'text');
    globalobject.clickButton(school.navbarLink.viewSubject,'text');
});
When('I enter the subject name and description in text box',()=>{
    subjectcoursepo.addSubjectDetails();
});
When('I click the Add button',()=>{
    globalobject.clickButton(school.addSubjectButton,'!text');
});
Then('the subject should be created successfully',()=>{
    globalobject.assertText(school.newSubjectInput,'visible');
})

//delete the subject
When('I click delete the newly created subject',()=>{
    cy.get(school.redBlackButton).last().click();
});
Then('the subject should be deleted successfully',()=>{
    globalobject.assertText(school.newSubjectInput,'notvisible');
});

//add new course
Given('I navigated to SUBJECT > VIEW COURSE',()=>{
    globalobject.clickButton(school.navbarLink.subjectCourse,'text');
    globalobject.clickButton(school.navbarLink.viewCourse,'text');
});
When('I enter the course name and course description in the input field',()=>{
    subjectcoursepo.addCourseDetails();
});
When('I click the Add course button',()=>{
    globalobject.clickButton(school.blueWhiteButton,'!text');
});
Then('the course should be created successfully',()=>{
    globalobject.assertText(school.newCourseInput,'visible');
});

//delete course
When('I click the delete button of the newly created course',()=>{
    cy.get(school.redBlackButton).last().click();
});
Then('the course should be deleted successfully',()=>{
    globalobject.assertText(school.courseDescriptionInput,'notvisible');
})