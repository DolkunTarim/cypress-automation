Feature: Google Main Page

  I want to open a search engine

  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

  @focus
  Scenario Outline: Search a keyword
    Given I open Google page
    When I type a "<search word>" in the search box and press enter
    Then I see a search result
    Examples:
      | search word |
    |Java         |
    |Python       |
    |Javascript   |


  Scenario Outline: Search another word
    Given I open Google page
    When I type "<cities>" in the search box and press enter button
    Then I see a search result
    Examples:
      | cities |
    |New York|
    |Washington DC|
    |Istanbul Turkey|
