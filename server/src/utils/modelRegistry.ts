import dueModel from "../models/due.model";
import paymentModel from "../models/payment.model";
import productModel from "../models/product.model";
import salesModel from "../models/sales.model";
import userModel from "../models/user.model";


export const modelRegistry: Record<string, any> = {
    user: userModel,
    product: productModel,
    payment: paymentModel,
    sales: salesModel,
    due: dueModel
}