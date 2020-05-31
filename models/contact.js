const mongoose=require("mongoose");
const ContactSchema=mongoose.Schema(
  {
    name:{type:String},
    dob:{type:Date},
    contacts:[
      ],
      emails:[]   
  });
module.exports=mongoose.model('contacts',ContactSchema);