import mongoose from "mongoose";
const sub_todoSchema = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true
        }
    },{timestamps:true})

export const sub_todo = mongoose.model("sub_todo", sub_todoSchema);