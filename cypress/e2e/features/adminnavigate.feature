#Lester
Feature: Navigate to pages

Scenario Outline: Should be able to navigate to other pages

Given I am logged in as an Admin
When I click the link, '<link>'
Then I should be navigated to the page successfully, '<url>'

Examples:
|link           |url|
|VIEW STUDENTS  |http://localhost/school/admin/studentData/viewstudent.php         |
|VIEW TEACHERS  |http://localhost/school/admin/teacherData/viewteacher.php         |
|VIEW SECTIONS  |http://localhost/school/admin/sectionData/viewsections.php        |
|VIEW ENROLLED  |http://localhost/school/admin/enrolledstudentData/viewenrolled.php|
|ADD NEWS       |http://localhost/school/admin/news/addnewsblade.php               |
|VIEW NEWS      |http://localhost/school/admin/news/viewnews.php                   |
|PROFILE        |http://localhost/school/admin/adminPage/admininfo.php             |
