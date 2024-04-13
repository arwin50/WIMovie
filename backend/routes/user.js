import express from "express";
const router = express.Router();
import * as userController from "../controllers/user.js";

router.route("/usermounted").get(userController.usermount);
router.route("/logout").get(userController.userlogout);

export default router;
