#Teacher
Feature: Teacher - View Student Assigned

Scenario: Should be able to view my advisory

Given I am assigned to a section as an Adviser
And I am logged in as a Teacher
When I Navigate to My advisory
And I click the view link to view the list of my student
Then I should see the student list
And I delete the section to clear the section table

Scenario: Should be able to view my student in a section

Given I am assigned to a section as a subject teacher
And I am logged in as a Teacher
When I Navigate to Section Handle page
And I click the view link to view the list of the student
Then I should see the student list
And I delete the section to clear the section table
