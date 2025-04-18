import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  userName: string;
  address: string;
  nid: string;
  phone: string;
  profileImage: string;
  shopHistory: mongoose.Types.ObjectId[];
  dueHistory: mongoose.Types.ObjectId[];
  paymentHistory: mongoose.Types.ObjectId[];
  password: string;
  isAdmin: string;
}

const UserSchema: Schema = new Schema<IUser>({
  fullName: { type: String },
  userName: { type: String },
  address: { type: String },
  nid: { type: String },
  phone: { type: String },
  profileImage: { type: String },
  shopHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  dueHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Due' }],
  paymentHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
  password: { type: String },
  isAdmin: { type: String },
});

export default mongoose.model<IUser>('User', UserSchema);
