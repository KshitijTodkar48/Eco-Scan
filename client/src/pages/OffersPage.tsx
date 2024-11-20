import axios from "axios";
import { useState, useEffect } from "react";
import { OfferCard } from "@/components/OfferCard";
import { ecoPointsAtom } from "@/states/atoms/ecoPointsAtom";
import { useRecoilValue } from "recoil";

interface OfferProps {
    name: string;
    requiredPoints: number;
}

function OffersPage() {
    const [offers, setOffers] = useState<OfferProps[]>([]);
    const ecoPoints = useRecoilValue(ecoPointsAtom);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/offers/${ecoPoints}`);
                setOffers(response.data?.offers);
            } catch (error) {
                console.error("Error fetching offers.");
            }
        };

        fetchOffers();
    }, []);

    if (offers.length === 0) {
        return (
            <div className="h-[80vh] flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-2 px-5 text-center">
                    <span className="text-2xl md:text-3xl text-gray-400 font-bold">
                        No offers available!
                    </span>
                    <span className="text-lg md:text-xl font-semibold text-green-500">
                        Earn more eco-points to get exciting offers.
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 px-5 md:px-20 py-3 lg:py-10">
            {offers?.map((offer, index) => (
                <OfferCard key={index} {...offer} />
            ))}
        </div>
    );
}

export default OffersPage;