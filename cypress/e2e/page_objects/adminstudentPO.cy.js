import { school } from "../../../schoolpageobject.js"
class AdminStudent{
    gotoPage(namePage){
        //go to page by clicking the button -namePage
        cy.contains(namePage,{timeout:300}).click();
    }
    enterstudentDetails(){
        cy.get(school.firstName,{timeout:300,force: true}).type('Edddreeeen');
        cy.get(school.middleName,{timeout:300}).type('D');
        cy.get(school.lastName,{timeout:300}).type('Paynadoo');
        cy.get(school.course).select('ABM');
        cy.get(school.contactNumber,{timeout:300}).type('09212483577');
        cy.get(school.year).select('11');
    }
    addstudentButton(){
        cy.get(school.addButton,{timeout:300}).click();
    }
    newdatastudent(){
        cy.get(school.newfirstname,{timeout:300}).clear().type('Edreeeeen Maeee');
        cy.get(school.newlastname,{timeout:300}).clear().type('Paynadoooo');
    }


}

export default AdminStudent