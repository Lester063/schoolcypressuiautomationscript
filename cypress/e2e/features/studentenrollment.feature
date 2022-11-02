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