
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSubmit: () => void;
  isLoading: boolean;
}

const ChatInput = ({ inputMessage, setInputMessage, handleSubmit, isLoading }: ChatInputProps) => {
  return (
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
  );
};

export default ChatInput;
