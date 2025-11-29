import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true}
},{timestamps:true});

export const User = mongoose.model("User", userSchema); //in DB it stores in plural form i.e users