const express = require("express");

const sqlDBConnect = require('./DBconnect');


const Router = express.Router();

Router.get("/", (req, resp) => {
    const userData = [{
            name: "Agha Naveeeeed",
            cell: "0340201215"
        },
        {
            name: "Zaheer",
            cell: "034213123"
        }
    ];
    resp.send(userData)
})


// ==============   === Property Here ===   ================

Router.get("/api/add-property", (req, res) => {
    sqlDBConnect.query("select * from property", (err, rows) => {
        !err? res.send(rows) : console.log(err);
    })
    
})


Router.post("/api/add-property", (req, res) => {
    const sellerId = req.body.seller_id;
    const propertyType = req.body.property_type;
    const propertySize = req.body.property_size;
    const propertyPrice = req.body.property_price;
    const propertyCity = req.body.property_city;
    const propertyState = req.body.property_state;
    const propertyZip = req.body.property_zip;
    const propertyLocation = req.body.property_location;
    const today = new Date();


    let sql = `INSERT INTO property(property_type, seller_id, property_size, property_city, property_state, property_zip, property_price, property_location, entry_date) VALUES ("${propertyType}", "${sellerId}", "${propertySize}", "${propertyCity}", "${propertyState}", "${propertyZip}", "${propertyPrice}", "${propertyLocation}", "${new Date().toISOString().split('T')[0]}")`

    sqlDBConnect.query(sql, (err, result) => !err ? res.status(200).json("New Property has been Inserted") 
    : console.log(err) );
})

Router.get("/api/property-details", (req, res) => {
    let sql = `
        SELECT property.*, s.seller_name FROM property 
        INNER JOIN seller AS s ON property.seller_id = s.seller_id
    `;

    sqlDBConnect.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database query failed' });
        }
        res.send(rows);
    });
});


// ==============   === Property Ended Here ===   ================

// ---------------------------------------------------------

// ==============   === Seller Here ===   ================


Router.get("/api/add-new-seller", (req, res) => {
    sqlDBConnect.query("select * from seller", (err, rows) => {
        !err? res.send(rows) : console.log(err);
    })
    
})


Router.post("/api/add-new-seller", (req, res) => {
    const sellerName = req.body.seller_name;
    const sellerCell = req.body.seller_cell;
    const sellerAddress = req.body.seller_address;

    let sql = `INSERT INTO seller(seller_name, seller_cell, seller_address) VALUES ("${sellerName}", "${sellerCell}", "${sellerAddress}")`;

    sqlDBConnect.query(sql, (err, result) => !err ? res.status(200).json("New Property has been Inserted") 
    : console.log(err) );
})

Router.get("/api/seller-details", (req, res) => {
    let sql = `
        SELECT * FROM SELLER
    `;

    sqlDBConnect.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database query failed' });
        }
        res.send(rows);
    });
});

// ==============   === Seller Ended Here ===   ================

// ---------------------------------------------------------

// ==============   === Buyer Here ===   ================


Router.get("/api/add-new-buyer", (req, res) => {
    sqlDBConnect.query("select * from buyer", (err, rows) => {
        !err? res.send(rows) : console.log(err);
    })
    
})


Router.post("/api/add-new-buyer", (req, res) => {
    const buyerName = req.body.buyer_name;
    const buyerCell = req.body.buyer_cell;
    const buyerAddress = req.body.buyer_address;

    let sql = `INSERT INTO buyer(buyer_name, buyer_cell, buyer_address) VALUES ("${buyerName}", "${buyerCell}", "${buyerAddress}")`;

    sqlDBConnect.query(sql, (err, result) => !err ? res.status(200).json("New Property has been Inserted") 
    : console.log(err) );
})

Router.get("/api/buyer-details", (req, res) => {
    let sql = `
        SELECT * FROM buyer
    `;

    sqlDBConnect.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database query failed' });
        }
        res.send(rows);
    });
});

// ==============   === Buyer Ended Here ===   ================





module.exports = Router;