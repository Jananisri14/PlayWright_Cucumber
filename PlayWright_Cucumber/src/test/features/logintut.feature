Feature: User Login tests
Background:
    Given user launches to the application
    And user click on the My account link
    And user click on the Login link
Scenario: Login should be success
    And user enter the email as "henry123@gmail.com"
    And user enter the password as "henry@123"
    When user clicks Login button
    Then login should be success
Scenario: Login should not be success
    And user enter the email as "henry123@gmail.com"
    And user enter the password as "rdtfygf"
    When user clicks Login button
    Then login should be fail   