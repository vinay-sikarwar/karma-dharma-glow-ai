interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export interface KarmaReading {
  selectedSpoke: string;
  karmaInsight: string;
  spiritualPractice: string;
  affirmation: string;
  associatedChakra: string;
}

const API_KEY = "AIzaSyDEYqEOBQyethqZd8MYtIjO9Z-SP5BLxK8";

/**
 * Generate a response from Gemini AI based on the user message
 */
export async function generateGeminiResponse(userMessage: string): Promise<string> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a Hindu spiritual advisor specializing in concepts of Karma and Dharma. 
                  Provide thoughtful, compassionate advice about the user's spiritual journey based on Hindu philosophy.
                  Include relevant quotes from Hindu texts if appropriate. 
                  Keep responses focused on Hindu spirituality, karma, dharma, and personal growth.
                  User message: ${userMessage}`
                }
              ]
            }
          ]
        }),
      }
    );

    const data = await response.json() as GeminiResponse;
    
    if (data.candidates && data.candidates[0].content.parts && data.candidates[0].content.parts[0].text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      console.error("Unexpected response format:", data);
      return "I apologize, but I'm having trouble connecting with ancient wisdom right now. Please try again in a moment.";
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "The cosmic energies seem disturbed. I cannot connect to the source of wisdom at this moment. Please try again later.";
  }
}

/**
 * Generate a karma reading based on the user's current state
 */
export async function generateKarmaReading(userReflection: string, userName: string = "", birthDate: string = ""): Promise<KarmaReading> {
  try {
    const userContext = userName && birthDate ? 
      `For user: ${userName}, born on ${birthDate}. Based on their reflection` : 
      "Based on the user's reflection";
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a wise spiritual companion. ${userContext}: "${userReflection}"

You are about to reveal a Dharma Wheel Insight. The Dharma Wheel has 8 spokes: 
1. Compassion  
2. Wisdom  
3. Patience  
4. Discipline  
5. Truth  
6. Letting Go  
7. Gratitude  
8. Focus

Based on their reflection, select one spoke that resonates most.

Respond in this format:
---
Selected Dharma Spoke: <one of the eight above>
Karma Insight: <Give a poetic, reflective message (2-4 lines) that speaks to their spiritual state>
Suggested Spiritual Practice: <One practical action>
Affirmation or Mantra: <A short, powerful affirmation>
Associated Chakra: <Name the chakra this insight is linked to>

Keep the tone warm, mystical, and wise — like a spiritual teacher or oracle.
Format as JSON with fields: selectedSpoke, karmaInsight, spiritualPractice, affirmation, associatedChakra`
                }
              ]
            }
          ]
        }),
      }
    );

    const data = await response.json();
    
    if (data.candidates && data.candidates[0].content.parts && data.candidates[0].content.parts[0].text) {
      try {
        return JSON.parse(data.candidates[0].content.parts[0].text) as KarmaReading;
      } catch (parseError) {
        console.error("Error parsing karma reading:", parseError);
        return {
          selectedSpoke: "Wisdom",
          karmaInsight: "In the silence between thoughts, wisdom blooms like a lotus.",
          spiritualPractice: "Practice 5 minutes of mindful breathing",
          affirmation: "I am connected to infinite wisdom",
          associatedChakra: "Third Eye Chakra (Ajna)"
        };
      }
    } else {
      console.error("Unexpected karma reading response format:", data);
      return {
        selectedSpoke: "Wisdom",
        karmaInsight: "In the silence between thoughts, wisdom blooms like a lotus.",
        spiritualPractice: "Practice 5 minutes of mindful breathing",
        affirmation: "I am connected to infinite wisdom",
        associatedChakra: "Third Eye Chakra (Ajna)"
      };
    }
  } catch (error) {
    console.error("Error generating karma reading:", error);
    return {
      selectedSpoke: "Wisdom",
      karmaInsight: "In the silence between thoughts, wisdom blooms like a lotus.",
      spiritualPractice: "Practice 5 minutes of mindful breathing",
      affirmation: "I am connected to infinite wisdom",
      associatedChakra: "Third Eye Chakra (Ajna)"
    };
  }
}
