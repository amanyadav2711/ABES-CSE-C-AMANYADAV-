const express=require("express")
const app=express();
const port=8080;

// define a route for get request to the root url
app.get("/",(req,res)=>{
    res.send("hello world from express");
});

// start the server
app.listen(port,()=>{
    console.log(`example app ,listening at http://localhost:${port}`);
});