import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, AlertTriangle, Info, Printer, Download, Phone } from 'lucide-react';
import { generatePDF } from '@/lib/pdf';
import { scroller } from 'react-scroll';
import PrintableScore from './PrintableScore';

const questions = [
  {
    id: 'q1',
    question: 'In the past 4 weeks, how often did your asthma symptoms (wheezing, coughing, shortness of breath, chest tightness) wake you up at night or earlier than usual in the morning?',
    options: [
      { value: 4, text: 'Not at all' },
      { value: 3, text: '1-2 times' },
      { value: 2, text: '3-4 times' },
      { value: 1, text: '5+ times' },
      { value: 0, text: 'Several times per week' },
    ]
  },
  {
    id: 'q2',
    question: 'During the past 4 weeks, how often have you used your rescue inhaler or nebulizer medication?',
    options: [
      { value: 4, text: 'Not at all' },
      { value: 3, text: '1-2 times per week' },
      { value: 2, text: '3-6 times per week' },
      { value: 1, text: 'At least once per day' },
      { value: 0, text: 'Several times per day' },
    ]
  },
  {
    id: 'q3',
    question: 'How would you rate your asthma control during the past 4 weeks?',
    options: [
      { value: 4, text: 'Completely controlled' },
      { value: 3, text: 'Well controlled' },
      { value: 2, text: 'Somewhat controlled' },
      { value: 1, text: 'Poorly controlled' },
      { value: 0, text: 'Not controlled at all' },
    ]
  },
  {
    id: 'q4',
    question: 'During the past 4 weeks, how often have asthma symptoms limited your activities?',
    options: [
      { value: 4, text: 'Not at all' },
      { value: 3, text: 'Rarely' },
      { value: 2, text: 'Sometimes' },
      { value: 1, text: 'Often' },
      { value: 0, text: 'All the time' },
    ]
  },
  {
    id: 'q5',
    question: 'How often did you experience shortness of breath in the past 4 weeks?',
    options: [
      { value: 4, text: 'Not at all' },
      { value: 3, text: 'Once or twice' },
      { value: 2, text: 'Weekly' },
      { value: 1, text: 'Most days' },
      { value: 0, text: 'Daily' },
    ]
  },
];

const ScoreSection = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  
  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };
  
  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach(question => {
      if (answers[question.id] !== undefined) {
        totalScore += answers[question.id];
      }
    });
    return totalScore;
  };
  
  const getResultMessage = () => {
    const score = calculateScore();
    const maxScore = questions.length * 4;
    
    if (Object.keys(answers).length < questions.length) {
      return {
        icon: <Info className="w-8 h-8 text-blue-500" />,
        title: 'Incomplete Assessment',
        message: 'Please answer all questions to get your results.',
        colorClass: 'bg-blue-50 border-blue-200 text-blue-800',
      };
    }
    
    if (score >= maxScore * 0.8) {
      return {
        icon: <CheckCircle className="w-8 h-8 text-green-500" />,
        title: 'Good Asthma Control',
        message: 'Your asthma appears to be well controlled. Keep up your current management plan.',
        colorClass: 'bg-green-50 border-green-200 text-green-800',
      };
    }
    
    if (score >= maxScore * 0.6) {
      return {
        icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
        title: 'Moderate Asthma Control',
        message: 'Your asthma is partially controlled. Consider discussing adjustments to your management plan with your healthcare provider.',
        colorClass: 'bg-amber-50 border-amber-200 text-amber-800',
      };
    }
    
    return {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: 'Poor Asthma Control',
      message: 'Your asthma appears to be poorly controlled. Please consult with your healthcare provider as soon as possible.',
      colorClass: 'bg-red-50 border-red-200 text-red-800',
    };
  };
  
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const answersArray = questions.map((q) => ({
      question: q.question,
      answer: q.options.find(opt => opt.value === answers[q.id])?.text || 'Not answered'
    }));
    
    generatePDF({
      score: calculateScore(),
      maxScore: questions.length * 4,
      category: result.title,
      recommendation: result.message,
      answers: answersArray
    });
  };
  
  const result = getResultMessage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
    window.location.hash = 'score-results';
  };
  
  const resetForm = () => {
    setAnswers({});
    setShowResult(false);
  };
  
  return (
    <section id="score" className="py-16 md:py-24 bg-tertiary-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Asthma Control Assessment
            </h2>
            <p className="text-lg text-gray-600">
              Answer these 5 questions to evaluate how well your asthma is controlled.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            {!showResult ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {questions.map((q, index) => (
                  <div key={q.id} className="border-b border-gray-100 pb-6 last:border-none">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      {index + 1}. {q.question}
                    </h3>
                    <div className="space-y-2">
                      {q.options.map((option) => (
                        <label 
                          key={option.value} 
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={option.value}
                            checked={answers[q.id] === option.value}
                            onChange={() => handleAnswerChange(q.id, option.value)}
                            className="form-radio h-5 w-5 text-primary-dark"
                            required
                          />
                          <span className="text-gray-700">{option.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <Button 
                    type="submit"
                    className="w-full cta-button-primary"
                  >
                    Calculate My Score
                  </Button>
                </div>
              </form>
            ) : (
              <div id="score-results" className="text-center">
                <div className={`p-6 rounded-lg my-6 ${result.colorClass}`}>
                  <div className="flex justify-center mb-4">
                    {result.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                  <p className="mb-4">{result.message}</p>
                  <div className="font-semibold">
                    Your Score: {calculateScore()} out of {questions.length * 4}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Remember that this assessment is a tool to help you monitor your asthma control, but it does not replace professional medical advice.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button 
                    onClick={handlePrint}
                    className="cta-button-primary"
                  >
                    <Printer className="mr-2" size={20} />
                    Print Results
                  </Button>

                  <Button 
                    onClick={handleDownloadPDF}
                    className="cta-button-primary"
                  >
                    <Download className="mr-2" size={20} />
                    Download Results
                  </Button>

                  <Button 
                    onClick={() => scroller.scrollTo('specialist-section', {
                      duration: 800,
                      smooth: true,
                      offset: -100
                    })}
                    className="cta-button-primary"
                  >
                    <Phone className="mr-2" size={20} />
                    Consult a Specialist
                  </Button>

                  <Button 
                    onClick={resetForm}
                    variant="outline" 
                  >
                    Take Assessment Again
                  </Button>
                </div>

                <PrintableScore 
                  score={calculateScore()}
                  maxScore={questions.length * 4}
                  category={result.title}
                  recommendation={result.message}
                />
              </div>
            )}
          </div>
        </div>

        {showResult && (
          <div id="specialist-section" className="max-w-3xl mx-auto mt-16">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Consult a Specialist
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    Contact Numbers
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      +91 422 350 0000
                    </li>
                    <li className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      +91 422 450 0000
                    </li>
                    <li className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      +91 7970 108 108
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    Address
                  </h3>
                  <address className="text-gray-600 not-italic">
                    395, Sarojini Naidu Rd,<br />
                    New Siddhapudur, Coimbatore,<br />
                    Tamil Nadu 641044
                  </address>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="tel:+914223500000"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScoreSection;
