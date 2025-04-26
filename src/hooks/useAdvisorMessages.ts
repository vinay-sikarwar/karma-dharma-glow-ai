
import { useState } from "react";
import { Message } from "@/types/advisor";
import { useToast } from "@/hooks/use-toast";
import { generateGeminiResponse } from "@/utils/gemini-api";

export const useAdvisorMessages = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Namaste 🙏 I am your AI Karma & Dharma advisor. I can help you understand your path according to Hindu philosophy. What would you like guidance on today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Add a typing indicator
    const typingIndicator: Message = {
      id: messages.length + 2,
      content: "",
      sender: 'ai',
      timestamp: new Date(),
      isTyping: true
    };
    
    setMessages(prev => [...prev, typingIndicator]);
    
    try {
      const aiResponseText = await generateGeminiResponse(inputMessage);
      
      // Remove typing indicator and add actual response
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, {
          id: filtered.length + 1,
          content: aiResponseText,
          sender: 'ai',
          timestamp: new Date()
        }];
      });
      
      toast({
        title: "New wisdom received",
        description: "The AI advisor has shared guidance with you.",
      });
    } catch (error) {
      console.error("Error generating response:", error);
      
      // Remove typing indicator and add error message
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, {
          id: filtered.length + 1,
          content: "I'm sorry, my connection to the cosmic wisdom is temporarily disturbed. Please try again later.",
          sender: 'ai',
          timestamp: new Date()
        }];
      });
      
      toast({
        title: "Connection issue",
        description: "Could not retrieve wisdom at this time.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    inputMessage,
    setInputMessage,
    isLoading,
    handleSubmit
  };
};
