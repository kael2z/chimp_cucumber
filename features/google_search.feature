Feature: Search the Web with Google

  As a human
  I want to search the web
  So I can find information

  @ignore
  Scenario: Search for info
    Given I have visited "https://google.com"
    When I search for "почему путин краб"
    Then I see "10" search results
    
  Scenario: Search for website that is mentionedin news
    Given I have visited "https://google.com"
    When I search for "recursion"
    Then I see "10" search results