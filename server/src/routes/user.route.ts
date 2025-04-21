import { Router } from "express";
import {
    AdminInfo, Create,
    DeleteDoc,
    Login,
    Logout,
    Profile,
    Register,
    Update
} from "../controllers/user.controller";
import { IsAdmin, IsUser } from "../middleware/auth.middleware";

const userRouter = Router();

// Register 
userRouter
    .route( "/register" )
    .post( Register )
// Signin 
userRouter
    .route( "/login" )
    .post( Login )
// User authintication verify middleware
userRouter.use( IsUser )                 
// User accout
userRouter
    .route( "/" )
    .get( Profile )
    .delete( Logout )
// This Routes are for the admin
userRouter.use( IsAdmin )
// For get all info using the queary params
userRouter
    .route("/admin/:modelName")
    .get( AdminInfo )
    .post( Create )
    .patch( Update )
    .delete( DeleteDoc )


export default userRouter;