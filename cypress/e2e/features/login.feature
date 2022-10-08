#Lester
Feature: Login

Scenario: Should be able to login successfully

Given I am on the login page
When I entered my valid credentials
And I click the login button
Then I should be navigated to the dashboard