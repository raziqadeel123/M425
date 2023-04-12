import userController from "../Controllers/user-Controller.js"
import argon2 from "argon2";


/** function for login**/
export const login = async (req, res) => {
    const user = await userController.findOne({
      where: {
        email: req.body.email,
      },
    });
  
    if (!user) return res.status(400).json({ message: "User not Found" });
    const match = await argon2.verify(user.password, req.body.password);
    if (!match) return res.status(400).json({ message: "wrong Password" });
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    const role = user.role;
    res.status(200).json({ uuid, name, email, role });
  };


  export const ativeUser = async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "please login to your accont" });
    }
    const user = await userController.findOne({
      attributes: ["uuid", "name", "email", "role"],
      where: {
        uuid: req.session.userId,
      },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  };
  