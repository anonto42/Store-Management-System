"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUser = IsUser;
exports.IsAdmin = IsAdmin;
const Response_1 = require("../utils/Response");
const StatusCode_1 = require("../utils/StatusCode");
const Jwt_1 = require("../utils/Jwt");
const user_model_1 = __importDefault(require("../models/user.model"));
async function IsUser(req, res, next) {
    try {
        const cookie = req.cookies.MyStore;
        if (!cookie) {
            return Response_1.Response.Error(res, "You can't have authorization haders!", StatusCode_1.StatusCode.unAuthenticated);
        }
        const decoded = (0, Jwt_1.JWT_DECODE)(cookie);
        if (!decoded) {
            return Response_1.Response.Error(res, "Authorization haders are not properly okay!", StatusCode_1.StatusCode.unAuthenticated);
        }
        const user = await user_model_1.default.findById(decoded.id);
        let isUser = user ? true : false;
        if (!isUser) {
            return Response_1.Response.Error(res, "User not founded on the server!", StatusCode_1.StatusCode.unavailable);
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log("Error on user middleware : " + error);
        Response_1.Response.Error(res, "Middleware error! user can't authenticated", StatusCode_1.StatusCode.unexpected);
        next(error);
    }
}
async function IsAdmin(req, res, next) {
    try {
        const admin = req.user?.isAdmin;
        if (!admin) {
            return Response_1.Response.Error(res, "You are not authorized!", StatusCode_1.StatusCode.unAuthorize);
        }
        next();
    }
    catch (error) {
        console.log(error);
        return Response_1.Response.Error(res, "Middleware error! admin can't authorized!", StatusCode_1.StatusCode.unexpected);
    }
}
