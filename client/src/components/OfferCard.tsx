import Img from "../assets/Offers-Image.jpg" ;

interface OfferProps {
    name: string,
    requiredPoints: number;
}

export const OfferCard: React.FC<OfferProps> = ({ name, requiredPoints }) => {
    return (
        <div className="max-w-[300px] border shadow-md rounded-md flex flex-col justify-center items-center m-4 py-4 px-4 hover:bg-slate-100">
            <img src={Img} alt="offers" className="w-[250px] h-[250px] mb-2 rounded-md"/>
            <span className="text-lg font-semibold mt-1 mb-1"> {name} </span>
            <button className="bg-green-500 text-white px-4 py-2 mt-2 
            rounded-md cursor-pointer hover:bg-green-600 font-medium"> 
                Claim for {requiredPoints} points
            </button>
        </div>
    )
}