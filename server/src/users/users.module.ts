import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/schema/user.schema';
import { DueSchema } from 'src/schema/due.schema';
import { PaymentSchema } from 'src/schema/payment.schema';
import { ProductSchema } from 'src/schema/product.schema';

@Module({
  imports:[
    MongooseModule.forFeature(
      [
        {
          name: "User",
          schema: userSchema
        },
        {
          name: "Due",
          schema: DueSchema
        },
        {
          name: "Payment",
          schema: PaymentSchema
        },
        {
          name: "Product",
          schema: ProductSchema
        },
        {
          name: "Sales",
          schema: userSchema
        }
      ]
    )
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
