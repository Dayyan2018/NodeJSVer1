const express = require("express");
const bodyParser = require("body-parser");
const cors      = require("cors");

const app = express() ; 

var corsOptions = {
 origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

// parse request of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
//db.sequelize.sync();
 db.sequelize.sync().then(() => {
	console.log("Online Shopping Application tables created");
});

//  drop the table if it already exists
/* db.sequelize.sync({ alter: true }).then(() => {
   console.log("Drop and re-sync db.");
 });*/

// simple route
app.get("/" , (req,res) => {
 res.json({ message: "Welcome to Online Shopping Application"});
});


require("./app/routes/order.routes.js")(app);
// set port , listen for requests 
const PORT = process.env.PORT || 3000 ; 
app.listen(PORT , () => { 
   console.log('Server is runningon port ${PORT}.') ;               
});





