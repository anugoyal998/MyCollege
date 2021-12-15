require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const Router = require("./backend/routes/router");
const connection = require("./backend/db/connection");
const fileUpload = require("express-fileupload");
const {update} = require("./backend/update/update")

connection(process.env.MONGODB_URI)
app.get('/',(req,res)=> {
  res.send("My College Server")
})

update()
setInterval(() => {
  update()
}, 600000);


//middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});