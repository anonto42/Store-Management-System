import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class Product extends Document {
    
    @Prop() title: string;
  
    @Prop() quantity: number;
  
    @Prop() address: string;
  
    @Prop() totalSales: number;
    
}

export const ProductSchema = SchemaFactory.createForClass(Product);
