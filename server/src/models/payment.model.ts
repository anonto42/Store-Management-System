import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  amount: number;
  paymentType: string;
  payBy: string;
  user: mongoose.Types.ObjectId;
}

const PaymentSchema: Schema = new Schema<IPayment>({
  amount: { type: Number },
  paymentType: { type: String },
  payBy: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},{timestamps: true});

export default mongoose.model<IPayment>('Payment', PaymentSchema);
