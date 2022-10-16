#Lester
Feature: Admin - Section

Scenario: Should be able to add a section

Given I am logged in as an Admin
And I navigated to VIEW SECTIONS
And I click the Add Section button
When I add three subject selection
And I choose a year and section
And I select subjects
And I select course
And I entered maximum numbers
And I choose start and end date of section to be available in enrollment
And I click ADD SECTION button
Then the section should be created successfully