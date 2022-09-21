Feature: Login page

    Scenario: Login/Logout successfully
        Given a valid user
        When a user want login
        Then a user login successfully
        When a user want logout
        Then a user logout successfully

