module.exports = app => {
  const orders = require("../controllers/order.controller.js");

  var router = require("express").Router();

  // Create a new Order
  router.post("/", orders.create);

  // Retrieve all Orders
  router.get("/", orders.findAll);

  // Update a Order with id
  router.put("/:id", orders.update);

  // Retrieve all published Orders
  router.get("/published", orders.findAllPublished);

  // Retrieve a single Orders with id
  router.get("/:id", orders.findOne);


/*




  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);*/

  app.use("/api/orders", router);
};