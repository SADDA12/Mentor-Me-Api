import { Schema, model } from "mongoose";

const MenteeSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export const menteeUserModel = model("Mentee", MenteeSchema, "mentees")