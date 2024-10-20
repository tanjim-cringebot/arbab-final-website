import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../public/Arbab Loading Animation.json'; // Replace with your JSON file path

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Lottie animationData={animationData} loop={true} style={{ width: '800px', height: '800px' }} />
    </div>
  );
};

export default LoadingScreen;
