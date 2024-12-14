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
app.use("/api/properties", RouterPath);
app.use("/api/whole-properties", RouterPath);
app.use("/api/add-property", RouterPath);
app.use("/api/property-details", RouterPath);
app.use("/api/search-property", RouterPath);

// Buyer
app.use("/api/add-new-buyer", RouterPath);
app.use("/api/buyer-details", RouterPath);
app.use("/api/buyers", RouterPath);

// Seller
app.use("/api/add-new-seller", RouterPath);
app.use("/api/seller-details", RouterPath);
app.use("/api/sellers", RouterPath);

// Invoice
app.use("/api/create-new-invoice", RouterPath);
app.use("/api/invoice-details", RouterPath);

// Receipt Voucher
app.use("/api/create-new-receipt-voucher", RouterPath);
app.use("/api/receipt-voucher-details", RouterPath);

// Receipt Voucher
app.use("/api/create-new-receipt-voucher", RouterPath);
app.use("/api/receipt-voucher-details", RouterPath);

// Payment Voucher
app.use("/api/create-new-payment-voucher", RouterPath);
app.use("/api/payment-voucher-details", RouterPath);




app.listen(port, () => console.log("Server Running on port 7000..."));