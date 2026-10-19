const express = require("express");
const app = express();


const Shopping = require("./models/Shopping");
const db = require("./db");



app.use(express.json());

// GET method
app.get("/", (req, res) => {
    res.send("Welcome to my shopping site");
});

// GET method - MongoDB se data fetch karna
 app.get("/shopping", async (req, res) => {
    try {
        const data = await Shopping.find();
        console.log("data fetch for shopping site ")
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// POST method
app.post("/shopping", async (req, res) => {
    try {
        const data = req.body;
        const newData = new Shopping(data);

        const response = await newData.save();
        console.log("Data is saved sucessfully");    
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
