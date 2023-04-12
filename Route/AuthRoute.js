import express from "express"
import { login, ativeUser } from "../Controllers/Auth.js"


const router = express.Router();

router.post("/login", login);


export default router;