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
And I search the student I created
And I click the Edit Data button
When I entered new data of the student
And I click the update button
And I close the modal box
Then the student data should be update successfully

#deactivate the student
Given I am in the student page
And I search the student I created
When I click the activated button
Then the student should be deactivated

#Should be able to search and delete the student I created
Given I am in the student page
When I search for the student
And I delete the student
Then the student should be deleted successfully


