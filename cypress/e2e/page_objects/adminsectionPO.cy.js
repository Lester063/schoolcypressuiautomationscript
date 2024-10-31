import { school } from "../../../schoolpageobject.js";
import globalobjects from '../page_objects/globalObjects.cy.js';
const moment = require('moment');
const globalobject = new globalobjects();
subjects = ['null','10','12'];//id's of subject
class Section{
    //till assertsectionCreated -line 41 ==create section
    openaddsectionModal(){
        globalobject.clickButton(school.addsectionmodalTrigger,'!text');
    }
    addsubjectselectOption(){
        //adjust numbers depends on your need
        for(var i=0;i<1;i++){
            globalobject.clickButton(school.addselectSection,'!text');
        }
    }
    selectyearSection(){
        globalobject.selectOption(school.gradeyear,0,'11');
        globalobject.selectOption(school.section,0,'A');
    }
    selectSubject(){
        for(var xy=1;xy<=2;xy++){
            globalobject.selectOption(school.selectsubject,xy,subjects[xy]);
       }
    }
    selectCourse(){
        globalobject.selectOption(school.selectcourse,0,'ICT');
    }
    entermaxstudentNumber(){
        cy.get(school.maxstudentSection).type('3');
    }
    start_end(){
        var today = moment().format("YYYY-MM-DDThh:mm");
        var tom = moment(today).add(5, 'days').format("YYYY-MM-DDThh:mm");
        cy.get(school.start_date).type(today);
        cy.get(school.end_date).type(tom);
    }
    addsectionButton(){
        globalobject.clickButton(school.addsectionButton,'!text', {timeout:300});
    }
    assertsectionCreated(){
        globalobject.assertText('Created Section Successfully.','visible');
    }


    //update the maximum numbers into 5
    editsectionModal(){
        cy.get(school.editsectionbutton,{timeout:300}).click();
    }
    entersectionNewdata(){
        cy.get(school.editsectionQty,{timeout:300}).clear().type('5');
    }
    goEditButton(){
        cy.contains('UPDATE',{timeout:300}).click();
    }
    refreshPage(){
        cy.reload();
    }
    assertnewsectionData(){
        globalobject.assertText('0/5','visible');
    }


    //open the View Student List page of that section
    assertExistingsection(){
        cy.contains('SY: 2023-2024').should('be.visible');
    }
    viewstudentLink(){
        cy.get(school.viewStudentLink,{timeout:300}).click();
    }
    assertviewstudentPage(){
        cy.contains(school.viewSectionEnrolledPage,{timeout:300}).should('be.visible');
    }

    //open the assign teachers page of that section
    navigateToAssignTeacherPage(){
        cy.get(school.assignTeachersPage,{timeout:300}).click();
    }
    assignAdviser() {
        cy.get(school.selectAdviser,{timeout:300}).select('6');
    }
    assignTeachers() {
        cy.get(school.selectTeacher,{timeout:300}).eq(0).select('6');
        cy.get(school.selectTeacher,{timeout:300}).eq(1).select('10');
    }
    clickAssignButton() {
        cy.get(school.assignteacherButton,{timeout:300}).click();
    }

    assertassignteacherPage(){
        cy.contains(school.assertAssignTeacherPage,{timeout:300}).should('be.visible');
    }


    //delete the section
    deletesectionButton(){
        cy.contains(school.deleteText,{timeout:300}).click();
    }
    assertsectionDeleted(){
        cy.contains(school.deletedSectionText).should('be.visible');
    }
}

export default Section