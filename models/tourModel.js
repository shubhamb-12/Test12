const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  tourName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
    //only works while creating new document and not on update.
    validate: {
      validator: function (val) {
        return val < this.price;
      },
      message: "Discount should be less than actual price",
    },
  },
  difficulty: {
    type: String,
    required: true,
    enum: {
      values: ["easy", "medium", "difficult"],
      message: "Difficulty should be either easy,medium or difficult",
    },
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
