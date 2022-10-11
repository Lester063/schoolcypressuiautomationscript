class Login{
    getUrl(){
        cy.visit('http://localhost/college/login/loginadmin.php');
    }
    getUsername(){
        cy.get('.inputUsername',{timeout:300}).type('admin@school.com');
    }
    getPassword(){
        cy.get('.inputPassword',{timeout:300}).type('admin123');
    }
    loginbuttonClick(){
        cy.get('.login-submitButton',{wait:3000}).click();
    }
    assertLogin(){
        cy.url().should('eq', 'http://localhost/college/admin/adminPage/adminpage.php')
    }
}

export default Login