Feature: User Registration tests
Background:
    Given User navigates to the application
    And User click on the My account link
    And User click on the Registration link
Scenario: Registration should be success
    And User enter the firstname as "venkat"
    And User enter the lastname as "raja"
    And User enter the email as "venkat1555@gmail.com"
    And User enter the telephone as "8768676123"
    And User enter the password as "venkat@123"
    And User enter the cpassword as "venkat@123"
    And User clicks privacy policy checkbox
    When User click on the continue button
    Then Registration should be success

Scenario: Registration should not be success
    And User enter the firstname as "Potter"
    And User enter the lastname as "john"
    And User enter the email as "potter123@gmail.com"
    And User enter the telephone as "5678934782"
    And User enter the password as "potter@123"
    And User enter the cpassword as "potter@123"
    And User clicks privacy policy checkbox
    When User click on the continue button
    Then Registration should be fail

  
