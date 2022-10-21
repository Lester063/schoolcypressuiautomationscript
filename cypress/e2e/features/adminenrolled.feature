#Lester
Feature: Admin - Enrolled Page

Background:
Given there is an enrolled pending student

Scenario: Should be able to accept pending enroll student

Given I am logged in as an Admin
And I navigated to VIEW ENROLLED Page
When I click the PENDING tab
And I click the first student on the list of pending
Then that student should be accepted
And should be remove on the pending list