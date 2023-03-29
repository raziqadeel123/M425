import express from "express"

import { getUsers, saveUser , getUserById } from "../Controllers/user-Controller.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", saveUser );



export default router;