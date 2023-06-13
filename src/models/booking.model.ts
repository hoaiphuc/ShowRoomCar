import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  bookingId: string;
  customerId: string;
  bookingDate: Date;
  createDate: Date;
  time: string;
  carId: string;
  status: string;
}

const BookingSchema: Schema = new Schema({
  bookingId: { type: String, required: true },
  customerId: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  createDate: { type: Date, default: Date.now },
  time: { type: String, required: true },
  carId: { type: String, required: true },
  status: { type: String, required: true },

});

const BookingModel = mongoose.model<IBooking>('Booking', BookingSchema);

export default BookingModel;
