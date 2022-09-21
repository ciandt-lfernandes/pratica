Feature: Login page

    Scenario: Login/Logout successfully
        Given a valid user
        When a user login
        Then a user login successfully
        When a user logout
        Then a user logout successfully

