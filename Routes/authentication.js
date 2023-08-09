import express from "express";
const routes = express.Router();

import  {postLogin, postSignup} from "../Controllers/authentication.js"
routes.route("/login").post(postLogin);
routes.route("/signup").post(postSignup);

export default routes;