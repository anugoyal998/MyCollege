require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const Router = require("./backend/routes/router");
require("./backend/db/connection");
const fileUpload = require("express-fileupload");
//middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});