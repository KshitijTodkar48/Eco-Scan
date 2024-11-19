import { useState, useRef } from 'react';

interface ImageUploaderProps {
  onImageSelect: (image: File | Blob) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  const handleCaptureClick = () => {
    setIsCameraActive(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
        alert('Unable to access camera. Please check your permissions.');
        setIsCameraActive(false);
      });
  };

  const handleTakePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const video = videoRef.current;

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (blob) {
            onImageSelect(blob);
          }
        });

        // Stop the video stream.
        const stream = video.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        setIsCameraActive(false);
      }
    }
  };

  const handleCancelCamera = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
    setIsCameraActive(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white border shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-green-700">Upload or Capture an Image</h2>
      <div className="flex flex-col gap-4 w-full">
        {!isCameraActive && (
          <>
            {/* Upload Button */}
            <label
              htmlFor="file-upload"
              className="w-full text-center py-2 px-4 bg-green-500 text-white font-medium rounded cursor-pointer hover:bg-green-600"
            >
              Upload Image
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            {/* Capture Button */}
            <button
              className="w-full py-2 px-4 bg-green-500 text-white font-medium rounded hover:bg-green-600"
              onClick={handleCaptureClick}
            >
              Capture from Camera
            </button>
          </>
        )}
        {isCameraActive && (
          <div className="flex flex-col items-center gap-4">
            <video ref={videoRef} className="w-full h-auto border border-gray-300 rounded-lg"></video>
            <div className="flex gap-4">
              <button
                className="py-2 px-4 bg-green-500 text-white font-medium rounded hover:bg-green-600"
                onClick={handleTakePhoto}
              >
                Take Photo
              </button>
              <button
                className="py-2 px-4 bg-red-500 text-white font-medium rounded hover:bg-red-600"
                onClick={handleCancelCamera}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
