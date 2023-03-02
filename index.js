import "dotenv/config.js";
import express from "express";
import {routes} from './Routes/products.js';
import {connectDB} from "./DB/connectDb.js"
import {errorHandler} from "./middleware/errorHandler.js";
import {notFound} from "./middleware/notFound.js";
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.json({msg: "Hello world"});
})
//middleware
app.use(express.json());

app.use('/api/v1/products', routes);
app.use(notFound);
app.use(errorHandler);

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