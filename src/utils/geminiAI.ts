
// NOTE: This file is for demonstration purposes only
// In a real application, API calls to Gemini should be handled by a secure backend
// to protect your API key. Never expose API keys in frontend code.

// Mock implementation - in a real app, this would be a backend API endpoint
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Simulated API call - in production this would be a fetch to your backend
    console.log('Sending message to Gemini API (simulated):', message);
    
    // Wait for a simulated response
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a mock response
    return "This is a simulated response. In a real implementation, this would be coming from the Gemini API via a secure backend service.";
  } catch (error) {
    console.error('Error with Gemini API:', error);
    return "Sorry, I encountered an error processing your request. Please try again later.";
  }
};

// Helper function to check if request contains sensitive health information
export const containsSensitiveInfo = (message: string): boolean => {
  const sensitiveKeywords = [
    'personal', 'private', 'social security', 'credit card', 'passport',
    'license number', 'insurance id', 'medical record'
  ];
  
  return sensitiveKeywords.some(keyword => 
    message.toLowerCase().includes(keyword.toLowerCase())
  );
};

// API response formatting helper
export const formatResponse = (response: string): string => {
  // Add proper formatting or sanitization if needed
  return response
    .replace(/\n\n/g, '\n') // Clean up excessive line breaks
    .trim();
};
