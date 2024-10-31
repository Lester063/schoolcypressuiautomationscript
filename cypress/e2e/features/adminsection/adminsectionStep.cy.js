import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { school } from "../../../../schoolpageobject.js";
import globalobjects from '../../page_objects/globalObjects.cy.js';
import adminsectionPO from '../../page_objects/adminsectionPO.cy.js';
const globalobject = new globalobjects();


const adminSection = new adminsectionPO();


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

//create
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
    adminSection.start_end();
});
When('I click ADD SECTION button',()=>{
    adminSection.addsectionButton();
});
Then('the section should be created successfully',()=>{
    adminSection.assertsectionCreated();
});

//edit
When('I click the Edit section data',()=>{
    adminSection.editsectionModal();
});
When('I entered a new data',()=>{
    adminSection.entersectionNewdata();
});
When('I click update section button',()=>{
    adminSection.goEditButton();
});

When('I refresh the page',()=>{
    adminSection.refreshPage();
});

Then('I should see that the section is updated with the data I entered',()=>{
    adminSection.assertnewsectionData();
});

//open the View Student List page of that section
Given('there is existing section',()=>{
    adminSection.assertExistingsection();
});
When('I click the View Student List link of the existing section',()=>{
    adminSection.viewstudentLink();
});
Then('I should be navigated to View Student list page of that section',()=>{
    adminSection.assertviewstudentPage();
});

//open the Assign Teachers page of that section
When('I click the Assign Teachers link of that section',()=>{
    adminSection.navigateToAssignTeacherPage();
});
Then('I should be navigated to Assign Teachers page of that section',()=>{
    adminSection.assertassignteacherPage();
});

//odelete the section
When('I click the delete button of that section',()=>{
    adminSection.deletesectionButton();
});
Then('the section should be deleted',()=>{
    adminSection.assertsectionDeleted();
});
