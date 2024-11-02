const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const RouterPath = require("./router");

const app = express();
const port = 7000;
app.use(bodyParser.json());
app.use(cors());

app.use("/", RouterPath);
app.use("/api/user", RouterPath);
app.use("/api/add-property", RouterPath);
app.use("/api/property-details", RouterPath);


app.listen(port, () => console.log("Server Running on port 7000..."));