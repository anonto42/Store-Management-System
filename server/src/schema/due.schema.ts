import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({
    timestamps: true
})
export class Due extends Document {
  
    @Prop() user: string;

    @Prop() productQuantity: number;
    
    @Prop() productPieces: string;
    
    @Prop() dateAndTime: Date;
    
    @Prop() isPayed: boolean;

    @Prop(
        { 
            type: Types.ObjectId, 
            ref: 'Product' 
        }) productID: Types.ObjectId;

}

export const DueSchema = SchemaFactory.createForClass(Due);
