import { NextFunction, Request, Response } from "express";
import { Response as customRes } from "../utils/Response";
import { StatusCode } from "../utils/StatusCode";
import { JWT_DECODE } from "../utils/Jwt";
import userModel, { IUser } from "../models/user.model";

export interface AutRequest extends Request {
    user?: IUser;
}

export async function IsUser( req: AutRequest, res: Response, next: NextFunction ): Promise<void> {
    try {
        const cookie = req.cookies.MyStore;
        customRes.IF(res, "You can't have authorization haders!", [ cookie ]);

        const decoded = JWT_DECODE(cookie);
        customRes.IF(res, "You can't have authorization haders!", [ decoded.id, decoded.isAdmin ]);

        const user = await userModel.findById( decoded.id );
        let isUser = user? true : false;
        customRes.IF(res, "Your accout was not founded!", [ isUser ]);

        req.user = user!
        next()
        
    } catch (error) {
        console.log("Error on user middleware : "+error);
        customRes.Error(res, "Middleware error! user can't authenticated", StatusCode.unexpected)
        next(error)
    }
}

export async function IsAdmin(req: AutRequest, res: Response, next: NextFunction) {
    try {

        const admin = req.user;
        customRes.IF(res, "You are not authenticated!",[ admin ]);

        customRes.IF(res, "You are not authorized!",[ admin?.isAdmin ]);

        next();
        
    } catch (error) {
        console.log(error)
        customRes.Error(res, "Middleware error! admin can't authenticated", StatusCode.unexpected)
        next(error)
    }
}