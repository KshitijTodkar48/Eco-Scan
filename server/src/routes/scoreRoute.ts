import { Router } from "express";
import { calculateScore } from "../controllers/scoreController";

const router = Router();

// @ts-ignore
router.post("/calculate", calculateScore);

export default router;