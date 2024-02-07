require('dotenv').config();
const mongoose=require("mongoose");
const express = require("express");
const app 	  = express();
const {connectDB}=require("./dbmongoo/conncetdb");
const port =process.env.PORT || 8080;
const routershelter=require("./routers/shelters_router");


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/shelters',routershelter);


connectDB();
app.listen(port,()=>console.log(`server listening on port ${port}!`));


































// require('dotenv').config();
// const mongoose=require("mongoose");
// const express = require("express");
// const app 	  = express();
// const port =process.env.PORT || 8080;
// mongoose
//     .connect(
//         "mongodb+srv://ibrahemaboraya2002:ebraheems123@cluster1.juz4b4y.mongodb.net/?retryWrites=true&w=majority")
//     .then(()=>{
//         console.log(" connecting mongodb");
//     }).catch((ERROR)=>{
//     console.log("Error connecting mongodb",ERROR);
// })
//
//
// // app.use(express.json());
// // app.use(express.urlencoded({extended: true}));
// // app.use(logger("dev"));
// //
// //
// // app.all('*',(req,res,next)=>{
// //     console.log("checking if user is connected");
// //     next();
// // })
//
// app.listen(port,()=>console.log(`server listening on port ${port}!`));

