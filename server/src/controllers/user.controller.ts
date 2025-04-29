import { Request, Response } from "express";
import { Response as SR } from "../utils/Response";
import { StatusCode } from "../utils/StatusCode";
import { AutRequest } from "../middleware/auth.middleware";
import userModel from "../models/user.model";
import Bcryptjs from "../utils/Bcryptjs";
import { JWT_SIGN } from "../utils/Jwt";
import { modelRegistry } from "../utils/modelRegistry";


export async function Register (req: Request, res: Response): Promise<any> {
    try {

        const { userName, password } = req.body;
        SR.IF(res, "All filelds are requird", [ userName, password ]);

        const user = await userModel.findOne({userName});
        if (user) {
            return SR.Error(res,"User already exist!",StatusCode.alreadyExists);
        };

        const hashPassword = await Bcryptjs.hash(password.trim());
        if (!hashPassword) {
            return SR.Error(res, "Password was not hased!", StatusCode.unexpected);
        }

        const createdUser = await userModel.create(
            {
                userName: userName.trim(),
                password: hashPassword

            }
        );
        if (!createdUser) {
            return SR.Error(res, "User not created", StatusCode.unexpected);
        }

        return SR.Success(
            res,
            "User Register successfully",
            StatusCode.created,
            {
                data: createdUser
            }
        );

    } catch (error) {
        console.log(error);
        return SR.Error(res, "Unexpected server error", StatusCode.unexpected)
    }
}

export async function Login (req: Request, res: Response): Promise<any> {
    try {

        const { userName, password } = req.body;
        if ( !userName || !password ) {
            return SR.IF(res, "All Fields are required", [ userName, password ]);
        };

        const user = await userModel.findOne({userName});
        if (!user) {
            return SR.Error(res, "User not exist!", StatusCode.alreadyExists)
        }

        const isPasswordCurrect = await Bcryptjs.compare( password.trim(), user?.password as string );
        if (!isPasswordCurrect) {
            return SR.Error(res, "You give wrong password!", StatusCode.invalid)
        }

        const jwtData = {
            id: user._id as string ,
            isAdmin: user.isAdmin as boolean
        };
        const sign = JWT_SIGN( jwtData );
        if (!sign) {
            return SR.Error(res, "Somthing Was hapent unwanted!", StatusCode.unexpected)
        }

        return SR.Success(
            res,
            "User login successfully",
            StatusCode.accepted,
            {token: sign},
            sign
        )

    } catch (error) {
        console.log(error)
        return SR.Error(res, "Unexpected server error", StatusCode.unexpected)
    }
}

export async function Logout (req: AutRequest, res: Response): Promise<any> {
    try {

        return SR.Success(
            res,
            "User logout successfully",
            StatusCode.accepted,
            {},
            "deleted"
        )

    } catch (error) {
        console.log(error)
        return SR.Error(res, "Unexpected server error", StatusCode.unexpected)
    }
}

export async function Profile (req: AutRequest, res: Response): Promise<any> {
    try {

        const user = req.user
        if (!user) {
            return SR.Error(res, "Unexpected user not founed!", StatusCode.invalid);
        }

        return SR.Success(
            res,
            "User logout successfully",
            StatusCode.accepted,
            user,
            ""
        )

    } catch (error) {
        console.log(error)
        return SR.Error(res, "Unexpected server error", StatusCode.unexpected)
    }
}

export async function AdminInfo (req: AutRequest, res: Response): Promise<any> {
    try {

       const modelName = req.params.modelName.toLowerCase();
        if (!modelName) {
            return SR.Error(res, `You must give a valid model name.`, StatusCode.badRequest)
        }
       const quary = req.query.id;

       if (!quary){
         const model = modelRegistry[modelName];

         if (!model) {
            return SR.Error(res, `Model "${modelName}" not found.`, StatusCode.badRequest)
         }

         try {
           const data = await model.find();
           return SR.Success(
            res,
            `Successfully get data of ${modelName} model`,
            StatusCode.accepted,
                {
                    data
                }
            )
         } catch (error) {
            return SR.Error(res, 'Server error while fetching data.', StatusCode.unexpected)
         }
       }else {
           const model = modelRegistry[modelName];

           if (!model) {
               return SR.Error(res, `Model "${modelName}" not found.`, StatusCode.notFound)
           }

           try {
               const data = await model.findById(quary).select(" -password ");
               return SR.Success(
                   res,
                   `Successfully get the data of ${modelName} model`,
                   StatusCode.accepted,
                   {
                       data
                   }
               )
           } catch (error) {
               return SR.Error(res, 'Server error while fetching data.', StatusCode.unexpected)
           }
       }

    } catch (error) {
        console.log(error)
        return SR.Error(res, "Unexpected server error", StatusCode.unexpected)
    }
}

export async  function  Update (req: AutRequest, res: Response): Promise<any> {
    try {
        const modelName = req.params.modelName.toLowerCase();
        if (!modelName) {
            return SR.Error(res, `You must give a valid model name!.`, StatusCode.badRequest);
        }
        const documentId = req.query.id;
        if (!documentId) {
            return SR.Error(res, `You must give a valid document id for update!.`, StatusCode.badRequest);
        }
        const { DataForUpdate } = req.body;
        if (!DataForUpdate) {
            return SR.Error(res, `You must give data for update!.`, StatusCode.notFound)
        }
        const model = modelRegistry[modelName];
        if (!model) {
            return SR.Error(res, `Model "${model}" not found.`, StatusCode.notFound)
        }

        const findDocument = await model.findOneAndUpdate(
            { _id: documentId },
            { DataForUpdate }
        );
        if (!findDocument){
            return SR.Error(res, `You must give a valid document id for update!.`, StatusCode.notFound);
        }


        return SR.Success(
            res,
            `Successfully get data of ${modelName} model`,
            StatusCode.accepted,
            {
                findDocument
            }
        )
    }catch (e) {
        console.log(e);
        return SR.Error(res, `Unexpected server error.`, StatusCode.unexpected)
    }
}

export async  function  DeleteDoc (req: AutRequest, res: Response): Promise<any> {
    try {
        const modelName = req.params.modelName.toLowerCase();
        if (!modelName) {
            return SR.Error(res, `You must give a valid model name!.`, StatusCode.badRequest);
        }
        const documentId = req.query.id;
        if (!documentId) {
            return SR.Error(res, `You must give a valid document id for delete!.`, StatusCode.badRequest);
        }

        const model = modelRegistry[modelName];
        if (!model) {
            return SR.Error(res, `Model "${model}" not found.`, StatusCode.notFound)
        }

        const documentDelete = await model.delete({_id: documentId});
        if (!documentDelete){
            return SR.Error(res, `You must give a valid document id for delete!.`, StatusCode.notFound);
        }

        return SR.Success(
            res,
            `Successfully delete data of ${modelName} model`,
            StatusCode.accepted,
            {
                documentDelete
            }
        )
    }catch (e) {
        console.log(e);
        return SR.Error(res, `Unexpected server error.`, StatusCode.unexpected)
    }
}

export async  function  Create (req: AutRequest, res: Response): Promise<any> {
    try {
        const modelName = req.params.modelName.toLowerCase();
        if (!modelName) {
            return SR.Error(res, `You must give a valid model name!.`, StatusCode.badRequest);
        }
        const { dataForCreateDoc } = req.body;
        if (!dataForCreateDoc) {
            return SR.Error(res, `You must give data for create data!.`, StatusCode.badRequest);
        }

        const model = modelRegistry[modelName];
        if (!model) {
            return SR.Error(res, `Model "${model}" not found.`, StatusCode.notFound)
        }

        const CreateDocument = await model.create(dataForCreateDoc);
        if (!CreateDocument){
            return SR.Error(res, `Somthing was porblem on the create data!.`, StatusCode.unexpected);
        }

        return SR.Success(
            res,
            `Successfully create the data of ${modelName} model`,
            StatusCode.accepted,
            {
                CreateDocument
            }
        )
    }catch (e) {
        console.log(e);
        return SR.Error(res, `Unexpected server error.`, StatusCode.unexpected)
    }
}