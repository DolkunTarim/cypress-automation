Feature: Customer admin features

  Background: admin user log in the dashboard
    Given an admin user has an admin username and password
    When the admin user opens the login page
    And the admin user type in username and password and clicks login button
    Then the admin user should see a dashboard

  Scenario: admin user should be able to add a customer
  Given admin has a new customer
  When admin fill out the new customer form
  Then a new customer should be created

  Scenario: admin user should see a customer link
    Given an admin user is on the dashboard
    Then the admin user should see a customer link

    Scenario: User should be able to see a product link
      Given an admin user is on the dashboard
      Then the admin user should see a product link
