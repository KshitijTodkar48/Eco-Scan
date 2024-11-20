interface ResultsViewerProps {
  results: {
    identifiedItems: {
      name: string;
      carbonScore: number;
    }[];
  };
}

export const ResultsViewer: React.FC<ResultsViewerProps> = ({ results }) => {
  return (
    <div className="flex flex-col items-center  w-[15rem] p-4 bg-white border shadow-md rounded-lg mx-auto">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Scan Results</h2>
      <ul>
        {results.identifiedItems?.map((item, index) => (
          <li key={index} className="mb-2">
            <p className="text-lg font-semibold text-gray-400">
              Item: <span className="text-gray-600"> {item.name} </span>
            </p>
            <p className="text-lg font-semibold text-gray-400">
              Carbon Score: <span className="text-gray-600"> {item.carbonScore} kg CO₂ </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
