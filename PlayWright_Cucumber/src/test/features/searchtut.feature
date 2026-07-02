Feature: User Search tests
Background:
    Given user launches the application
    
Scenario:Valid Search
    And user enter product in searchbox as "Hp"
    When user clicks Search button
    Then product should appear
Scenario:InValid Search
    And user enter product in searchbox as "fcgvh"
    When user clicks Search button
    Then product should not appear