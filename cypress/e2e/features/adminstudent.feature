#Lester
Feature: Student account

Scenario: Should be able to create student account

Given I am logged in as an Admin
And I navigate to VIEW STUDENT > Add Student
When I enter the details of student
And I click the create button
Then the account should be created successfully

#update student data
Given I am in the student page
And I click the Edit Data button
When I entered new data of the student
And I click the update button
And I close the modal box
Then the student data should be update successfully

#Should be able to search and delete the student I created
Given I am in the student page
When I search for the student
And I delete the student
Then the student should be deleted successfully


