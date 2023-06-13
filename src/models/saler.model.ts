import mongoose, { Schema, Document } from 'mongoose';

interface ISaler extends Document {
  salerId: string;
  salerName: string;
  address: string;
  gender: string;
  status: string;
}

const salerSchema: Schema = new Schema({
  salerId: { type: String, required: true },
  salerName: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String },
  status: { type: String },
});

const Saler = mongoose.model<ISaler>('Saler', salerSchema);

export default Saler;
