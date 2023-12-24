import "dotenv/config.js";
import express from "express";
import {routes} from './Routes/products.js';
import {connectDB} from "./DB/connectDb.js"
import {errorHandler} from "./middleware/errorHandler.js";
import {notFound} from "./middleware/notFound.js";
import helmet from "helmet";
import rateLimiter from "express-rate-limit";
import jwtVerify from "./middleware/jwtVerify.js";
import authRoutes from "./Routes/authentication.js"

const app = express();
const port = 3000;

//middleware
app.use(express.json());

app.use('/api/v1/products', jwtVerify);
app.use('/api/v1/products',routes);
app.use("/api/v1/auth",authRoutes)
app.use(notFound);
app.use(errorHandler);
app.use(helmet());

app.set('trust proxy', 1);
app.use(rateLimiter({
    windowMs: 10 * 60 * 1000, 
    max: 100, 
    legacyHeaders: false
}));



const start = async(req,res) =>{
    try {
        await connectDB(process.env.MONGO_URL);
        console.log("Database is connected");
        app.listen(port, ()=>{console.log("Server is listening..")})
    } catch (error) {
       res.status(500).json(error);
    }
}
start()