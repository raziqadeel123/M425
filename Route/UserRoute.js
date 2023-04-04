import express from "express"

import { getUsers, saveUser , getUserById , updateUserById , deleteUser } from "../Controllers/user-Controller.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", saveUser );
router.patch("/users/:id", updateUserById);
router.delete("/users/:id", deleteUser)




export default router;