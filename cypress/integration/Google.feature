Feature: Google Main Page

  I want to open a search engine

  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

  @focus
  Scenario: Search a keyword
    Given I open Google page
    When I type a "Java" in the search box and press enter
    Then I see a search result