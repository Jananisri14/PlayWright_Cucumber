Feature: User Registration tests
Background:
    Given User navigates to the application
    And User click on the My account link
    And User click on the Registration link
Scenario: Registration should be success
    And User enter the firstname as "subha"
    And User enter the lastname as "raja"
    And User enter the email as "subha36@gmail.com"
    And User enter the telephone as "5687676182"
    And User enter the password as "subha@123"
    And User enter the cpassword as "subha@123"
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

  
