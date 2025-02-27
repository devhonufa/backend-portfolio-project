import PortfolioModel from "../model/portfolioModel.js";


// ================CreatePortfolio=======================================
export const CreatePortfolio = async (req, res) => {

    try {
        let user_id = req.headers['user_id'];
        let reqBody = req.body;
        reqBody.user_id = user_id;
        let data = await PortfolioModel.create(reqBody)
        return res.status(200).json({ status: "success", "Message": "CreatePortfolio Seccessfully", data:data })
    } catch (err) {
        return res.status(200).json({ status: "error", "message": "internal server error", err });
    }
    

}


// ================UpdatePortfolio=======================================
export const UpdatePortfolio=async(req,res)=>{
    try {

        let id = req.params.id;
        let status = req.params.status;
        let user_id = req.headers['user_id']
        let data = await PortfolioModel.updateOne({ "_id": id, "user_id": user_id }, {
            status: status
        })
        return res.status(200).json({ status: "success", "message": "UpdatePortfolio successfully", data: data })

    } catch (err) {
        return res.status(200).json({ status: "error", "message": "internal server error", err });
    }
}

// ================ReadPortfolio=======================================
export const ReadPortfolio = async (req, res) => {
    
    try {

        let status = req.params.status;
        let user_id = req.headers['user_id']
        let data = await PortfolioModel.find({ user_id: user_id, status: status })
        return res.json({ status: "success", data: data, "Message": "ReadPortfolio successfully" })
    }
    catch (err) {
        return res.json({ status: "fail", "Message": err.toString() })
    }
}

// ================DeletePortfolio=======================================
export const DeletePortfolio = async(req,res)=>{
    try {

        let id = req.params.id;
        let user_id = req.headers['user_id']
        let data = await TasksModel.deleteOne({ "_id": id, "user_id": user_id })
        return res.status(200).json({ status: "success", "Message": "DeletePortfolio successfully", data: data })
    } catch (err) {
        return res.status(200).json({ status: "error", "message": "internal server error", err });
    }
}
