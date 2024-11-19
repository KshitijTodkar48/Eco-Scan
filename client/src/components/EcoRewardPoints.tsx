interface EcoRewardProps {
    totalCarbonScore: number, 
    ecoRewardPoints: number
};

export const EcoRewardPoints: React.FC<EcoRewardProps> = ({ totalCarbonScore, ecoRewardPoints }) => {
  return (
    <div className="flex flex-col items-center  w-[15rem] p-4 bg-white shadow rounded-lg mx-auto">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Your Eco-Savings</h2>
      <ul>
          <li className="mb-2">
            <p className="text-lg font-semibold text-gray-400">
                Total Carbon Score: <span className="text-gray-600"> {totalCarbonScore} </span>
            </p>
            <p className="text-lg font-semibold text-gray-400">
                Eco-Reward Points: <span className="text-gray-600"> {ecoRewardPoints} </span>
            </p>
          </li>
      </ul>
    </div>
  );
};
