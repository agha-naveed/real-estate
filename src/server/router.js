const express = require("express");

const sqlDBConnect = require('./DBconnect');


const Router = express.Router();

Router.get("/", (req, resp) => {
    const userData = [{
            name: "Agha Naveeeeed",
            email: "agha@naveed.dev",
            age: 21,
        },
        {
            name: "Manzoor",
            email: "pubg@asd.com",
            age: 22
        }
    ];
    resp.send(userData)
})

Router.get("/api/user", (req, res) => {
    sqlDBConnect.query("select * from tbl_user", (err, rows) => {
        !err? res.send(rows) : console.log(err);
    })
})

module.exports = Router;