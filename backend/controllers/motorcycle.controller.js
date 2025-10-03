// const db = require("../models");
// const Motorcycle = db.motorcycles;
// const Op = db.Sequelize.Op;

// // Create and Save a new Motorcycle
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

//   // Create a Motorcycle
//   const motorcycle = {
//     brand: req.body.brand,
//     model: req.body.model
//   };

//   // Save Motorcycle in the database
//   Motorcycle.create(motorcycle)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: 
//         err.message || "Some error occurred while creating the motorcycle."
//       });
//     });
// };

// // Retrieve all Motorcycles from the database.
// exports.findAll = (req, res) => {
//   Motorcycle.findAll()
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: 
//         err.message || "Some error occurred while retrieving motorcycles."
//       });
//     });
// };

// const db = require("../models");
// const Motorcycle = db.motorcycles;
// const Op = db.Sequelize.Op;

// // Crear y guardar una nueva moto
// exports.create = (req, res) => {
//   // Validar la petición
//   if (!req.body || !req.body.brand || !req.body.model) {
//     res.status(400).send({
//       message: "Content can not be empty! (brand & model required)"
//     });
//     return;
//   }

//   // Crear el objeto moto
//   const motorcycle = {
//     brand: req.body.brand,
//     model: req.body.model
//   };

//   // Guardar en la base de datos
//   Motorcycle.create(motorcycle)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the motorcycle."
//       });
//     });
// };

// // Recuperar todas las motos
// exports.findAll = (req, res) => {
//   Motorcycle.findAll()
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving motorcycles."
//       });
//     });
// };

// // Buscar una moto por ID
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Motorcycle.findByPk(id)
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Motorcycle with id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Motorcycle with id=" + id
//       });
//     });
// };

// // Actualizar una moto por ID
// exports.update = (req, res) => {
//   const id = req.params.id;

//   Motorcycle.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Motorcycle was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Motorcycle with id=${id}. Maybe Motorcycle was not found or req.body is empty.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Motorcycle with id=" + id
//       });
//     });
// };

// // Eliminar una moto por ID
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Motorcycle.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Motorcycle was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Motorcycle with id=${id}. Maybe Motorcycle was not found.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Motorcycle with id=" + id
//       });
//     });
// };


const db = require("../models");
const Motorcycle = db.motorcycles; // Asegúrate de que el nombre coincida con el export del modelo

// Create a new Motorcycle
exports.create = (req, res) => {
  const { brand, model } = req.body;

  if (!brand || !model) {
    res.status(400).send({ message: "Brand and model are required!" });
    return;
  }

  Motorcycle.create({ brand, model })
    .then(data => res.send(data))
    .catch(err => {
      console.error("Error creating motorcycle:", err);
      res.status(500).send({ message: "Error creating motorcycle." });
    });
};

// Retrieve all motorcycles
exports.findAll = (req, res) => {
  Motorcycle.findAll()
    .then(data => res.send(data))
    .catch(err => {
      console.error("Error retrieving motorcycles:", err);
      res.status(500).send({ message: "Error retrieving motorcycles." });
    });
};

// Retrieve a single Motorcycle by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Motorcycle.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `Motorcycle with id=${id} not found.` });
      }
    })
    .catch(err => {
      console.error("Error retrieving motorcycle:", err);
      res.status(500).send({ message: "Error retrieving motorcycle." });
    });
};

// Update a Motorcycle by id
exports.update = (req, res) => {
  const id = req.params.id;
  const { brand, model } = req.body;

  Motorcycle.update({ brand, model }, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Motorcycle updated successfully." });
      } else {
        res.send({ message: `Cannot update motorcycle with id=${id}. Maybe it was not found or request body is empty.` });
      }
    })
    .catch(err => {
      console.error("Error updating motorcycle:", err);
      res.status(500).send({ message: "Error updating motorcycle." });
    });
};

// Delete a Motorcycle by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Motorcycle.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Motorcycle deleted successfully." });
      } else {
        res.send({ message: `Cannot delete motorcycle with id=${id}. Maybe it was not found.` });
      }
    })
    .catch(err => {
      console.error("Error deleting motorcycle:", err);
      res.status(500).send({ message: "Error deleting motorcycle." });
    });
};
