import expresss from "express";
import { Signup, Login, LogOut, verifyEmail } from "../controllers/authController.js";
const router = expresss.Router()

router.post("/signup",Signup);
router.post("/login", Login);
router.post("/logout",LogOut);

router.post("/verfiy-email", verifyEmail);

export default router;  