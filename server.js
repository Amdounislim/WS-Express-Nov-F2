// console.log('hello')

//1- import express
const express = require("express");

//2- init express
const app = express();

//6- create midl
function logger(req, res, next) {
  // console.log("method :", req.method);
  // console.log("path :", req.url);
  console.table({ method: req.method, path: req.url });
  if (10 < 6) {
    next();
  } else {
    res.send("Oups, the request is blocked");
  }
}

app.use(logger)

// 4- create your endpoints
app.get("/", (req, res) => {
  res.send("Welcome to WS-Express");
});


app.get("/user", (req, res) => {
    res.send("Welcome to user page");
  });


//5 - Get the html files using sendFile
// app.get("/", (req,res)=>{
//     res.sendFile(__dirname + "/public/contact.html")
// })

// app.use(express.static(__dirname + "/public"))

//3- run server
const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port http://localhost:${port}`);
});
