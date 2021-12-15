const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    updates: {
      type: "array",
    }
  },
  {
    timestamps: true,
  }
);

const model = new mongoose.model('updates',schema);

module.exports = model
