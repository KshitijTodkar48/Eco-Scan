import { Link } from "react-router-dom";
import { ecoPointsAtom } from "@/states/atoms/ecoPointsAtom";
import { useRecoilValue } from "recoil";
import { useState } from "react";

export const Navbar = () => {
    const ecoPoints = useRecoilValue(ecoPointsAtom);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full border-b border-green-500 bg-green-200 relative z-50">
            <div className="flex justify-between items-center px-10 py-3">
                {/* Logo */}
                <div className="text-2xl md:text-4xl font-bold">Eco-Scan</div>

                {/* Hamburger Menu (Visible on small screens) */}
                <div
                    className="md:hidden cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-1 bg-green-700 mb-1"></div>
                    <div className="w-6 h-1 bg-green-700 mb-1"></div>
                    <div className="w-6 h-1 bg-green-700"></div>
                </div>

                {/* Links (Hidden on small screens) */}
                <div className="hidden md:flex items-center justify-between w-2/3 font-medium">
                    <Link to="/" className="text-lg md:text-xl">
                        Home
                    </Link>
                    <Link to="/scan" className="text-lg md:text-xl">
                        Scan
                    </Link>
                    <Link to="/offers" className="text-lg md:text-xl">
                        Offers
                    </Link>
                    <div className="text-sm md:text-lg text-white font-normal bg-green-700 py-2 px-4 rounded-md">
                        Eco-Reward Points: {ecoPoints}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-green-100 z-40 flex flex-col items-start px-5 py-5 space-y-5 font-medium">
                    <button
                        className="self-end text-xl text-green-700 font-bold"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ✕
                    </button>
                    <Link to="/" className="text-lg w-full" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </Link>
                    <Link to="/scan" className="text-lg w-full" onClick={() => setIsMenuOpen(false)}>
                        Scan
                    </Link>
                    <Link to="/offers" className="text-lg w-full" onClick={() => setIsMenuOpen(false)}>
                        Offers
                    </Link>
                    <div className="text-sm text-white font-normal bg-green-700 py-2 px-4 rounded-md">
                        Eco-Reward Points: {ecoPoints}
                    </div>
                </div>
            )}
        </div>
    );
};
