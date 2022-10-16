#Lester
Feature: Subject and Course

Scenario: Should be able to add subject

Given I am logged in as an Admin
And I navigate SUBJECT > VIEW SUBJECT
When I enter the subject name and description in text box
And I click the Add button
Then the subject should be created successfully

Scenario: Should be able to delete the newly created subject

Given I am logged in as an Admin
And I navigate SUBJECT > VIEW SUBJECT
When I click delete the newly created subject
Then the subject should be deleted successfully

Scenario: Should be able to add new course

Given I am logged in as an Admin
And I navigated to SUBJECT > VIEW COURSE
When I enter the course name and course description in the input field
And I click the Add course button
Then the course should be created successfully

Scenario: Should be able to delete the newly created course

Given I am logged in as an Admin
And I navigated to SUBJECT > VIEW COURSE
When I click the delete button of the newly created course
Then the course should be deleted successfully
