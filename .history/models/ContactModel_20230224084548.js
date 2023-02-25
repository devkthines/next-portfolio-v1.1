import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Contact = mongoose.Schema({
    // _id: {
    //     type: ObjectId,
    //     required: true
    // },
    email: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
}, { collection: 'contact' });

export default mongoose.model('contact', Contact);