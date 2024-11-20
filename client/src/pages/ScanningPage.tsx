import { useState } from 'react';
import { ImageUploader } from '../components/ImageUploader';
import { ResultsViewer } from '../components/ResultViewer';
import axios from 'axios';
import { EcoRewardPoints } from '../components/EcoRewardPoints';
import { useSetRecoilState } from 'recoil';
import { ecoPointsAtom } from '@/states/atoms/ecoPointsAtom';

function ScanningPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [results, setResults] = useState<any>(null);
  const [phase, setPhase] = useState<'initial' | 'preview' | 'result' | 'eco-score'>('initial'); // Track UI state.
  const [ecoScore, setEcoScore] = useState<any>(null);
  const setEcoPoints = useSetRecoilState(ecoPointsAtom);

  const handleImageSelect = async (image: File | Blob) => {
    setSelectedImage(image);
    setPhase('preview');

    // Send image to backend
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/images/analyze`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setResults(response.data); // Save results from the backend.
      setPhase('result');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setResults(null);
    setPhase('initial');
  };

  const addEcoPoints = (points:number) => {
    setEcoPoints((prevPoints) => prevPoints + points);
  };

  const handleCalculateEcoReward = async () => {
    if(!results) return ;
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/scores/calculate`, results) ;
        const calculatedEcoScore = response.data;
        setEcoScore(calculatedEcoScore)
        setPhase('eco-score');
        addEcoPoints(calculatedEcoScore?.ecoRewardPoints || 0);
    } catch (error) {
        console.error('Error getting score:', error);
    }
  }

  return (
    <div className="py-10 min-h-[92vh] bg-green-100">
      <div className="mx-10">
        {phase === 'initial' && <ImageUploader onImageSelect={handleImageSelect} />}
        {phase === 'preview' && (
          <div className="flex flex-col items-center gap-4">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="h-auto lg:max-w-[25%] border border-gray-300 rounded-lg"
            />
            <p className="text-gray-600">Processing image...</p>
          </div>
        )}

        {phase === 'result' && 
          <div className="flex flex-col items-center gap-4">   
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="min-h-[18rem] h-auto lg:max-w-[25%] border border-gray-300 rounded-lg"
            />
            <ResultsViewer results={results} />
          </div>
        }

        {phase === 'eco-score' && 
          <div className="flex flex-col items-center gap-4">   
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="min-h-[18rem] h-auto lg:max-w-[25%] border border-gray-300 rounded-lg"
            />
            <EcoRewardPoints {...ecoScore} />
          </div>
        }
      </div>
      {(phase === 'preview' || phase === 'result' || phase === 'eco-score') && (
        <div className="mt-4 text-center">
          <button
            className="m-2 py-2 px-4 bg-red-500 text-white font-medium rounded hover:bg-red-600"
            onClick={handleReset}
          >
            Reset
          </button>

          {
              phase !== 'eco-score' && phase !== 'preview' ? (
                <button
                className="m-2 py-2 px-4 bg-green-500 text-white font-medium rounded hover:bg-green-600"
                onClick={handleCalculateEcoReward}
              >
                Get Eco-Reward Points
              </button>
              ) : (
                <> </>
              )
          }
        </div>
      )}
    </div>
  );
}

export default ScanningPage;