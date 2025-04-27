"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.CookieName = exports.Options = void 0;
const StatusCode_1 = require("./StatusCode");
exports.Options = {
    maxAge: 3 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true
};
exports.CookieName = "MyStore";
class Response {
    static Success(res, message, statusCode, data, cookie) {
        if (cookie) {
            return res
                .cookie(exports.CookieName, cookie, exports.Options)
                .status(statusCode)
                .json({
                success: true,
                message,
                data: data
            });
        }
        return res
            .status(statusCode)
            .json({
            success: true,
            message,
            data: data
        });
    }
    static Error(res, message, statusCode) {
        return res
            .status(statusCode)
            .json({
            success: false,
            message
        });
    }
    static IF(res, message, conditions) {
        for (let i = 0; i < conditions.length; i++) {
            if (!conditions[i]) {
                console.log(conditions[i]);
                return this.Error(res, message, StatusCode_1.StatusCode.badRequest);
            }
        }
    }
}
exports.Response = Response;
