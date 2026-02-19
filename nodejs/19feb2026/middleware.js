const express=require("express");
const app=express();
const port=4000;

// middleware to parse json request body
app.use(express.json());

// middleware to parse url encoded request body
app.use(express.urlencoded({extended:true}));

// middleware to serve static files from the public directory
app.use(express.static("public"));

// post route that uses json middleware
app.post("/api/users",(req,res)=>{
    // req.body contains the parsed json
    console.log(req.body);
    res.status(201).json({message:"user created",user:req.body});
});

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
});








