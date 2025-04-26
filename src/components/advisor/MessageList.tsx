
import { BellRing, User } from "lucide-react";
import { Message } from "@/types/advisor";

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  return (
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
              <BellRing className="h-5 w-5 mr-2 mt-1 text-cosmicPurple shrink-0" />
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
  );
};

export default MessageList;
