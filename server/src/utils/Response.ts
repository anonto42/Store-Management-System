import { Response as expressResponse, CookieOptions } from 'express';
import { StatusCode } from './StatusCode';


export const Options:CookieOptions = {
    maxAge: 3 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true
}

export const CookieName = "MyStore";

export class Response{

    static Success(
        res: expressResponse, 
        message: string,
        statusCode: number,
        data?: {},
        cookie?: string
    ){
        if (cookie) {
            return res
                .cookie( CookieName, cookie, Options)
                .status(statusCode)
                .json(
                    {
                        success: true,
                        message,
                        data: data 
                    }
                )
        }
        return res
                .status(statusCode)
                .json(
                    {
                        success: true,
                        message,
                        data: data 
                    }
                )
    }

    static Error(
        res: expressResponse, 
        message: string,
        statusCode: number
    ){
        return res
                .status(statusCode)
                .json(
                    {
                        success: false,
                        message
                    }
                )
    }

    static IF(
        res : expressResponse,
        message: string,
        conditions: any[]
    ){
        for (let i = 0; i < conditions.length; i++) {
            if ( !conditions[i] ) {
                console.log(conditions[i])
                return this.Error( res, message, StatusCode.badRequest)
            }
        }
    }
}