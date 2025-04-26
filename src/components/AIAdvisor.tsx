
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellRing, Book, Star, Sparkles, BookOpen } from "lucide-react";
import MessageList from "./advisor/MessageList";
import ChatInput from "./advisor/ChatInput";
import { useAdvisorMessages } from "@/hooks/useAdvisorMessages";

const AIAdvisor = () => {
  const { messages, inputMessage, setInputMessage, isLoading, handleSubmit } = useAdvisorMessages();

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
                    <BellRing className="h-5 w-5" />
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
              <MessageList messages={messages} isLoading={isLoading} />
            </CardContent>
            
            <CardFooter className="border-t border-mystic/30 p-4">
              <ChatInput 
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
              />
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
