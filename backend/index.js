const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models")

db.sequelize.sync({ force : false }).then(()=> {
  console.log("Database updated without dropping data.");
})

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to motorcycles application." });
});

require("./routes/motorcycle.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
