import { Given, When, Then,And, Before } from "@badeball/cypress-cucumber-preprocessor";
import { school } from "../../../../schoolpageobject.js"//importing globalobjectss (css/path)
import adminenrolledPO from '../../page_objects/adminenrolledPO.cy.js';
import teacherPO from '../../page_objects/teacherPO.cy.js';

import loginPO from '../../page_objects/loginPO.cy.js';

const enrolled = new adminenrolledPO()
const teacher =new teacherPO();
const login=new loginPO();
//advisory
Given('I am assigned to a section as an Adviser',()=>{
    enrolled.thereisEnrolledstudent();
});
Given('I am logged in as a Teacher',()=>{
    teacher.loginTeacher();
});
When('I Navigate to My advisory',()=>{
    teacher.gotoMyAdvisoryPage();
});
When('I click the view link to view the list of my student',()=>{
    teacher.viewAdvisoryStudent();
});
Then('I should see the student list',()=>{
    teacher.assertAdvisoryListPage();
});
/*
And('I delete the section to clear the section table',()=>{
})
*/


//section handle
Given('I am assigned to a section as a subject teacher',()=>{
    enrolled.thereisEnrolledstudent();

    //login admin
    login.getUrl();
    login.getUsername();
    login.getPassword();
    login.loginbuttonClick();
    //accept student
    enrolled.viewenrolledPage();
    enrolled.clickPendingtab();
    enrolled.clickPendingstudent();
});
/*
Given('I am logged in as a Teacher',()=>{
    teacher.loginTeacher();
});
*/
When('I Navigate to Section Handle page',()=>{
    teacher.gotoSectionHandlePage();
});
When('I click the view link to view the list of the student',()=>{
    teacher.viewSectionHandleStudent();
});
/*
Then('I should see the student list',()=>{
    teacher.assertAdvisoryListPage();
});
And('I delete the section to clear the section table',()=>{
})
*/