import { NextFunction, Request, Response } from "express";
import { Response as customRes } from "../utils/Response";
import { StatusCode } from "../utils/StatusCode";
import { JWT_DECODE } from "../utils/Jwt";
import userModel, { IUser } from "../models/user.model";

export interface AutRequest extends Request {
    user?: IUser;
}

export async function IsUser( req: AutRequest, res: Response, next: NextFunction ): Promise<any> {
    try {
        const cookie = req.cookies.MyStore;
        if (!cookie) {
            return customRes.Error(res, "You can't have authorization haders!", StatusCode.unAuthenticated);
        }

        const decoded = JWT_DECODE(cookie);
        if (!decoded) {
            return customRes.Error(res, "Authorization haders are not properly okay!", StatusCode.unAuthenticated);
        }
        const user = await userModel.findById( decoded.id );
        let isUser = user? true : false;
        if (!isUser) {
            return customRes.Error(res, "User not founded on the server!", StatusCode.unavailable);
        }

        req.user = user!
        next()
        
    } catch (error) {
        console.log("Error on user middleware : "+error);
        customRes.Error(res, "Middleware error! user can't authenticated", StatusCode.unexpected)
        next(error)
    }
}

export async function IsAdmin(req: AutRequest, res: Response, next: NextFunction): Promise<any> {
    try {

        const admin = req.user?.isAdmin;
        if (!admin) {
            return customRes.Error(res, "You are not authorized!", StatusCode.unAuthorize);
        }

        next();
        
    } catch (error) {
        console.log(error)
        return customRes.Error(res, "Middleware error! admin can't authorized!", StatusCode.unexpected)
    }
}