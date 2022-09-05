Feature: Product admin features

  Background: admin user log in the dashboard
    Given an admin user has an admin username and password
    When the admin user opens the login page
    And the admin user type in username and password and clicks login button
    Then the admin user should see a dashboard

  Scenario: admin user should be able to add a product
  Given admin has a new product
  When admin fill out the new product form
  Then a new product should be created

  Scenario: admin user should see a all the products
    Given an admin user is on the dashboard
    When  the user clicks on the products link
    Then the user should see all the products
