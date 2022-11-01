import { school } from "../../../schoolpageobject.js";
import globalobjects from '../page_objects/globalObjects.cy.js';
const globalobject = new globalobjects();
subjects = ['walato','78','79','80','81'];
class Section{
    //till assertsectionCreated -line 41 ==create section
    openaddsectionModal(){
        globalobject.clickButton(school.addsectionmodalTrigger,'!text');
    }
    addsubjectselectOption(){
        //adjust numbers depends on your need
        for(var i=0;i<3;i++){
            globalobject.clickButton(school.addselectSection,'!text');
        }
    }
    selectyearSection(){
        globalobject.selectOption(school.gradeyear,0,'11');
        globalobject.selectOption(school.section,0,'A');
        //cy.get(school.gradeyear,{timeout:300}).eq(0).select('11',{timeout:300});
        //cy.get(school.section,{timeout:300}).eq(0).select('A',{timeout:300});
    }
    selectSubject(){
        for(var xy=1;xy<=4;xy++){
            globalobject.selectOption(school.selectsubject,xy,subjects[xy]);
            //cy.get(school.selectsubject,{timeout:300}).eq(xy).select(subjects[xy],{timeout:300});
       }
    }
    selectCourse(){
        globalobject.selectOption(school.selectcourse,0,'ICT');
    }
    entermaxstudentNumber(){
        cy.get(school.maxstudentSection).type('3');
    }
    start_end(){
        cy.get(school.start_date).click().type('2022-10-31T08:30');
        cy.get(school.end_date).click().type('2022-11-30T20:30');
    }
    addsectionButton(){
        globalobject.clickButton(school.addsectionButton,'!text');
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
    closeModal(){
        //cy.get('',{timeout:300}).click();
        cy.reload()
    }
    assertnewsectionData(){
        globalobject.assertText('0/5','visible');
    }


    //open the View Student List page of that section
    assertExistingsection(){
        cy.contains('SY: 2022-2023').should('be.visible');
    }
    viewstudentLink(){
        cy.get('a[href*="viewenrolledList.php?section_id"]',{timeout:300}).click();
    }
    assertviewstudentPage(){
        cy.contains('ADMIN: ENROLL STUDENTS',{timeout:300}).should('be.visible');
    }

    //open the assign teachers page of that section
    assignteachersLink(){
        cy.get('a[href*="assignteacher_newversion.php?section_id"]',{timeout:300}).click();
    }
    assertassignteacherPage(){
        cy.contains('Assign Teacher',{timeout:300}).should('be.visible');
    }

    //delete the section
    deletesectionButton(){
        cy.contains(school.deleteText,{timeout:300}).click();
    }
    assertsectionDeleted(){
        cy.contains('Deleted Section Successfully.').should('be.visible');
    }
}

export default Section

//Created Section Successfully