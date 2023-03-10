import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
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
});

export default mongoose.models.projects || mongoose.model('projects', ProjectSchema)
