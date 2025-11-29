import mongoose from "mongoose";
const todoList = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"sub_todo"
        }
    ]
},{timestamps:true})
export const todo = mongoose.model("todo", todoList); //in DB it stores in plural form i.e todos