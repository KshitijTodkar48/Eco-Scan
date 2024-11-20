const offers = [
    { name: "10% off on EcoWear", requiredPoints: 10 },
    { name: "Free Reusable Bag", requiredPoints: 20 },
    { name: "15% off on Sustainable Shoes", requiredPoints: 25 },
    { name: "Eco-Friendly Notebook", requiredPoints: 30 },
    { name: "Free Bamboo Toothbrush", requiredPoints: 40 },
    { name: "Free Plantable Seed Pens Pack", requiredPoints: 60 },
    { name: "50% off on EcoHome Starter Kit", requiredPoints: 80 },
];

export const getOffers = (points: number) => {
    return offers.filter((offer) => offer.requiredPoints <= points);
};