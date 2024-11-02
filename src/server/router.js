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

Router.get("/api/user", (req, res) => {
    sqlDBConnect.query("select * from seller", (err, rows) => {
        !err? res.send(rows) : console.log(err);
    })
})

module.exports = Router;