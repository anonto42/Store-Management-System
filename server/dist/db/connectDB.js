"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectDB() {
    const MONGO_URI = process.env.DATABASE_URL;
    const DB_NAME = process.env.DB_NAME;
    if (!MONGO_URI) {
        throw new Error("DATABASE_URL environment variable is not defined!");
    }
    let isConnected = false;
    if (isConnected) {
        console.log("Using existing database connection!");
        return mongoose_1.default;
    }
    try {
        const db = await mongoose_1.default.connect(`${MONGO_URI}/${DB_NAME}`);
        isConnected = !!db.connections[0].readyState;
        return db;
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to the database");
    }
}
