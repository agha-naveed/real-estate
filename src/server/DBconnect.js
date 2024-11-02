const sql = require("mysql");

const sqlconnect = sql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodeDB",
        multipleStatements: true
    });

sqlconnect.connect((err) => !err ? console.log("connection established"): console.log("Error!"));

module.exports = sqlconnect;