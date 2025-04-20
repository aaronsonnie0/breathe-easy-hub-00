
import React from 'react';

interface PrintableScoreProps {
  title: string;
  score: number;
  maxScore: number;
  message: string;
}

const PrintableScore: React.FC<PrintableScoreProps> = ({ title, score, maxScore, message }) => {
  return (
    <div className="print-only hidden">
      <div className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Asthma Control Assessment Results</h1>
        
        <div className="border rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div className="text-xl mb-4">
            Score: {score} out of {maxScore}
          </div>
          <p className="text-gray-700 mb-6">{message}</p>
        </div>
        
        <div className="text-sm text-gray-600 mt-8">
          <p className="mb-2">
            Assessment Date: {new Date().toLocaleDateString()}
          </p>
          <p>
            Disclaimer: This assessment is a tool to help monitor your asthma control.
            It does not replace professional medical advice. Please consult with your
            healthcare provider for medical decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintableScore;
