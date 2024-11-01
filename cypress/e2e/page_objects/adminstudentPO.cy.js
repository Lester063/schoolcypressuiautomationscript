import { school } from "../../../schoolpageobject.js"
class AdminStudent{
    gotoPage(namePage){
        //go to page by clicking the button -namePage
        cy.contains(namePage,{timeout:300}).click();
    }
    enterStudentDetails(){
        cy.get(school.firstName,{timeout:300,force: true}).type('Lester');
        cy.get(school.middleName,{timeout:300}).type('C');
        cy.get(school.lastName,{timeout:300}).type('Tuazonn');
        cy.get(school.course).select('ICT');
        cy.get(school.contactNumber,{timeout:300}).type('09212483577');
        cy.get(school.year).select('11');
    }
    addStudentButton(){
        cy.get(school.addButton,{timeout:300}).click();
    }
    newDataStudent(){
        cy.get(school.newFirstName,{timeout:300}).clear().type('Lesterr');
        cy.get(school.newLastName,{timeout:300}).clear().type('Tuazonn');
    }


}

export default AdminStudent