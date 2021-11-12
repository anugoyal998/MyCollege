require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const Router = require("./backend/routes/router");
const connection = require("./backend/db/connection");
const fileUpload = require("express-fileupload");

const url = `mongodb+srv://anubhav:${process.env.DB_USER_PASSWORD}@cluster0.ktw5g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
connection(process.env.MONGODB_URI || url)

if(process.env.NODE_ENV == 'production') {
  app.use(express.static('build'))
}


//middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});