import mongoose, { Schema, Document } from 'mongoose';

export interface IShowroom extends Document {
    showroomName: string;
    showroomId: string;
    address: string;
    imagePath: string;
    state: string;
    status: string;
    city: string;
}

const showroomSchema: Schema = new Schema({
    showroomName: { type: String, required: true },
    showroomId: { type: String, required: true },
    address: { type: String, required: true },
    imagePath: { type: String },
    state: { type: String, required: true },
    status: { type: String, required: true },
    city: { type: String, required: true },
});

const Showroom = mongoose.model<IShowroom>('Showroom', showroomSchema);

export default Showroom;