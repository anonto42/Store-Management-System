import { Document } from "mongoose";

export interface SalesInterface extends Document {
    quantity: number;
    amount: number;
    buyer: string;
    paid: boolean;
    product: string;
}

export interface PaymentInterface extends Document {
    amount: number;
    paymentType: string;
    payBy: string;
    user: string;
}

export interface ProductInterface extends Document {
    title: string;
    quantity: number;
    totalSales: number;
    image: string;
}

export interface DueInterface extends Document {
    user: string;
    productID: string;
    productQuantity: number;
    productPieces: string;
    isPayed: boolean;
}

export interface UserInterface extends Document {
    fullName: string;
    userName: string;
    address: string;
    nid: string;
    phone: string;
    profileImage: string;
    shopHistory: [];
    dueHistory: [];
    paymentHistory: [];
    password: string;
    isAdmin: boolean;
}