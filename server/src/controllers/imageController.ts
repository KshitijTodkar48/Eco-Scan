import { Request, Response } from "express";
// import { getCarbonScore } from "../models/carbonScoreModel";

export const analyzeImage = (req: Request, res: Response) => {
    if(!req.file) {
        return res.status(400).json({ error: "No file uploaded" }) ;
    }

    /* Image Recognition: Here we can use OpenAI’s GPT-4 Vision model or any open source available models.
       We can recognize the cloth, get its 'name', and use the 'getCarbonScore(name)' function to get the 
       carbon score of that cloth and return it. */
    
   /* Here we are not using any external API, so we are mocking the above behaviour. */
    const mockData = [
        { name: "T-shirt", carbonScore: 5 },
        { name: "Jeans", carbonScore: 10 },
        { name: "Sweater", carbonScore: 7 },
        { name: "Jacket", carbonScore: 15 },
        { name: "Socks", carbonScore: 2 },
        { name: "Shoes", carbonScore: 12 },
        { name: "Scarf", carbonScore: 4 },
        { name: "Hat", carbonScore: 3 },
    ];

    // Logic to randomly picking up 2 entries, and returning them in the response.
    const shuffledData = [...mockData].sort(() => Math.random() - 0.5); // Shuffle the array.
    const data = shuffledData.slice(0, 2); // Take the first 2 entries.

    res.json({ identifiedItems: data });
}