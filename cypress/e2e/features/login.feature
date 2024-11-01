#Lester
Feature: Login

Scenario Outline: I should be able to login successfully

Given I am on the login page, '<urlPage>'
When I entered my valid credentials, '<email>' '<password>'
And I click the login button
Then I should be navigated to the dashboard, '<redirectedLink>'

Examples:
|urlPage                                           | email                     | password  | redirectedLink                                        |
|http://localhost/school/login/loginadmin.php      | admin@school.com          | qwerty123 | http://localhost/school/admin/adminPage/adminpage.php |
|http://localhost/school/login/loginteacher.php    | test1teacher1@school.com  | qwerty123 | http://localhost/school/teacher/teacherpage.php       |
|http://localhost/school/login/loginpage.php       | t.student241@school.com   | qwerty123 | http://localhost/school/student/studentpage.php       |