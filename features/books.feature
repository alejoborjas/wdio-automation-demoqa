Feature: Book Store of DemoQA

    Scenario: A logged in user add a book from the book store
        Given user already login and on the Profile Page
        When user click on the button Go To Book Store
        Then he will be redirect to the Book Store Page
        When he select the first book already login
        Then he will see the info of the book selected
        When user clicks the button Add To Your Collection
        Then an alert shows up to confirm the book were added to your collection
        When user go back to his profile
        Then the book should be in the table of his books
        
    Scenario: A non-logged in user add a book from the book store
        Given user without logged in and on the book store Page
        When he select the first book witout login
        Then he will see the info of the book
        And the button Add To Your Collection should not be displayed for the user

    Scenario: Search a book on the Book Store 
        Given a user on the book Store Page
        When he search an existing book
        Then the book should be displayed in the table