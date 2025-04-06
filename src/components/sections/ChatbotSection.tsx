
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Bot, HelpCircle, Star } from 'lucide-react';

const ChatbotSection = () => {
  return (
    <section id="chatbot" className="py-16 md:py-24 bg-tertiary-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary-light text-primary-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
              AI-Powered Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Chat with Our Asthma Assistant
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get instant answers to your asthma management questions, medication information, and personalized guidance anytime you need it.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-primary-light rounded-full">
                  <HelpCircle className="h-5 w-5 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Quick Answers</h3>
                  <p className="text-gray-600">Get information about asthma medications, symptoms, and management techniques.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-secondary-light rounded-full">
                  <Bot className="h-5 w-5 text-secondary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Personalized Guidance</h3>
                  <p className="text-gray-600">Receive customized recommendations based on your asthma history and triggers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-blue-50 rounded-full">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">24/7 Availability</h3>
                  <p className="text-gray-600">Access support whenever you need it, day or night.</p>
                </div>
              </div>
            </div>
            
            <Button className="cta-button-primary">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Chatting
            </Button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div className="bg-gray-50 rounded-t-lg p-3 flex items-center border-b border-gray-100">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-grow text-center text-sm font-medium text-gray-600">
                Asthma Assistant
              </div>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-gray-800">Hello! I'm your Asthma Assistant. How can I help you today?</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-primary-light rounded-lg rounded-tr-none p-3 max-w-[80%]">
                  <p className="text-gray-800">What should I do if I feel my asthma symptoms getting worse?</p>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-gray-800">
                    If your asthma symptoms are worsening, you should:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-1 text-sm">
                    <li>Use your rescue inhaler as prescribed</li>
                    <li>Sit upright and try to take slow, steady breaths</li>
                    <li>Remove yourself from any triggers if possible</li>
                    <li>If symptoms don't improve within 15-20 minutes or are severe, seek medical help immediately</li>
                  </ol>
                  <p className="text-gray-700 mt-2 text-sm">Would you like me to provide more specific guidance?</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-primary-light rounded-lg rounded-tr-none p-3 max-w-[80%]">
                  <p className="text-gray-800">Yes please. What are the signs that I should go to the emergency room?</p>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-gray-800">
                    You should seek emergency care if you experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                    <li>Severe shortness of breath where you can't speak in full sentences</li>
                    <li>No improvement after using your rescue inhaler</li>
                    <li>Bluish tint to your lips or fingernails</li>
                    <li>Extreme difficulty breathing, walking or talking</li>
                    <li>Chest pain or pressure</li>
                    <li>Confusion or drowsiness</li>
                  </ul>
                  <p className="text-gray-700 mt-2 text-sm">These are signs of a severe asthma attack requiring immediate medical attention.</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-100 p-3 flex items-center">
              <input
                type="text"
                className="flex-grow bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                placeholder="Type your question here..."
              />
              <Button size="sm" className="bg-primary-dark hover:bg-primary text-white">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-center mt-3 text-xs text-gray-500">
              <p>Powered by health information from medical professionals</p>
              <div className="flex items-center justify-center mt-1">
                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                <span className="ml-1">4.9 (352 ratings)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
