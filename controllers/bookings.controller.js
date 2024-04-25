// Manages user sessions, such as creating and destroying sessions.
import { BookingModel } from "../models/bookings";

export const bookMentor = async (req, res, next) => {
  try {
    const data = req.body;

      const { date, bookingStatus, startTime, endTime, description, } = await BookingModel.create({
        ...data,
        password: hashedPassword,
      });
      res.staus(201).json({
        date,
        bookingStatus,
        startTime,
        endTime,
        description,
      });
  } catch (error) {
    next(error);
    res.staus(500).send({ error });
  }
};
