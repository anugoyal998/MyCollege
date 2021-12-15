const mongoose = require("mongoose");

const connection = (url)=> {
  mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect succeess");
  })
  .catch((err) => {
    console.log("Error connecting in db", err);
  });
}

module.exports = connection;