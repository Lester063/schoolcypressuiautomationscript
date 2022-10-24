#Lester
Feature: Admin - Enrolled Page

Scenario: Should be able to accept pending enroll student

Given there is an enrolled pending student
And I am logged in as an Admin
And I navigated to VIEW ENROLLED Page
When I click the PENDING tab
And I click the first student on the list of pending
Then that student should be accepted
And should be remove on the pending list

Scenario: I should be able to drop all the subject of the student

Given I am logged in as an Admin
And I navigated to VIEW ENROLLED Page
And I click the ADD DROP link of the student
When I drop all the subjects of user
Then all subject should be move on to the DROPPED table

Scenario: Should be able to add back the dropped subject

Given I am logged in as an Admin
And I navigated to VIEW ENROLLED Page
And I click the ADD DROP link of the student
When I add back the dropped subject
Then the subject should be back

Scenario: Should be able to delete section and other data will be deleted too

Given I am logged in as an Admin
And I navigated to VIEW SECTIONS
When I delete the section to clear the data in db
Then the section should be deleted