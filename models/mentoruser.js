import { Schema, model } from "mongoose";

const MentorSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    pronouns: {type: String, required: true},
    linkedinUrl: {type: String, required: true},
    currentEmployer: {type: String, required: true},
    currentEmployerWebsite: {type: String, required: true},
    currentJobTitle: {type: String, required: true},
    location: {type: String, required: true},
    sector: {type: String, required: true},
    careerStage: {type: String, required: true},
    skills: {type: String, required: true},
    reason: {type: String, required: true},
    availabilityStartTime: {type: String, required: true},
    availabilityEndTime: {type: String, required: true},
})

export const mentorUserModel = model("Mentor", MentorSchema, "user_mentor")