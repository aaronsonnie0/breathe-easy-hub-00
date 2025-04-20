'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
}

const ChatbotPage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'bot',
      content: `Hello! I'm your BreatheEasy Assistant. I can help you with:
      
• Understanding your asthma triggers
• Managing symptoms
• Medication guidance
• Emergency action plans
• General asthma information

How can I assist you today?`
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

    // Simulate bot response (replace with actual chatbot integration)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "I understand you're asking about " + userMessage + ". Let me help you with that. (This is a simulated response - actual chatbot integration coming soon!)"
      }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Chat with BreatheEasy Assistant</h1>
      <p className="text-gray-600 mb-8">
        Get instant answers to your asthma-related questions and receive personalized guidance
        for managing your respiratory health.
      </p>
      
      <Card className="min-h-[600px] flex flex-col">
        <CardContent className="flex-1 p-6">
          <div className="flex flex-col h-full">
            {/* Chat messages container */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' ? 'bg-blue-500' : 'bg-primary'
                  }`}>
                    <span className="text-white text-sm">
                      {message.type === 'user' ? 'U' : 'BE'}
                    </span>
                  </div>
                  <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-4 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-muted text-foreground'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t pt-4">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message here..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                >
                  {isLoading ? 'Sending...' : 'Send'}
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Press Enter to send your message
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatbotPage; 