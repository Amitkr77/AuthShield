import mongoose from "mongoose";

const useSchema = mongoose.Schema({
    username :{
        type: String,
        required: true,
    },
    password :{
        type: String,
        required : true,
        unique : true
    },
    Enum:["admin","manager","user"]

},
    {timestamp : true}
)
export const User = mongoose.model("User", useSchema);