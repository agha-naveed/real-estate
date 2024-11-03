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
// Property
app.use("/api/add-property", RouterPath);
app.use("/api/property-details", RouterPath);

// Buyer
app.use("/api/add-new-buyer", RouterPath);
app.use("/api/buyer-details", RouterPath);

// Seller
app.use("/api/add-new-seller", RouterPath);
app.use("/api/seller-details", RouterPath);

// Invoice
app.use("/api/create-new-invoice", RouterPath);
app.use("/api/invoice-details", RouterPath);


app.listen(port, () => console.log("Server Running on port 7000..."));