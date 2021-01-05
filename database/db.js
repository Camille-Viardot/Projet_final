const mysql = require("mysql2");

// Créer une connection avec la Bdd
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mon_aidant_ligne"
});

// open the MySQL connection
con.connect(error => {
    if (error) throw error;
    console.log("Bienvenu dans votre Database!");

})

module.exports = con;