// const { sequelize, Sequelize } = require(".");

// module.exports = (sequelize, Sequelize) => {
//     const Motorcycle = sequelize.define("motorcycle", {
//         brand: {
//             type: Sequelize.STRING
//         },
//         model: {
//             type: Sequelize.STRING
//         }
//     });
//     return Motorcycle
// };
module.exports = (sequelize, Sequelize) => {
  const Motorcycle = sequelize.define("motorcycle", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brand: {
      type: Sequelize.STRING,
      allowNull: false
    },
    model: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Motorcycle;
};
