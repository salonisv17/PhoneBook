const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const Contactobj=require("./models/contact");
path = require('path');
cors = require('cors');
mongoose.connect("mongodb://127.0.0.1:27017/Contacts"
).then(()=>
{
  console.log("Connected To Database");
}).catch(()=>
{
  console.log("Connection Failed");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>
{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});
    app.post("/addcontact",(req,res,next)=>
    {
      var cr=new Contactobj({
        name:req.body.name,
        dob:req.body.birthday,
        contacts:[req.body.mobile],
        emails:[req.body.em]
      });
      cr.save();
      res.status(200).json(
                  {
                    data:"Contact Added Successfully"
                  }
                )
    });
        app.post("/getDesiredContact",(req,res,next)=>
    {
     var regex = new RegExp(["^", req.body.name, "$"].join(""), "i"); 
    Contactobj.find( { name:regex} ).then(documents=>
    {
        res.status(200).json(
          {
            data:documents
          }
        )
    });
    });
            app.get("/getAllContact",(req,res,next)=>
    {
    Contactobj.find({}).then(documents=>
    {
        res.status(200).json(
          {
            data:documents
          }
        )
    });
    });
            app.post("/delcontact",(req,res,next)=>
    {
      Contactobj.findOneAndDelete({name:req.body.name}).exec().then(documents=>
      {
          res.status(200).json(
            {
              message:"Contact Deleted Successfully"
            }
          )
      });
    });
 module.exports = app;
