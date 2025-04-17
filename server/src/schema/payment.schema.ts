import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema(
    {
        timestamps: true
    }
)
export class Payment extends Document {
  
    @Prop() amount: number;
  
    @Prop() paymentType: string;
  
    @Prop() payBy: string;

    @Prop(
        { 
            type: Types.ObjectId, 
            ref: 'User' 
        }) user: Types.ObjectId;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);