# cypress-automation
This Cypress Automation repository has cypress demo automation code for the Cubecart demo application
# cubecart demo url 
https://www.cubecart.com/demo
You can find the cubecart demo admin page url on the link above. 
# test cases
  - admin user should be able to add a customer
  - admin user should see a customer link
  - User should be able to see a product link
  - admin user should be able to add a customer
  - dummy test
  
# to execute the cypress UI framework (let's assume that you have a demo QA and Prod website) 
check out the code and run the command below. 
- cypress run --config-file cypress.qa.json --spec  cypress/integration/customer_module_spec.js --headed --browser chrome
- cypress run --config-file cypress.prod.json --spec  cypress/integration/customer_module_spec.js --headed --browser chrome
# execution result
- admin user should be able to add a customer
- admin user should see a customer link  (8681ms)
- User should be able to see a product link  (193ms)
- admin user should be able to add a customer  (6128ms)
- dummy test (60ms)
