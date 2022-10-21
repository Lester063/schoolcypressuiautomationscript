import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPO from '../../page_objects/loginPO.cy.js';
import admin_studentPO from '../../page_objects/adminstudentPO.cy.js';
import globalobjects from '../../page_objects/globalObjects.cy.js';
import { school } from "../../../../schoolpageobject.js"
import adminsectionPO from '../../page_objects/adminsectionPO.cy.js';
import AdminStudent from "../../page_objects/adminstudentPO.cy.js";
const globalobject = new globalobjects();
const adminstudent=new admin_studentPO();
const login=new loginPO();

const adminSection = new adminsectionPO();

Background:
Given('there is an enrolled pending student',()=>{
    login.getUrl();
    login.getUsername();
    login.getPassword();
    login.loginbuttonClick();

    globalobject.clickButton(school.navbarlink.viewSection,'text');
    adminSection.openaddsectionModal();
    adminSection.addsubjectselectOption();
    adminSection.selectyearSection();
    adminSection.selectSubject();
    adminSection.selectCourse();
    adminSection.entermaxstudentNumber();
    adminSection.start_end();
    adminSection.addsectionButton();
    cy.reload();
    adminSection.assignteachersLink();
    cy.get('[name="adviser_id"]',{timeout:300}).select('71');
    cy.get('[name="teacher[]"]',{timeout:300}).eq(0).select('72');
    cy.get('[name="teacher[]"]',{timeout:300}).eq(1).select('73');
    cy.get('[name="teacher[]"]',{timeout:300}).eq(2).select('74');
    cy.get('[name="teacher[]"]',{timeout:300}).eq(3).select('75');
    cy.get('#new_assignTeachers > .bluewhiteButton',{timeout:300}).click();

    cy.visit('http://localhost/college/login/loginpage.php');
    cy.get('.inputUsername',{timeout:300}).type('l.tuazon232@school.com');
    cy.get('.inputPassword',{timeout:300}).type('qwerty123');
    cy.get('.login-submitButton',{wait:3000}).click();

    cy.contains('ENROLLMENT',{timeout:300}).click();
    cy.get('#section_id',{timeout:300}).eq(0).click();

    cy.get('#enrollbutton',{timeout:300}).click();
});

//scenario for accepting student
Given('I navigated to VIEW ENROLLED Page',()=>{
    cy.contains(school.navbarlink.viewEnrolled,{timeout:300}).click();
});
When('I click the PENDING tab',()=>{
    cy.contains('PENDING',{timeout:300}).click();
});
When('I click the first student on the list of pending',()=>{
    cy.get('.approved',{timeout:300}).eq(0).click();
});
Then('that student should be accepted',()=>{
    cy.contains('APPROVED',{timeout:300}).click();
    cy.contains('Tuazon,').should('be.visible');
});
Then('should be remove on the pending list',()=>{
    cy.contains('PENDING',{timeout:300}).click();
    cy.contains('Tuazon,').should('not.exist');
});