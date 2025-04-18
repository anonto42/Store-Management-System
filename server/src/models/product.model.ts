import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  quantity: number;
  totalSales: number;
  image: string;
}

const ProductSchema: Schema = new Schema<IProduct>({
  title: { type: String },
  quantity: { type: Number },
  totalSales: { type: Number },
  image: { type: String }
});

export default mongoose.model<IProduct>('Product', ProductSchema);
