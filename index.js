const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);

app.get('/',(req,res) => { // /=>blank page, req=>request from server, res=>response from backend
    res.send("Hello from Node API Server");
});


mongoose.connect("mongodb+srv://deepakgonchikar0707:D07t07g2004@backenddb.hyorqoa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });
})
.catch(() => {
    console.log("Connection failed!");
});



