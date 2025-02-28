import express from "express";
const router = express.Router();

import * as PortfolioController from "../controller/PortfolioController.js";
import * as UsersController from "../controller/UsersController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";


// User [Before Login]
router.post("/Registration",UsersController.Registration)
router.post("/Login",UsersController.Login)



// Portfolio [After Login]
router.post("/CreatePortfolio", AuthMiddleware, PortfolioController.CreatePortfolio)
router.patch("/UpdatePortfolio", AuthMiddleware, PortfolioController.UpdatePortfolio)
router.get("/ReadPortfolio", AuthMiddleware, PortfolioController.ReadPortfolio)
router.delete("/DeletePortfolio/:id", AuthMiddleware, PortfolioController.DeletePortfolio)


export default router;