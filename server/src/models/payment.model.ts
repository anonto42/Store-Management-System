import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  amount: number;
  paymentType: string;
  payBy: string;
  user: string;
}

const PaymentSchema: Schema = new Schema<IPayment>({
  amount: { type: Number },
  paymentType: { type: String },
  payBy: { type: String },
  user: { type: String },
},{timestamps: true});

export default mongoose.model<IPayment>('Payment', PaymentSchema);
