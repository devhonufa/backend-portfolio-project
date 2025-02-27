import { TokenDecode } from "../utility/tokenUtility.js";

export default (req, res, next) => {
    let token = req.headers['token'];
    let decode = TokenDecode(token);


    //condition
    if (decode === null) {
        return res.status(401).json({ message: "Unauthorize" });

    } else {

        let email = decode.email;
        let user_id = decode.user_id

        // set the email, user_id in header

        req.headers.email = email;
        req.headers.user_id = user_id;



        next()
    }

}