import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validate from "mongoose-validator";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim:true,
      match: [/^[a-zA-Z ]*$/,"special symbols and number not allowed"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate:{
        validator:(v)=>v.length>=7,
        message:"password should be not less than 7"
      }
      
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
