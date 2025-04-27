"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class Bcryptjs {
    static async hash(password) {
        return await bcryptjs_1.default.hash(password, 10);
    }
    ;
    static async compare(givenPassword, userPassword) {
        return await bcryptjs_1.default.compare(givenPassword, userPassword);
    }
    ;
}
;
exports.default = Bcryptjs;
