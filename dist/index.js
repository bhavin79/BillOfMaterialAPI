"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config.js");
const express_1 = __importDefault(require("express"));
const products_js_1 = require("./Routes/products.js");
const connectDb_js_1 = require("./DB/connectDb.js");
const errorHandler_js_1 = require("./middleware/errorHandler.js");
const notFound_js_1 = require("./middleware/notFound.js");
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const jwtVerify_js_1 = __importDefault(require("./middleware/jwtVerify.js"));
const authentication_js_1 = __importDefault(require("./Routes/authentication.js"));
const app = (0, express_1.default)();
const port = 3000;
//middleware
app.use(express_1.default.json());
app.use('/api/v1/products', jwtVerify_js_1.default);
app.use('/api/v1/products', products_js_1.routes);
app.use("/api/v1/auth", authentication_js_1.default);
app.use(notFound_js_1.notFound);
app.use(errorHandler_js_1.errorHandler);
app.use((0, helmet_1.default)());
app.set('trust proxy', 1);
app.use((0, express_rate_limit_1.default)({
    windowMs: 10 * 60 * 1000,
    max: 100,
    legacyHeaders: false
}));
const start = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDb_js_1.connectDB)(process.env.MONGO_URL);
        console.log("Database is connected");
        app.listen(port, () => { console.log("Server is listening.."); });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
start();
