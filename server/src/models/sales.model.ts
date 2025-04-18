import mongoose, { Schema, Document } from 'mongoose';

export interface ISales extends Document {
  quantity: number;
  amount: number;
  buyer: string;
  paid: boolean;
  product: string;
}

const SalesSchema: Schema = new Schema<ISales>({
  quantity: { type: Number },
  product: { type: String },
  amount: { type: Number },
  buyer: { type: String },
  paid: { type: Boolean },
});

export default mongoose.model<ISales>('Sales', SalesSchema);
