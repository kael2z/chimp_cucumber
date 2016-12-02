Feature: Using a web client for gmail.

  As a human
  I want to interact with other humans via email
  So I can read and send emails

  @watch
  Scenario: Get a list of emails at the box
    Given I have visited "https://mail.google.com"
    When I enter username "danilxlomaster" and password "lulya989kebab"
    Then I see emails table list