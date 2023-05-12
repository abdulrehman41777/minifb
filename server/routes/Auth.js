import express from "express";
import AuthSchema from "../models/AuthSchema.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const findUser = await AuthSchema.findOne({ email: req.body.email });

    if (findUser) {
      res.status(403).json({ message: "Email Already Exists" });
    } else {
      const { name, email, password } = req.body;

      const createUser = new AuthSchema({
        name,
        email,
        password,
      });

      const saveUser = await createUser.save();

      res.status(200).json({ message: "User Has been created", saveUser });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const findUser = await AuthSchema.findOne({ email: req.body.email });

    if (!findUser) {
      res.status(404).json({ message: "User not found" });
    } else {
      if (findUser.password === req.body.password) {
        const token = await jwt.sign(
          { email: req.body.email },
          process.env.JWT_SECRET_KEY
        );
        res
          .status(200)
          .json({ token: token, message: "Logged In Successfully" });
      } else {
        res.status(403).json({ message: "Invalid Credentials" });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
