import mongoose, { Schema, Document } from 'mongoose';

interface ICustomer extends Document {
    password: string;
    address: string;
    emailId: string;
    customerId: string;
    gender: string;
    state: string;
    city: string;
}

const customerSchema: Schema = new Schema({
    password: { type: String, required: true },
    address: { type: String, required: true },
    emailId: { type: String, required: true },
    customerId: { type: String, required: true },
    gender: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
});

const Customer = mongoose.model<ICustomer>('Customer', customerSchema);

export default Customer;
