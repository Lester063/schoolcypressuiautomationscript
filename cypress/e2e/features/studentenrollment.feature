#Student Lester
Feature: Student - Enrollment

Scenario: Student should be able to enroll

Given today is the enrollment day
And I am logged in as a Student
When I navigate to ENROLLMENT Page
And I choose a section
And I click the Enroll button
Then I should see a success message that I enrolled successfully
And I delete the section to clear the section table
#cleardb

Scenario: Should be able to view my enrollment registration

Given I already enrolled
And I am logged in as a Student
And I navigate to MY REGISTRATION Page
When I click the section bar
Then I should see the subject I enrolled
And I delete the section to clear the section table
#cleardb

Scenario: Should be able to view my grades

Given I already enrolled
And I am logged in as a Student
And I navigate to GRADES tab
When I expand my grade for the year
Then I should see my enrolled subject with grades
And I delete the section to clear the section table

Scenario: Should be able to view profile info

Given I am logged in as a Student
When I navigate to PROFILE > VIEW PROFILE
Then my info should be displayed

Scenario Outline: Should be able to change password

Given I am logged in as a Student
And I navigate to PROFILE > PASSWORD
When I entered my old and new password, '<oldPassword>' '<newPassword>' '<verifyPassword>'
And I click Change Password button
Then I should be able to change my password successfully

Examples:
|oldPassword|newPassword|verifyPassword|
|qwerty123|lester123|lester123|
|lester123|qwerty123|qwerty123|
