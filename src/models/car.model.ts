import mongoose, { Schema, Document } from 'mongoose';

interface ICar extends Document {
  carId: string;
  carName: string;
  carType: string;
  carModel: string;
  carPrice: number;
  createdAt: Date;
  carDescription: string;
  sellerId: string;
  showroomId: string;
}

const carSchema: Schema = new Schema({
  carId: { type: String, required: true },
  carName: { type: String, required: true },
  carType: { type: String, required: true },
  carModel: { type: String, required: true },
  carPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  carDescription: { type: String },
  sellerId: { type: String, required: true },
  showroomId: {type: String, required: true}
});

const Car = mongoose.model<ICar>('Car', carSchema);

export default Car;