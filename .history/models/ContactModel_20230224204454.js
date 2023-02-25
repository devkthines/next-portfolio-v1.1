import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
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
});

export default mongoose.models.projects || mongoose.model('contact', ProjectSchema)
