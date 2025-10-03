module.exports = app => {
  const motorcycles = require("../controllers/motorcycle.controller");

  var router = require("express").Router();

  // Create a new Motorcycle
  router.post("/", motorcycles.create);

  // Retrieve all motorcycles
  router.get("/", motorcycles.findAll);

  // Retrieve a single Motorcycle with id
  router.get("/:id", motorcycles.findOne);

  // Update a Motorcycle with id
  router.put("/:id", motorcycles.update);

  // Delete a Motorcycle with id
  router.delete("/:id", motorcycles.delete);

  app.use('/api/motorcycles', router);
};