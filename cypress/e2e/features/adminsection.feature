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

Scenario: Should be able to update the section details

Given I am logged in as an Admin
And I navigated to VIEW SECTIONS
When I click the Edit section data
And I entered a new data
And I click update section button
And I refresh the page
Then I should see that the section is updated with the data I entered

Scenario: Should be able to open the View Student List page

Given I am logged in as an Admin
And I navigated to VIEW SECTIONS
And there is existing section
When I click the View Student List link of the existing section
Then I should be navigated to View Student list page of that section

Scenario: Should be able to open the Assign Teachers page

Given I am logged in as an Admin
And I navigated to VIEW SECTIONS
And there is existing section
When I click the Assign Teachers link of that section
Then I should be navigated to Assign Teachers page of that section

Scenario: Should be able to delete the section I created

Given I am logged in as an Admin
And I navigated to VIEW SECTIONS
And there is existing section
When I click the delete button of that section
Then the section should be deleted

