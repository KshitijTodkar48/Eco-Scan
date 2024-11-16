const offers = [
    { name: "10% off on EcoWear", requiredPoints: 10 },
    { name: "Free Reusable Bag", requiredPoints: 20 },
];

export const getOffers = (points: number) => {
    return offers.filter((offer) => offer.requiredPoints <= points);
};