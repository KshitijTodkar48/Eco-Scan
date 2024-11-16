import { Request, Response } from "express";

export const calculateScore = (req: Request, res: Response) => {
    const { items } = req.body; // items = [{ name: "T-Shirt", carbonScore: 20}, {...}]

    if (!Array.isArray(items)) {
        return res.status(400).json({ error: "Invalid items data" });
    }

    const totalCarbonScore = items.reduce((acc: number, item: any) => acc + (item.carbonScore || 0), 0);
    const ecoRewardPoints = Math.floor(totalCarbonScore / 2);

    res.json({ totalCarbonScore, ecoRewardPoints });
};