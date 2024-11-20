const offers = [
    { name: "10% off on EcoWear", requiredPoints: 20 },
    { name: "Free Reusable Bag", requiredPoints: 40 },
    { name: "15% off on Sustainable Shoes", requiredPoints: 100 },
    { name: "Eco-Friendly Notebook", requiredPoints: 50 },
    { name: "Free Bamboo Toothbrush", requiredPoints: 30 },
    { name: "Free Plantable Seed Pens Pack", requiredPoints: 70 },
    { name: "50% off on EcoHome Starter Kit", requiredPoints: 150 },
];

export const getOffers = (points: number) => {
    return offers.filter((offer) => offer.requiredPoints <= points);
};