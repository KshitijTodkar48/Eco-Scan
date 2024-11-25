import { Request, Response } from "express";
import axios from "axios";

const OPENAI_ENDPOINT = process.env.OPENAI_ENDPOINT as string;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;

// Mock carbon score data.
const carbonScores: { [key: string]: number } = {
  "T-shirt": 5,
  "Pants": 10,
  "Shorts": 7,
  "Jacket": 15,
  "Socks": 2,
  "Shoes": 12,
  "Scarf": 4,
  "Hat": 3,
};

export const analyzeImage = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  try {
    // Send the image to OpenAI API.
    const imageBase64 = req.file.buffer.toString("base64");
    const response = await axios.post(
      OPENAI_ENDPOINT,
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "Identify all clothing items in this image. Respond in the format: identifiedItems = ['Item1', 'Item2']" },
              { type: "image_url", image_url: `data:image/jpeg;base64,${imageBase64}` },
            ],
          },
        ],
      },
      {
        headers: {
          "api-key": OPENAI_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the response content.
    const apiResponse = response.data.choices[0].message.content;

    // Extract identified items using regex.
    let identifiedItems = [];
    const identifiedItemsMatch = apiResponse.match(/identifiedItems\s*=\s*\[(.*?)\]/);

    if (identifiedItemsMatch) {
      identifiedItems = identifiedItemsMatch[1]
        .split(",")
        .map((item:string) => item.trim().replace(/['"\[\]]+/g, ""));
    }

    // Map the items to include carbon scores.
    const itemsWithCarbonScores = identifiedItems.map((item:string) => ({
      name: item,
      carbonScore: carbonScores[item] || 10, // Default score is 10.
    }));

    // Handle the case where no items are identified.
    if (itemsWithCarbonScores.length === 0) {
      return res.json({ message: "No clothing items identified.", identifiedItems: [] });
    }

    res.json({ identifiedItems: itemsWithCarbonScores });
  } catch (error) {
    console.error("Error analyzing image:", error);
    res.status(500).json({ error: "Failed to analyze the image" });
  }
};
