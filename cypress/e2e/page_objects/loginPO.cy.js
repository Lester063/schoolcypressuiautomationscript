import { school } from "../../../schoolpageobject.js";

class Login{
    navigateToAdminLoginPage(){
        cy.visit('http://localhost/school/login/loginadmin.php');
    }
    getUsername(){
        cy.get(school.studentUsername,{timeout:300}).type('admin@school.com');
    }
    getPassword(){
        cy.get(school.studentPassword,{timeout:300}).type('qwerty123');
    }
    loginbuttonClick(){
        cy.get(school.studentloginButton,{wait:3000}).click();
    }
    assertLogin(){
        cy.url().should('eq', 'http://localhost/school/admin/adminPage/adminpage.php')
    }
}

export default Login