Feature: Profile Page of DemoQA

  Background:
    Given user is login and on the Profile Page

  Scenario: The user goes to Book Store
    When user clicks on the button Go to Book Store
    Then user will be redirect to the Book Store Page
    When user will logout from book store page
    Then user will be redirect to login page from book store

  Scenario: The user delete all the books from his profile
    When user verifies that he have Books
    And clicks on Delete all Books
    Then an alert shows up to confirm the books were deleted
    And the table doesn't have books
    When user will logout from profile page
    Then user will be redirect to login page from profile store

  Scenario: The user delete his account
    When user clicks on the button Delete account
    Then an modal should display to confirm that you want to delete your account
    Then an alert will confirm that you account was deleted
    And user will be redirect to Login page
    When user wants to login with his deleted account info
    Then error message should be displayed
