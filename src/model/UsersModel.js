import mongoose from "mongoose";

// ================userSchema=======================================
const userSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        moblie: { type: String, required: true },
        password: { type: String, required: true },
        otp: { type: String, default: 0 },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const UsersModel= mongoose.model("users",userSchema)
export default UsersModel