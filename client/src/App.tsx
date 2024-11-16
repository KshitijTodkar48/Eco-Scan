import './App.css'
import { useState } from 'react';
import { ImageUploader } from './components/ImageUploader'
import { Navbar } from './components/Navbar'
import { ResultsViewer } from './components/ResultViewer';
import axios from 'axios';

function App() { 
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [results, setResults] = useState(null); // Store API results.

  const handleImageSelect = async (image: File | Blob) => {
      setSelectedImage(image);
      console.log('Selected Image:', image);

      // Send image to backend
      const formData = new FormData();
      formData.append('image', image);

      try {
          const response = await axios.post('http://localhost:3000/api/images/analyze', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          
          setResults(response.data); // Save results from the backend.
          console.log('API Response:', response.data);
      } catch (error) {
          console.error('Error uploading image:', error);
      }
  };

  return (
    <div className="mb-5">
        <Navbar />
        <div className="mt-6">
          <ImageUploader onImageSelect={handleImageSelect} />
        </div>
        {
           results && <ResultsViewer results={results} />
        }
    </div>
  )
}

export default App
