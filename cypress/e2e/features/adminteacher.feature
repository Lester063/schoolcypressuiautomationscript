#Lester
Feature: Admin - Teacher

Scenario: Should be able to navigate to VIEW TEACHER PAGE

Given I am logged in as an Admin
When I click the VIEW TEACHERS in sidebar
Then I should be navigated to view teachers page successfully

Scenario: Should be able to create teacher

Given I am logged in as an Admin
And I navigated to VIEW TEACHERS > Add Teacher
When I entered the details of teacher
And I click the add teacher button
Then the teacher account should be created successfully

Scenario: Should be able to update the data of teacher I created

Given I am logged in as an Admin
And I navigated to VIEW TEACHERS page
And I search the teacher
When I click the Edit Data button for teacher
And I entered the new data
And I click the update teacher button
And I close the update modal box
Then the data should be updated successfully

Scenario: Should be able to delete newly created teacher account

Given I am logged in as an Admin
And I navigated to VIEW TEACHERS page
And I search the teacher
When I click the delete button for teacher
Then the teacher account should be deleted successfully