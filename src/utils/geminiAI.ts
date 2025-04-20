
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
    return getSimulatedResponse(message);
  } catch (error) {
    console.error('Error with Gemini API:', error);
    return "Sorry, I encountered an error processing your request. Please try again later.";
  }
};

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
