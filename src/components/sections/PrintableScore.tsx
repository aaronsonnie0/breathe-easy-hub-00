
import React from 'react';

interface PrintableScoreProps {
  score: number;
  maxScore: number;
  category: string;
  recommendation: string;
  disclaimer?: string;
}

const PrintableScore: React.FC<PrintableScoreProps> = ({ score, maxScore, category, recommendation, disclaimer }) => {
  return (
    <div className="print-only hidden">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Asthma Control Assessment Results</h1>
        
        <div className="border rounded-lg p-6 mb-6">
          <div className="text-xl mb-4">
            Score: {score} out of {maxScore}
          </div>
          <div className="text-lg font-semibold mb-4">
            Category: {category}
          </div>
          <p className="text-gray-700 mb-6">{recommendation}</p>
        </div>
        
        <div className="border-t pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Doctor Contact Information</h2>
          <div className="space-y-2 mb-6">
            <p>📞 Contact Numbers:</p>
            <ul className="list-none pl-4">
              <li>+91 422 350 0000</li>
              <li>+91 422 450 0000</li>
              <li>+91 7970 108 108</li>
            </ul>
            
            <p>📍 Address:</p>
            <p>395, Sarojini Naidu Rd,<br />
            New Siddhapudur, Coimbatore,<br />
            Tamil Nadu 641044</p>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 mt-8 border-t pt-6">
          <p className="mb-2">
            Assessment Date: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            {disclaimer || "This assessment is a tool to help monitor your asthma control. It does not replace professional medical advice. Please consult with your healthcare provider for medical decisions."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintableScore;
