// Represents user sessions, including fields such as session token, user ID, and expiration time.
import { Schema, model } from "mongoose";

const BookingSchema = new Schema({
      date: {
        type: Date,
        required: true
      },
      bookingStatus: {
        type: String,
        enum: ['pending', 'confirmed', 'canceled'],
        default: 'pending'
      },
      StartTime: {
        type: Number,
        required: true
      },
      endTime: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      }
})

export const BookingModel = model("Booking", BookingSchema, "bookings")