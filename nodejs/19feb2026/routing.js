// import express
const express=require("express");
const app=express();
const port=8000;

// respond to get request on the root route 
app.get("/",(req,res)=>
{
    res.send("get a request to the homepage");
});

// respond to post request on the root route
app.post("/",(req,res)=>
{
    res.send("post request to the homepage");
});

// respond to get request on the / about route
app.get("/about",(req,res)=>
{
    res.send("about page"); 

});

// catch all the other routes
app.use((req,res)=>{
    res.status(404).send("404-page not found");
});

// start the server
app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`);
});