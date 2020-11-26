const CustomerCheck = require("../models/checkin.model.js");

exports.createcheckin = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const customer = new CustomerCheck({
      locationid: req.params.id,
      name: req.body.name,
      nric: req.body.nric,
      temp: req.body.temp,
      date: req.body.date,
    });
  
    // Save Customer in the database
    CustomerCheck.createcheckin(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };