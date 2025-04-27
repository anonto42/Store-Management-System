"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = Register;
exports.Login = Login;
exports.Logout = Logout;
exports.Profile = Profile;
exports.AdminInfo = AdminInfo;
exports.Update = Update;
exports.DeleteDoc = DeleteDoc;
exports.Create = Create;
const Response_1 = require("../utils/Response");
const StatusCode_1 = require("../utils/StatusCode");
const user_model_1 = __importDefault(require("../models/user.model"));
const Bcryptjs_1 = __importDefault(require("../utils/Bcryptjs"));
const Jwt_1 = require("../utils/Jwt");
const modelRegistry_1 = require("../utils/modelRegistry");
async function Register(req, res) {
    try {
        const { userName, password } = req.body;
        Response_1.Response.IF(res, "All filelds are requird", [userName, password]);
        const user = await user_model_1.default.findOne({ userName });
        if (user) {
            return Response_1.Response.Error(res, "User already exist!", StatusCode_1.StatusCode.alreadyExists);
        }
        ;
        const hashPassword = await Bcryptjs_1.default.hash(password.trim());
        if (!hashPassword) {
            return Response_1.Response.Error(res, "Password was not hased!", StatusCode_1.StatusCode.unexpected);
        }
        const createdUser = await user_model_1.default.create({
            userName: userName.trim(),
            password: hashPassword
        });
        if (!createdUser) {
            return Response_1.Response.Error(res, "User not created", StatusCode_1.StatusCode.unexpected);
        }
        return Response_1.Response.Success(res, "User Register successfully", StatusCode_1.StatusCode.created, {
            data: createdUser
        });
    }
    catch (error) {
        console.log(error);
        return Response_1.Response.Error(res, "Unexpected server error", StatusCode_1.StatusCode.unexpected);
    }
}
async function Login(req, res) {
    try {
        const { userName, password } = req.body;
        if (!userName || !password) {
            return Response_1.Response.IF(res, "All Fields are required", [userName, password]);
        }
        ;
        const user = await user_model_1.default.findOne({ userName });
        if (!user) {
            return Response_1.Response.Error(res, "User not exist!", StatusCode_1.StatusCode.alreadyExists);
        }
        const isPasswordCurrect = await Bcryptjs_1.default.compare(password.trim(), user?.password);
        if (!isPasswordCurrect) {
            return Response_1.Response.Error(res, "You give wrong password!", StatusCode_1.StatusCode.invalid);
        }
        const jwtData = {
            id: user._id,
            isAdmin: user.isAdmin
        };
        const sign = (0, Jwt_1.JWT_SIGN)(jwtData);
        if (!sign) {
            return Response_1.Response.Error(res, "Somthing Was hapent unwanted!", StatusCode_1.StatusCode.unexpected);
        }
        return Response_1.Response.Success(res, "User login successfully", StatusCode_1.StatusCode.accepted, {}, sign);
    }
    catch (error) {
        console.log(error);
        return Response_1.Response.Error(res, "Unexpected server error", StatusCode_1.StatusCode.unexpected);
    }
}
async function Logout(req, res) {
    try {
        return Response_1.Response.Success(res, "User logout successfully", StatusCode_1.StatusCode.accepted, {}, "deleted");
    }
    catch (error) {
        console.log(error);
        return Response_1.Response.Error(res, "Unexpected server error", StatusCode_1.StatusCode.unexpected);
    }
}
async function Profile(req, res) {
    try {
        const user = req.user;
        if (!user) {
            return Response_1.Response.Error(res, "Unexpected user not founed!", StatusCode_1.StatusCode.invalid);
        }
        return Response_1.Response.Success(res, "User logout successfully", StatusCode_1.StatusCode.accepted, user, "");
    }
    catch (error) {
        console.log(error);
        return Response_1.Response.Error(res, "Unexpected server error", StatusCode_1.StatusCode.unexpected);
    }
}
async function AdminInfo(req, res) {
    try {
        const modelName = req.params.modelName.toLowerCase();
        if (!modelName) {
            return Response_1.Response.Error(res, `You must give a valid model name.`, StatusCode_1.StatusCode.badRequest);
        }
        const quary = req.query.id;
        if (!quary) {
            const model = modelRegistry_1.modelRegistry[modelName];
            if (!model) {
                return Response_1.Response.Error(res, `Model "${modelName}" not found.`, StatusCode_1.StatusCode.badRequest);
            }
            try {
                const data = await model.find();
                return Response_1.Response.Success(res, `Successfully get data of ${modelName} model`, StatusCode_1.StatusCode.accepted, {
                    data
                });
            }
            catch (error) {
                return Response_1.Response.Error(res, 'Server error while fetching data.', StatusCode_1.StatusCode.unexpected);
            }
        }
        else {
            const model = modelRegistry_1.modelRegistry[modelName];
            if (!model) {
                return Response_1.Response.Error(res, `Model "${modelName}" not found.`, StatusCode_1.StatusCode.notFound);
            }
            try {
                const data = await model.findById(quary).select(" -password ");
                return Response_1.Response.Success(res, `Successfully get the data of ${modelName} model`, StatusCode_1.StatusCode.accepted, {
                    data
                });
            }
            catch (error) {
                return Response_1.Response.Error(res, 'Server error while fetching data.', StatusCode_1.StatusCode.unexpected);
            }
        }
    }
    catch (error) {
        console.log(error);
        return Response_1.Response.Error(res, "Unexpected server error", StatusCode_1.StatusCode.unexpected);
    }
}
async function Update(req, res) {
    try {
        const modelName = req.params.modelName.toLowerCase();
        if (!modelName) {
            return Response_1.Response.Error(res, `You must give a valid model name!.`, StatusCode_1.StatusCode.badRequest);
        }
        const documentId = req.query.id;
        if (!documentId) {
            return Response_1.Response.Error(res, `You must give a valid document id for update!.`, StatusCode_1.StatusCode.badRequest);
        }
        const { DataForUpdate } = req.body;
        if (!DataForUpdate) {
            return Response_1.Response.Error(res, `You must give data for update!.`, StatusCode_1.StatusCode.notFound);
        }
        const model = modelRegistry_1.modelRegistry[modelName];
        if (!model) {
            return Response_1.Response.Error(res, `Model "${model}" not found.`, StatusCode_1.StatusCode.notFound);
        }
        const findDocument = await model.findOneAndUpdate({ _id: documentId }, { DataForUpdate });
        if (!findDocument) {
            return Response_1.Response.Error(res, `You must give a valid document id for update!.`, StatusCode_1.StatusCode.notFound);
        }
        return Response_1.Response.Success(res, `Successfully get data of ${modelName} model`, StatusCode_1.StatusCode.accepted, {
            findDocument
        });
    }
    catch (e) {
        console.log(e);
        return Response_1.Response.Error(res, `Unexpected server error.`, StatusCode_1.StatusCode.unexpected);
    }
}
async function DeleteDoc(req, res) {
    try {
        const modelName = req.params.modelName.toLowerCase();
        if (!modelName) {
            return Response_1.Response.Error(res, `You must give a valid model name!.`, StatusCode_1.StatusCode.badRequest);
        }
        const documentId = req.query.id;
        if (!documentId) {
            return Response_1.Response.Error(res, `You must give a valid document id for delete!.`, StatusCode_1.StatusCode.badRequest);
        }
        const model = modelRegistry_1.modelRegistry[modelName];
        if (!model) {
            return Response_1.Response.Error(res, `Model "${model}" not found.`, StatusCode_1.StatusCode.notFound);
        }
        const documentDelete = await model.delete({ _id: documentId });
        if (!documentDelete) {
            return Response_1.Response.Error(res, `You must give a valid document id for delete!.`, StatusCode_1.StatusCode.notFound);
        }
        return Response_1.Response.Success(res, `Successfully delete data of ${modelName} model`, StatusCode_1.StatusCode.accepted, {
            documentDelete
        });
    }
    catch (e) {
        console.log(e);
        return Response_1.Response.Error(res, `Unexpected server error.`, StatusCode_1.StatusCode.unexpected);
    }
}
async function Create(req, res) {
    try {
        const modelName = req.params.modelName.toLowerCase();
        if (!modelName) {
            return Response_1.Response.Error(res, `You must give a valid model name!.`, StatusCode_1.StatusCode.badRequest);
        }
        const { dataForCreateDoc } = req.body;
        if (!dataForCreateDoc) {
            return Response_1.Response.Error(res, `You must give data for create data!.`, StatusCode_1.StatusCode.badRequest);
        }
        const model = modelRegistry_1.modelRegistry[modelName];
        if (!model) {
            return Response_1.Response.Error(res, `Model "${model}" not found.`, StatusCode_1.StatusCode.notFound);
        }
        const CreateDocument = await model.create(dataForCreateDoc);
        if (!CreateDocument) {
            return Response_1.Response.Error(res, `Somthing was porblem on the create data!.`, StatusCode_1.StatusCode.unexpected);
        }
        return Response_1.Response.Success(res, `Successfully delete data of ${modelName} model`, StatusCode_1.StatusCode.accepted, {
            CreateDocument
        });
    }
    catch (e) {
        console.log(e);
        return Response_1.Response.Error(res, `Unexpected server error.`, StatusCode_1.StatusCode.unexpected);
    }
}
