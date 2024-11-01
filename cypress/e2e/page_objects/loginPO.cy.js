import { school } from "../../../schoolpageobject.js";

class Login{
    navigateToAdminLoginPage(urlPage){
        cy.visit(urlPage);
    }
    inputEmail(email){
        cy.get(school.inputUsername,{timeout:300}).type(email);
    }
    inputPassword(password){
        cy.get(school.inputPassword,{timeout:300}).type(password);
    }
    loginButtonClick(){
        cy.get(school.loginButton,{wait:3000}).click();
    }
    assertLogin(urlToAssert){
        cy.url().should('eq', urlToAssert);
    }

    loginUser(userlevel, email, password){
        cy.clearCookies();
        cy.clearLocalStorage();
        var urlPage = '';
        if(userlevel === 'Admin') {
            urlPage = 'http://localhost/school/login/loginadmin.php';
        }
        else if (userlevel === 'Teacher') {
            urlPage = 'http://localhost/school/login/loginteacher.php';
        }
        else if (userlevel === 'Student') {
            urlPage = 'http://localhost/school/login/loginpage.php';
        }
        else {
            cy.log('Incorrect Userlevel.');
        }
        this.navigateToAdminLoginPage(urlPage);
        this.inputEmail(email);
        this.inputPassword(password);
        this.loginButtonClick();
    }

}

export default Login