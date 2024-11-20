import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="flex w-full justify-between items-center border-green-500 px-10 py-4 bg-green-200">
            <div className="text-4xl w-1/4 font-semibold"> Eco-Scan </div>
            <div className="w-2/3 flex items-center justify-between font-medium">
                <Link to="/" className="text-2xl"> 
                   Home
                </Link>

                <Link to="/offers" className="text-2xl"> 
                   Offers
                </Link>

                <div className="text-lg text-white bg-green-700 py-2 px-5 rounded-md">
                    Eco-Reward Points: 100
                </div>
            </div>
        </div>
    );
}