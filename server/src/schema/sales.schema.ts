import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema(
    {
        timestamps: true
    }
)
export class Sales extends Document {
    
    @Prop() quantity: number;
    
    @Prop() amount: number;
    
    @Prop() buyer: string;
    
}

export const SalesSchema = SchemaFactory.createForClass(Sales);
