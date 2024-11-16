import { Request, Response } from "express";
// import { getCarbonScore } from "../models/carbonScoreModel";

export const analyzeImage = (req: Request, res: Response) => {
    if(!req.file) {
        return res.status(400).json({ error: "No file uploaded" }) ;
    }

    // Image Recognition: Here we can use OpenAI’s GPT-4 Vision model or any open source available models.
    // We can recognize the cloth, get its 'name', and use the 'getCarbonScore(name)' function 
    // to get the carbon score of that cloth and return it.

    const mockData = [
        { name: "T-shirt", carbonScore: 5 },
        { name: "Jeans", carbonScore: 10 },
    ];
    
    res.json({ identifiedItems: mockData }) ;
}