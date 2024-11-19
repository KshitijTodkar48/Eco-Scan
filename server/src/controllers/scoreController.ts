import { Request, Response } from "express";

export const calculateScore = (req: Request, res: Response) => {
    const { identifiedItems } = req.body; // identifiedItems = [{ name: "T-Shirt", carbonScore: 20}, {...}]

    if (!Array.isArray(identifiedItems)) {
        return res.status(400).json({ error: "Invalid items data" });
    }

    const totalCarbonScore = identifiedItems.reduce((acc: number, item: any) => acc + (item.carbonScore || 0), 0);
    const totalItems = identifiedItems.length;
    const maxPoints = 100;
    const weight = 10;

    // Inversely calculate eco-points
    const ecoRewardPoints = Math.max(0, maxPoints - Math.ceil((totalCarbonScore * weight) / totalItems));

    res.json({ totalCarbonScore, ecoRewardPoints });
};