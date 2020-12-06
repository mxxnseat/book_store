const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("./public"));
app.use(bodyParser.json());

app.listen(1234, ()=>{
    console.log("server started successfully");
});

app.post("/cart.json", (req,res)=>{
    const filePath = './public/cart.json';

    console.log(req.body);

    fs.readFile(filePath, "utf-8", (err,data)=>{
        let list = req.body;

        fs.writeFile(filePath, JSON.stringify(list), (err, data)=>{
            if(err){
                console.log(err);
            }
            res.send(data);
        })
    });
});