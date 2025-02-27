import mongoose from "mongoose";

// ================PortfolioSchema=======================================
const PortfolioSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        codelink: { type: String, required: true },
        livelink: { type: String, required: true },
        user_id: { type: mongoose.Schema.Types.ObjectId, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


const PortfolioModel = mongoose.model("portfolioModels", PortfolioSchema)
export default PortfolioModel