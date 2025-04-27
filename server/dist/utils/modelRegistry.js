"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelRegistry = void 0;
const due_model_1 = __importDefault(require("../models/due.model"));
const payment_model_1 = __importDefault(require("../models/payment.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
const sales_model_1 = __importDefault(require("../models/sales.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
exports.modelRegistry = {
    user: user_model_1.default,
    product: product_model_1.default,
    payment: payment_model_1.default,
    sales: sales_model_1.default,
    due: due_model_1.default
};
