// Manages actions related to mentors, such as retrieving all mentors, viewing mentor details, and booking a mentor.
import { mentorUserModel } from "../models/mentoruser.js";
import bcrypt from "bcrypt";

async function hashPassword(password) {
  const res = await bcrypt.hash(password, 10);
  return res;
}

async function compare(userPassword, hashedPassword) {
  const res = await bcrypt.compare(userPassword, hashedPassword);
  return res;
}

export const registerMentor = async (req, res, next) => {
  try {
    const data = req.body;

    const hashedPassword = await hashPassword(data.password);

    const user = await mentorUserModel.findOne({ email: data.email });
    if (!user) {
      const { firstName, lastName, email, phoneNumber, currentJobTitle, location, sector, careerStage, skills, availabilityStartTime,
        availabilityEndTime, } = await mentorUserModel.create({
        ...data,
        password: hashedPassword,
      });
      res.staus(201).json({
        firstName,
        lastName,
        email,
        phoneNumber,
        currentJobTitle,
        location,
        sector,
        careerStage,
        skills,
        availabilityStartTime,
        availabilityEndTime,
      });
    } else {
      res.send("User already exists");
    }
  } catch (error) {
    next(error);
    res.staus(500).send({ error });
  }
};
