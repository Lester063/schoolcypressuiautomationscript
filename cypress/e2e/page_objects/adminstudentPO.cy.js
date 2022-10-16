import { school } from "../../../schoolpageobject.js"
class AdminStudent{
    gotoPage(namePage){
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
    newdatastudent(){
        cy.get(school.newfirstname,{timeout:300}).clear().type('Edreeeeen Maeee');
        cy.get(school.newlastname,{timeout:300}).clear().type('Paynadoooo');
    }
    /*
    assertText(text,display){
        if(display=='visible'){
            cy.contains(text,{timeout:300}).should('be.visible')
        }
        else if(display=='notvisible'){
            cy.contains(text,{timeout:300}).should('not.visible')
        }
    }
    clickButton(identifier,type){
        if(type=='text'){
            cy.contains(identifier,{timeout:300}).click();
        }
        else{
            cy.get(identifier,{timeout:300}).click();
        }
        
    }
    search(identifier,data){
        cy.get(identifier,{timeout:300}).type(data);
        cy.wait(300);
    }
    */

}

export default AdminStudent