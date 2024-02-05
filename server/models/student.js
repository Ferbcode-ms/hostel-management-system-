import mongoose from "mongoose";

import validate from "mongoose-validator";



const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
      trim:true,
      validate:{
        validator:(v)=> v.length<20 && v.length>=5,
        message:"name should be 5 to 20 character"
      },
      match: [/^[a-zA-Z ]*$/,"special symbols and number not allowed"],
    },
    address: {
      type: String,
      required: true,
      validate:{
        validator:(v)=> v.length<30 && v.length>=7,
        message:"address should be 7 to 30 character"
      },
      match: [/^[A-Za-z0-9 ]*$/,"dot & special symbols not allowed"],
      
    },
    category: {
      type: String,
      required: true,
      match:[/^[a-zA-Z0-9-]*$/,"special symbols and space not allowed"],
    },
    city: {
      type: String,
      required: true,
      match: [/^[a-zA-Z]*$/,"number , special symbols and space not allowed "],
      
    },
    contact: {
      type: String,
      required: true,
      validate:{
        validator:(v)=> v.length<11 && v.length>=10,
        message:"invalid phone number enter Only 10 digit"
      }
      
      
    },
    fatherContact: {
      type: String,
      required: true,
      validate:{
        validator:(v)=> v.length<11 && v.length>=10,
        message:"invalid phone number enter Only 10 digit "
      }
    },
    image: {
      type: String,
      required: true,
    },
    roomNo: {
      type: String,
      required: true,
      validate:{
        validator:(v)=> v.length<20 && v.length>=4,
        message:"roomno. should be 4 or greater"
      },
      match:[ /^[a-zA-Z0-6]*$/,"space not allowed and special symbols"],
    },
    blockNo: {
      type: String,
      required: true,
      minlength:[1,"only one character allowed"],
      match:[ /^[a-zA-Z]*$/,"only one character allowed, number , special symbols and space not allowed"]
    },
    // status: {
    //   type: String,
    //   required: true,
    //   default: false,
    // },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
