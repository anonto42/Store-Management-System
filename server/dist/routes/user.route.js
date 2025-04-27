"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const userRouter = (0, express_1.Router)();
// Register 
userRouter
    .route("/register")
    .post(user_controller_1.Register);
// Signin 
userRouter
    .route("/login")
    .post(user_controller_1.Login);
// User authintication verify middleware
userRouter.use(auth_middleware_1.IsUser);
// User accout
userRouter
    .route("/")
    .get(user_controller_1.Profile)
    .delete(user_controller_1.Logout);
// This Routes are for the admin
userRouter.use(auth_middleware_1.IsAdmin);
// For get all info using the queary params
userRouter
    .route("/admin/:modelName")
    .get(user_controller_1.AdminInfo)
    .post(user_controller_1.Create)
    .patch(user_controller_1.Update)
    .delete(user_controller_1.DeleteDoc);
exports.default = userRouter;
