const sql = require("./db.js");

// constructor


const CustomerCheck = function(customer) {
  this.locationid = customer.locationid;
  this.name = customer.name;
  this.nric = customer.nric;
  this.temp = customer.temp;
  this.date = customer.date;
  
};



CustomerCheck.createcheckin = (newCustomer, result) => {
  sql.query("INSERT INTO customer SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};




module.exports = CustomerCheck;