import { Request, Response } from "express";
import { getOffers } from "../models/offerModel";

export const getRedeemableOffers = (req: Request, res: Response) => {
    const points = parseInt(req.params.points, 10);

    if (isNaN(points)) {
        return res.status(400).json({ error: "Invalid points parameter" });
    }

    const offers = getOffers(points);
    res.json({ offers });
};