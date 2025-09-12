import expresss from "express";
import { Signup, Login, Logout, verifyEmail, forgotPassword } from "../controllers/authController.js";
const router = expresss.Router()

router.post("/signup",Signup);
router.post("/login", Login);
router.post("/logout",Logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password", forgotPassword);

export default router;  