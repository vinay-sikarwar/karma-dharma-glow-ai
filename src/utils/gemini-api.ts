
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
  emotionalState: string;
  chakra: string;
  dharmaAdvice: string;
  dailyTask: string;
}

export interface DreamInterpretation {
  spiritualMeaning: string;
  symbolism: string;
  journalingSuggestion: string;
  recommendedChant: string;
}

const API_KEY = "AIzaSyDEYqEOBQyethqZd8MYtIjO9Z-SP5BLxK8";

/**
 * Generate a response from Gemini AI based on the user message
 */
export async function generateGeminiResponse(userMessage: string): Promise<string> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
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
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
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
export async function generateKarmaReading(userReflection: string): Promise<KarmaReading> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
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
                  text: `Based on the user's reflection, provide a "Karma Reading" with these elements:
                  1. Emotional State: Analyze the sentiment and provide a short description of their emotional state
                  2. Associated Chakra: Which of the seven chakras (Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, Crown) is most relevant to their situation and why
                  3. Daily Dharma Advice: A spiritual quote or teaching relevant to their situation
                  4. Simple Daily Task: A small action they can take today to improve their karma
                  
                  Format the response as JSON with fields: emotionalState, chakra, dharmaAdvice, dailyTask
                  
                  User reflection: ${userReflection}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      }
    );

    const data = await response.json() as GeminiResponse;
    
    if (data.candidates && data.candidates[0].content.parts && data.candidates[0].content.parts[0].text) {
      try {
        return JSON.parse(data.candidates[0].content.parts[0].text) as KarmaReading;
      } catch (parseError) {
        console.error("Error parsing karma reading:", parseError);
        // Fallback reading if JSON parsing fails
        return {
          emotionalState: "Seeking balance",
          chakra: "Heart Chakra",
          dharmaAdvice: "The journey of a thousand miles begins with a single step.",
          dailyTask: "Practice 5 minutes of mindful breathing"
        };
      }
    } else {
      console.error("Unexpected karma reading response format:", data);
      return {
        emotionalState: "Seeking balance",
        chakra: "Heart Chakra",
        dharmaAdvice: "The journey of a thousand miles begins with a single step.",
        dailyTask: "Practice 5 minutes of mindful breathing"
      };
    }
  } catch (error) {
    console.error("Error generating karma reading:", error);
    return {
      emotionalState: "Seeking balance",
      chakra: "Heart Chakra",
      dharmaAdvice: "The journey of a thousand miles begins with a single step.",
      dailyTask: "Practice 5 minutes of mindful breathing"
    };
  }
}

/**
 * Interpret dreams through spiritual lenses
 */
export async function interpretDream(dreamDescription: string): Promise<DreamInterpretation> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
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
                  text: `As a Hindu spiritual advisor, interpret the following dream through multiple spiritual lenses (Vedic, Jungian, Buddhist, etc.).
                  Provide these elements:
                  1. Spiritual Meaning: The deeper spiritual significance of the dream
                  2. Symbolism: Key symbols in the dream and their meanings
                  3. Journaling Suggestion: A reflective question for the dreamer to explore
                  4. Recommended Chant: A mantra or chant that might help the dreamer process this dream
                  
                  Format the response as JSON with fields: spiritualMeaning, symbolism, journalingSuggestion, recommendedChant
                  
                  Dream description: ${dreamDescription}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      }
    );

    const data = await response.json() as GeminiResponse;
    
    if (data.candidates && data.candidates[0].content.parts && data.candidates[0].content.parts[0].text) {
      try {
        return JSON.parse(data.candidates[0].content.parts[0].text) as DreamInterpretation;
      } catch (parseError) {
        console.error("Error parsing dream interpretation:", parseError);
        // Fallback interpretation if JSON parsing fails
        return {
          spiritualMeaning: "Dreams connect us to the spiritual realm and can offer guidance.",
          symbolism: "Common symbols often represent aspects of your inner self.",
          journalingSuggestion: "How might this dream be guiding your spiritual journey?",
          recommendedChant: "Om Shanti Shanti Shanti"
        };
      }
    } else {
      console.error("Unexpected dream interpretation response format:", data);
      return {
        spiritualMeaning: "Dreams connect us to the spiritual realm and can offer guidance.",
        symbolism: "Common symbols often represent aspects of your inner self.",
        journalingSuggestion: "How might this dream be guiding your spiritual journey?",
        recommendedChant: "Om Shanti Shanti Shanti"
      };
    }
  } catch (error) {
    console.error("Error interpreting dream:", error);
    return {
      spiritualMeaning: "Dreams connect us to the spiritual realm and can offer guidance.",
      symbolism: "Common symbols often represent aspects of your inner self.",
      journalingSuggestion: "How might this dream be guiding your spiritual journey?",
      recommendedChant: "Om Shanti Shanti Shanti"
    };
  }
}
