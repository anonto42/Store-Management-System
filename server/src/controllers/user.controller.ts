import { Request, Response } from "express";
import { Response as returnResponse } from "../utils/Response";
import { StatusCode } from "../utils/StatusCode";
import { AutRequest } from "../middleware/auth.middleware";


export async function Register (req: Request, res: Response){
    try {
        
        returnResponse.Success(
            res,
            "User Register successfully",
            StatusCode.created,
            {
                data:""
            },
            ""
        )

    } catch (error) {
        console.log(error),
        returnResponse.Error(res, "Unexpected server error", StatusCode.unexpected)
    }
}

export async function Login (req: Request, res: Response){
    try {

        const { userName, password } = req.body;
        returnResponse.IF(res, "All Fields are required", [ userName, password ] )


        returnResponse.Success(
            res,
            "User login successfully",
            StatusCode.accepted,
            {
                data:"user login cradintials"
            },
            "sdfasdfasdfasdfasdf"
        )

    } catch (error) {
        console.log(error),
        returnResponse.Error(res, "Unexpected server error", StatusCode.unexpected)
    }
}

export async function Logout (req: AutRequest, res: Response){
    try {

        returnResponse.Success(
            res,
            "User logout successfully",
            StatusCode.accepted,
            {},
            ""
        )

    } catch (error) {
        console.log(error),
        returnResponse.Error(res, "Unexpected server error", StatusCode.unexpected)
    }
}

export async function Profile (req: AutRequest, res: Response){
    try {

        returnResponse.Success(
            res,
            "User logout successfully",
            StatusCode.accepted,
            {},
            ""
        )

    } catch (error) {
        console.log(error),
        returnResponse.Error(res, "Unexpected server error", StatusCode.unexpected)
    }
}