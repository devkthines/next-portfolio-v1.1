import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Project = mongoose.Schema({
    // _id: {
    //     type: ObjectId,
    //     required: true
    // },
    title: {
        type: String,
        required: true
    },
    subTitle:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    demoLink:{
        type: String,
        required: true
    },
    gitLink:{
        type: String,
        required: true
    }
}, { collection: 'projects' });

var Project = mongoose.models.Project || mongoose.model('Projects', Project);
