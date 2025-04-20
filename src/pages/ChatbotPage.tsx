
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertTriangle, Bot, HelpCircle, MessageSquare, Send, Mic, Star } from 'lucide-react';
import { sendMessageToGemini } from '@/utils/geminiAI';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const ChatbotPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: "Hello! I'm your Asthma Assistant. How can I help you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    try {
      const response = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: "I apologize, but I'm having trouble processing your request. Please try again." 
      }]);
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              AI-Powered Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Chat with Our Asthma Assistant
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get instant answers to your asthma management questions, medication
              information, and personalized guidance anytime you need it.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-primary/10 rounded-full">
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Quick Answers</h3>
                  <p className="text-gray-600">Get information about asthma medications, symptoms, and management techniques.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-primary/10 rounded-full">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Personalized Guidance</h3>
                  <p className="text-gray-600">Receive customized recommendations based on your asthma history and triggers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-primary/10 rounded-full">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">24/7 Availability</h3>
                  <p className="text-gray-600">Access support whenever you need it, day or night.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-4">
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
            
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.type === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-gray-100 rounded-tl-none'
                    }`}
                  >
                    {isLoading && message === messages[messages.length - 1] && message.type === 'bot' ? (
                      <div className="flex space-x-1 items-center px-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    ) : (
                      <p className={`${message.type === 'user' ? 'text-white' : 'text-gray-800'}`}>
                        {message.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="border-t border-gray-100 p-3">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything about asthma, triggers, medications, or emergency tips..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  size="icon"
                  className="border-gray-200"
                  onClick={() => alert("Voice input coming soon!")}
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-center mt-3 text-xs">
                <div className="flex items-center justify-center mb-1 text-amber-500">
                  <AlertTriangle className="h-3 w-3 mr-1" />
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
      </main>
      <Footer />
    </div>
  );
};

export default ChatbotPage;
