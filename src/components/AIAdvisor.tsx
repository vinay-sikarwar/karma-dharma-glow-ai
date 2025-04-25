
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Book, Lotus, SendHorizontal, User, Star, Sparkles, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAdvisor = () => {
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

  // Sample responses for demo purposes
  const demoResponses = [
    "In Hindu philosophy, karma refers to the spiritual principle of cause and effect where intent and actions of an individual influence their future. Your recent decision seems aligned with good karma as it benefits others without expectation of reward.",
    "Dharma, or righteous duty, suggests that your current path may need alignment with your true purpose. Consider meditation on what truly fulfills you while serving others.",
    "The Bhagavad Gita teaches: 'It is better to perform one's own duties imperfectly than to master the duties of another.' Your question suggests you might be looking outside your natural dharma. Reflect on your innate talents and how they can serve the world.",
    "Karma is not punishment but a teacher. These challenges you're facing may be opportunities for spiritual growth. The ancient texts suggest facing them with equanimity—neither elation in success nor depression in failure."
  ];

  const handleSubmit = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      
      const aiResponse: Message = {
        id: messages.length + 2,
        content: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
      
      toast({
        title: "New wisdom received",
        description: "The AI advisor has shared guidance with you.",
      });
    }, 1500);
  };

  return (
    <section id="advisor" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4 heading-gradient">
            AI Karma & Dharma Advisor
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Seek guidance on your karmic path and dharmic duties through our AI advisor,
            powered by ancient Hindu wisdom and modern understanding.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border border-mystic/30 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-mystic/10 to-cosmicPurple/10 border-b border-mystic/30">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-spiritual-gradient text-white">
                    <Lotus className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-playfair text-xl text-cosmicPurple">
                    Dharma Guide
                  </CardTitle>
                  <CardDescription>
                    AI-powered spiritual advisor
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="h-[400px] overflow-y-auto p-6">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`flex mb-4 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div className={`flex items-start max-w-[80%] ${
                      message.sender === 'user' 
                        ? 'bg-mystic/20 rounded-tl-2xl rounded-tr-sm rounded-bl-2xl animate-fade-in' 
                        : 'bg-cosmicPurple/10 rounded-tr-2xl rounded-tl-sm rounded-br-2xl animate-fade-in'
                    } p-4`}>
                      {message.sender === 'ai' && (
                        <Lotus className="h-5 w-5 mr-2 mt-1 text-cosmicPurple shrink-0" />
                      )}
                      <div>
                        <p className="text-gray-800 dark:text-gray-200">{message.content}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                      </div>
                      {message.sender === 'user' && (
                        <User className="h-5 w-5 ml-2 mt-1 text-mystic shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-cosmicPurple/10 rounded-tr-2xl rounded-tl-sm rounded-br-2xl p-4">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 bg-cosmicPurple rounded-full animate-pulse"></div>
                        <div className="h-2 w-2 bg-cosmicPurple rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="h-2 w-2 bg-cosmicPurple rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="border-t border-mystic/30 p-4">
              <div className="flex w-full">
                <Textarea 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about your karma or dharma..."
                  className="flex-grow mr-2 focus:border-mystic"
                  onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSubmit()}
                />
                <Button 
                  disabled={isLoading || !inputMessage.trim()} 
                  onClick={handleSubmit}
                  className="bg-spiritual-gradient hover:opacity-90"
                >
                  <SendHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Book className="h-4 w-4 mr-2 text-mystic" />
              <span>Based on Vedic texts</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2 text-saffron" />
              <span>Personalized guidance</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-spiritualGold" />
              <span>AI-enhanced wisdom</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-divineBlue" />
              <span>Ancient philosophy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
