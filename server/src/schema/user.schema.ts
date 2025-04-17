import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({
    timestamps: true
})
export class User extends Document {

    @Prop() fullName: string;

    @Prop() userName: string;

    @Prop() address: string;

    @Prop() nid: string;

    @Prop() phone: string;

    @Prop() profileImage: string;

    @Prop() password: string;

    @Prop() isAdmin: string;
    
    @Prop(
        { 
            type: [
                { 
                    type: Types.ObjectId, 
                    ref: 'Product' 
                }
            ] 
        }
    ) shopHistory: Types.ObjectId[];

    @Prop(
        { 
            type: [
                { 
                    type: Types.ObjectId, 
                    ref: 'Due' 
                }
            ] 
        }) dueHistory: Types.ObjectId[];

    @Prop(
        { 
            type: [
                { 
                    type: Types.ObjectId, 
                    ref: 'Payment' 
                }
            ] 
        }) paymentHistory: Types.ObjectId[];
}

export const userSchema = SchemaFactory.createForClass(User)