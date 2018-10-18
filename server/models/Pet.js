let mongoose = require("mongoose");
let Schema   = mongoose.Schema;
let ForeignKey = Schema.Types.ObjectId;

let Pet = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },

    description:{
        type:String,
        required:true,
        minlength:3
    },

    type:{
        type:String,
        required:true,
        minlength:3
    },

    likes:{
        type:Number,
        default:0
    },

    skill1:{
        type:String
    },

    skill2:{
        type:String
    },

    skill3:{
        type:String
    }
});

mongoose.model("Pet",Pet);