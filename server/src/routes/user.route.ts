import { Router } from "express";
import { Login, Logout, Profile, Register } from "../controllers/user.controller";
import { IsUser } from "../middleware/auth.middleware";

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

export default userRouter;