"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SIGN = JWT_SIGN;
exports.JWT_DECODE = JWT_DECODE;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function JWT_SIGN(value) {
    const JWT = jsonwebtoken_1.default.sign(value, process.env.JWT_SECRET);
    return JWT;
}
function JWT_DECODE(inCodedValue) {
    const decode = jsonwebtoken_1.default.verify(inCodedValue, process.env.JWT_SECRET);
    return decode;
}
