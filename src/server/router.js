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

Router.get("/api/search-property", (req, res) => {
    const pSize = req.query.property_size;
    const pType = req.query.property_type;
    const pCity = req.query.property_city;

    let sql = `SELECT p.* FROM property as p WHERE 1=1`;


    if (pSize) sql += ` AND property_size >= ${pSize}`;
    if (pCity) sql += ` AND property_location LIKE '%${pCity}%'`;
    if (pType) sql += ` AND property_type = '${pType}'`;

    // sql += ` inner join `


    sqlDBConnect.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database query failed' });
        }
        res.send(rows);
    });
});


Router.post("/api/add-property", (req, res) => {
    let sellerId = req.body.seller_id;
    const propertyType = req.body.property_type;
    const propertySize = req.body.property_size;
    const propertyPrice = req.body.property_price;
    const propertyCity = req.body.property_city;
    const propertyState = req.body.property_state;
    const propertyZip = req.body.property_zip;
    const propertyLocation = req.body.property_location;


    let sql = `INSERT INTO property(seller_id, property_type, property_size, property_city, property_state, property_zip, property_price, property_location, entry_date) VALUES ("${sellerId}", "${propertyType}", "${propertySize}", "${propertyCity}", "${propertyState}", "${propertyZip}", "${propertyPrice}", "${propertyLocation}", "${(new Date()).toLocaleDateString('en-CA')}")`

    sqlDBConnect.query(sql, (err, result) => !err ? res.status(200).json("New Property has been Inserted") 
    : console.log(err) );
})

Router.get("/api/property-details/", (req, res) => {
    
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

Router.get("/api/property-details/:property_id", (req, res) => {

    let propertyId = req.params.property_id;

    let sql = `
        SELECT property.*, s.seller_name FROM property 
        INNER JOIN seller AS s ON property.seller_id = s.seller_id
        WHERE property.property_id = ?
    `;

    sqlDBConnect.query(sql, [propertyId], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database query failed' });
        }

        
        if (rows.length === 0) {
            return res.status(404).send({ message: 'Property not found' });
        }

        res.send(rows[0]);
    });
    
});





Router.get("/api/property-details/:property_id/seller-p_price", (req, res) => {

    let propertyId = req.params.property_id;

    let sql = `
        SELECT property.seller_id, seller.seller_name, property.property_price FROM property INNER JOIN seller ON property.seller_id = seller.seller_id where property.property_id = ?
    `;

    sqlDBConnect.query(sql, [propertyId], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database query failed' });
        }

        
        if (rows.length === 0) {
            return res.status(404).send({ message: 'Property not found' });
        }

        res.send(rows[0]);
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

Router.get("/api/sellers", (req, res) => {
    sqlDBConnect.query("select s.seller_id, s.seller_name from seller as s", (err, rows) => {
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


Router.get("/api/buyers", (req, res) => {
    sqlDBConnect.query("select buyer_id, buyer_name from buyer", (err, rows) => {
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


Router.get("/api/buyer-details/:buyer_id", (req, res) => {

    let buyerId = req.params.buyer_id;

    let sql = `
        SELECT b.buyer_id, b.buyer_name FROM buyer AS b WHERE buyer_id = ?
    `;

    sqlDBConnect.query(sql, [buyerId], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database query failed' });
        }

        
        if (rows.length === 0) {
            return res.status(404).send({ message: 'Property not found' });
        }

        res.send(rows[0]);
    });
    
});





// ==============   === Buyer Ended Here ===   ================

// ---------------------------------------------------------

// ==============   === Invoice Here ===   ================



Router.get("/api/create-new-invoice", (req, res) => {
    sqlDBConnect.query("select * from invoice", (err, rows) => {
        !err? res.send(rows) : console.log(err);
    })
    
})


Router.post("/api/create-new-invoice", (req, res) => {
    let propertyId = req.body.property_id;
    let sellerId = req.body.seller_id;
    let buyerId = req.body.buyer_id;
    let inRecvAmount = req.body.invoice_recievable_amount;
    let inPayAmount = req.body.invoice_payable_amount;
    let inCommission = req.body.commission_amount



     
    let sql = `INSERT INTO invoice(property_id, buyer_id, seller_id, invoice_date, invoice_recievable_amount, invoice_payable_amount, commission_amount) VALUES ("${propertyId}", "${buyerId}", "${sellerId}", "${(new Date()).toLocaleDateString('en-CA')}", "${inRecvAmount}", "${inPayAmount}", "${inCommission}"); UPDATE property SET property_status = "sold" WHERE property_id = ${propertyId}`;

    sqlDBConnect.query(sql, (err, result) => !err ? res.status(200).json("New Property has been Inserted") 
    : console.log(err) );
})

Router.get("/api/invoice-details", (req, res) => {
    
    let sql = `SELECT inv.*, p.seller_id FROM invoice AS inv INNER JOIN property AS p ON inv.property_id = p.property_id`;

    sqlDBConnect.query(sql, (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database query failed' });
        }
        res.send(rows);
    });
    
});

// ==============   === Invoice Ended Here ===   ================





module.exports = Router;