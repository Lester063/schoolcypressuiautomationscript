class AdminNavigate{
    getLink(link){
        cy.contains(link,{timeout:300}).click();
    }
    assertUrl(url){
        cy.url().should('eq', url);
    }

}

export default AdminNavigate