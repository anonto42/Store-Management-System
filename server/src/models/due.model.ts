import mongoose, { Schema, Document } from 'mongoose';

export interface IDue extends Document {
  user: string;
  productID: string;
  productQuantity: number;
  productPieces: string;
  isPayed: boolean;
}

const DueSchema: Schema = new Schema<IDue>({
  user: { type: String },
  productID: { type: String },
  productQuantity: { type: Number },
  productPieces: { type: String },
  isPayed: { type: Boolean },
},{timestamps: true});

export default mongoose.model<IDue>('Due', DueSchema);
