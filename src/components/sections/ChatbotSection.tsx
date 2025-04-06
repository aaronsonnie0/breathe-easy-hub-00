
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Bot, HelpCircle, Star, Send, Mic, AlertCircle } from 'lucide-react';

// Message type definition
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m your Asthma Assistant. How can I help you today?',
    sender: 'bot',
    timestamp: new Date(),
  }
];

const ChatbotSection = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate sending a message to Gemini API
  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Add typing indicator
    const typingIndicatorId = 'typing-' + Date.now();
    setMessages(prev => [...prev, {
      id: typingIndicatorId,
      text: '',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    }]);

    // Simulate API call - In a real implementation, this would be a secure backend call
    setTimeout(() => {
      // Remove typing indicator
      setMessages(prev => prev.filter(msg => msg.id !== typingIndicatorId));
      
      // Add bot response
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getSimulatedResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  // Simulate responses for demo purposes
  const getSimulatedResponse = (query: string): string => {
    const lowercaseQuery = query.toLowerCase();
    
    if (lowercaseQuery.includes('trigger') || lowercaseQuery.includes('cause')) {
      return "Common asthma triggers include allergens (pollen, dust mites, pet dander), irritants (smoke, pollution), respiratory infections, cold air, exercise, stress, and certain medications. Identifying your personal triggers is important for managing your asthma effectively.";
    } else if (lowercaseQuery.includes('medication') || lowercaseQuery.includes('inhaler')) {
      return "Asthma medications fall into two main categories: quick-relief (rescue) medications like albuterol that work fast to relieve symptoms, and long-term control medications like inhaled corticosteroids that reduce airway inflammation over time. Always take your medications as prescribed by your doctor.";
    } else if (lowercaseQuery.includes('emergency') || lowercaseQuery.includes('attack')) {
      return "If you're experiencing a severe asthma attack (severe shortness of breath, can't speak in full sentences, blue lips or fingernails), use your rescue inhaler immediately and seek emergency medical help. Don't wait to see if symptoms improve on their own.";
    } else if (lowercaseQuery.includes('exercise') || lowercaseQuery.includes('activity')) {
      return "Many people with asthma can exercise safely. Using a rescue inhaler 15-20 minutes before exercise can help prevent symptoms. Warm up gradually, avoid cold air if possible, and choose activities with lower asthma risks like swimming or walking. Always have your rescue medication nearby.";
    } else {
      return "I'm here to help with asthma management questions. You can ask me about triggers, medications, emergency procedures, lifestyle adjustments, or anything else related to asthma care. What specific information would you like to know?";
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  // Handle pressing Enter key to send message
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleVoiceInput = () => {
    // Voice input functionality would be implemented here
    // This is just a placeholder that displays a message
    alert("Voice input is not implemented in this demo version");
  };

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
                Asthma Assistant – Powered by Gemini AI
              </div>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.sender === 'user' 
                        ? 'bg-primary-light rounded-tr-none' 
                        : 'bg-gray-100 rounded-tl-none'
                    }`}
                  >
                    {message.isTyping ? (
                      <div className="flex space-x-1 items-center px-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    ) : (
                      <p className="text-gray-800">{message.text}</p>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSubmit} className="border-t border-gray-100 p-3 flex items-center">
              <input
                ref={inputRef}
                type="text"
                className="flex-grow bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent"
                placeholder="Ask me anything about asthma, triggers, medications, or emergency tips..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="sm" 
                className="bg-primary-dark hover:bg-primary text-white mr-1"
                disabled={isLoading || !inputText.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
              <Button 
                type="button" 
                size="sm" 
                variant="outline"
                className="border-gray-200"
                onClick={handleVoiceInput}
              >
                <Mic className="h-4 w-4 text-gray-600" />
              </Button>
            </form>
            
            <div className="text-center mt-3 text-xs text-gray-500 flex flex-col items-center">
              <div className="flex items-center mb-1 text-amber-500">
                <AlertCircle className="h-3 w-3 mr-1" />
                <p>This assistant is for educational purposes only and not a substitute for medical advice.</p>
              </div>
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
