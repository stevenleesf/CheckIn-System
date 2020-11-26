module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
  const check = require("../controllers/checkin.controller.js");



  // Create a new Customer
  app.post("/customers", customers.create);

  // Create a new Customer
  app.post("/createcheckin/:id", check.createcheckin);

  // Retrieve all Customers
  app.get("/list", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:id", customers.findOne);

  // Retrieve a single Customer with customerId
  app.get("/bylocation/:id", customers.findOneLoc);

  // Retrieve a single Customer with customerId
  app.get("/bylocationName/:locationname", customers.findOneLocName);

 
};