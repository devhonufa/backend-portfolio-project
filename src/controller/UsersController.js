import UsersModel from "../model/UsersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";



// ================Registration=======================================
export const Registration = async (req, res) => {
    
    try {

        let reqBody = req.body
        let result = await UsersModel.create(reqBody)

        return res.status(200).json({ status: "success", "Message": "Registration", result })
    }
    catch (err) {
        return res.status(200).json({ status: "error", "message": "internal server error", err });
    }

}

// ================Login=======================================
export const Login = async (req, res) => {
    try {
        let reqBody = req.body
        let data = await UsersModel.findOne(reqBody)

        //condition
        if (data === null) {
            return res.status(200).json({ status: "error", Message: "User not found" })
           
        }


        // ================token=======================================
        let token = TokenEncode(data['email'], data['_id']);

        return res.status(200).json({ status: "success", "message": "Login", Token: token });
    }
    
    catch (err) {
        return res.status(200).json({ status: "error", "message": "internal server error", err });
    }
  
}

