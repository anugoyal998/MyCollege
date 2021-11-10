const mongoose = require('mongoose');
const url = `mongodb+srv://anubhav:${process.env.DB_USER_PASSWORD}@cluster0.ktw5g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
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