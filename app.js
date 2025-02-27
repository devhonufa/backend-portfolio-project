
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from "helmet";
import mongoose from "mongoose";
import { DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE, WEB_CACHE } from "./src/config/config.js";

import router from "./src/routes/api.js";

const app = express();

// App Use Default Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet())

// App Use Limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER })
app.use(limiter)


// Cache
app.set('etag', WEB_CACHE)

// Create a mongoDB Atlas Account AND GET Database Connection String

mongoose.connect(DATABASE, { autoIndex: true }).then(() => {
    console.log("Database connected successfully")
})
    .catch((error) => {
        console.error("Database connection error", error)

    })


app.use("/api", router)

export default app; 

