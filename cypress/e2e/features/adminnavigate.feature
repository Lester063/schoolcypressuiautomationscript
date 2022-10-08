#Lester
Feature: Navigate to pages

Scenario Outline: Should be able to navigate to other pages

Given I logged in as Admin
When I click the link, '<link>'
Then I should be navigated to the page successfully, '<url>'

Examples:
|link|url|
|VIEW STUDENTS|http://localhost/college/admin/studentData/viewstudent.php|
|VIEW TEACHERS|http://localhost/college/admin/teacherData/viewteacher.php|
|VIEW SECTIONS|http://localhost/college/admin/sectionData/viewsections.php|
|VIEW ENROLLED|http://localhost/college/admin/enrolledstudentData/viewenrolled.php|
|ADD NEWS|http://localhost/college/admin/news/addnewsblade.php|
|VIEW NEWS|http://localhost/college/admin/news/viewnews.php|
|PROFILE|http://localhost/college/admin/adminPage/admininfo.php|
