Feature: Login Page of DemoQA

  Background:
    Given user is on the login page

  Scenario: The user login with his user with an incorrect password
    When user login with his username and a wrong password
    Then should see a message of invalid password

  Scenario: The user login with his user with an incorrect username
    When user login with his username and password but his username will be wrong
    Then should see a message of invalid username
  
  Scenario: The user login with a correct username and password
    When user login with his username and password
    Then should redirect to his profile page