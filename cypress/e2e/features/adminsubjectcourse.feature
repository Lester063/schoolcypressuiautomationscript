#Lester
Feature: Subject and Course

Scenario: Should be able to add subject

Given I am logged in as an Admins
And I navigate SUBJECT > VIEW SUBJECT
When I enter the course name and description in text box
And I click the Add button
Then the course should be created successfully

Scenario: Should be able to delete the newly created

Given I am logged in as an Admins
And I navigate SUBJECT > VIEW SUBJECT
When I click delete the newly created subject
Then the subject should be deleted successfully