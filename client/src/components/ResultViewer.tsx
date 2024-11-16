interface ResultsViewerProps {
    results : {
        identifiedItems: {
            name: string,
            carbonScore: number,
        }[]
    }
};

export const ResultsViewer: React.FC<ResultsViewerProps> = ({ results }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-green-700 mb-4">Scan Results</h2>
      <ul>
        {results.identifiedItems?.map((item, index) => (
          <li key={index} className="mb-2">
            <p>Name: {item.name}</p>
            <p>Carbon Score: {item.carbonScore} kg CO₂</p>
          </li>
        ))}
      </ul>
    </div>
  );
};