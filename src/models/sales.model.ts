import mongoose, { Schema, Document } from 'mongoose';

interface ISale extends Document {
    saleId: string;
    carId: string;
    customerId: string;
    description: string;
    status: string;
    createDate: Date;
    showroomId: string;
}

const saleSchema: Schema = new Schema({
    saleId: { type: String, required: true },
    carId: { type: String, required: true },
    customerId: { type: String, required: true },
    description: { type: String },
    status: { type: String },
    createDate: { type: Date, default: Date.now },
    showroomId: { type: String },
});

const Sale = mongoose.model<ISale>('Sale', saleSchema);

export default Sale;
