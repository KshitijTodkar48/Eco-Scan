import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate() ;

  return (
    <div className="bg-green-100 h-[96vh] lg:h-[91vh] flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 text-center lg:text-left">
        {/* Headline and Subheading */}
        <div className="text-5xl my-4 font-extrabold text-green-800 sm:text-6xl">
          <div className="mb-2"> Scan Your Clothes, </div>
          <span className="text-green-600">Save the Planet!</span>
        </div>
        <p className="my-4 text-xl text-green-700 max-w-2xl mx-auto lg:mx-0">
          Discover the environmental impact of your wardrobe, earn eco-reward points, 
          and contribute to a sustainable future with every scan.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="bg-green-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-green-700"
            onClick={() => { navigate('/scan'); }}
          >
            Start Scanning
          </button>
          <button className="bg-white border border-green-600 text-green-600 px-8 py-4 text-lg rounded-lg hover:bg-green-100">
            Learn More
          </button>
        </div>

        {/* Additional Content */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-green-700">How It Works</h2>
          <ul className="mt-6 space-y-4 text-lg text-green-800">
            <li>📸 <strong>Upload or snap a picture</strong> of your clothing items.</li>
            <li>🌍 <strong>Get instant carbon scores</strong> for each item.</li>
            <li>🎁 <strong>Earn eco-reward points</strong> and redeem exciting offers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;