import { Router } from "express";
import multer from "multer";
import { analyzeImage } from "../controllers/imageController";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// @ts-ignore
router.post("/analyze", upload.single("image"), analyzeImage);

export default router;