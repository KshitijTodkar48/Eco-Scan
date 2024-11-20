import axios from "axios";
import { useState, useEffect } from "react";
import { OfferCard } from "@/components/OfferCard";

interface OfferProps {
    name: string,
    requiredPoints: number
}

function OffersPage() {
    const [offers, setOffers] = useState<OfferProps[]>([]);
    const points = 80;

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/offers/${points}`);
                setOffers(response.data?.offers);
            } catch (error) {
                console.log("Error fetching offers.");
            }
        };

        fetchOffers();
    }, []);

    return (
        <div className="grid grid-cols-4 justify-items-center mx-20 mb-10">
            {offers?.map((offer, index) => 
                <OfferCard key={index} {...offer}/>
            )}
        </div>
    )
}

export default OffersPage;