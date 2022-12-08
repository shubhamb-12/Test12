const express = require("express");
const bodyparser = require("body-parser");
const Tours = require("./controllers/tourCont");
const Tour = require("./models/tourModel");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/tours", Tours.getAllTours);
app.post("/tours", Tours.createTour);
app.patch("/tours/:id", Tours.updateTour);
app.delete("/tours/:id", Tours.deleteTour);

module.exports = app;
