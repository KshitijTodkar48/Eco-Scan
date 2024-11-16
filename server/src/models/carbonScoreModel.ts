const carbonScores: Record<string, number> = {
    "T-shirt": 5,
    "Jeans": 10,
    "Jacket": 15,
};

export const getCarbonScore = (item: string): number => {
    return carbonScores[item] || 0; // Default to 0 if item is not found
};