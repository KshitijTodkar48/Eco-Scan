import { Router } from "express";
import { getRedeemableOffers } from "../controllers/offerController";

const router = Router();
// @ts-ignore
router.get("/:points", getRedeemableOffers);

export default router;