
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Moon, Star, BookOpen, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { interpretDream, DreamInterpretation } from "@/utils/gemini-api";

const DreamInterpreter = () => {
  const [dreamDescription, setDreamDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [interpretation, setInterpretation] = useState<DreamInterpretation | null>(null);
  const { toast } = useToast();

  const handleGetInterpretation = async () => {
    if (!dreamDescription.trim()) return;
    
    setIsLoading(true);
    
    try {
      const dreamInterpretation = await interpretDream(dreamDescription);
      setInterpretation(dreamInterpretation);
      toast({
        title: "Dream Interpreted",
        description: "Your spiritual dream analysis is ready.",
      });
    } catch (error) {
      console.error("Error interpreting dream:", error);
      toast({
        title: "Interpretation Failed",
        description: "Unable to interpret your dream at this time.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="border border-mystic/30 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-mystic/10 to-cosmicPurple/10 border-b border-mystic/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-spiritual-gradient p-2 rounded-full">
                <Moon className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="font-playfair text-xl text-cosmicPurple">
                  Dream Interpreter
                </CardTitle>
                <CardDescription>
                  Discover the spiritual meaning of your dreams
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {!interpretation ? (
            <div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Describe your dream in as much detail as you can remember, including feelings, symbols, and events.
              </p>
              <Textarea
                value={dreamDescription}
                onChange={(e) => setDreamDescription(e.target.value)}
                placeholder="Last night, I dreamt about..."
                className="min-h-[120px]"
              />
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-mystic/5 p-4 rounded-lg border border-mystic/20">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-spiritualGold" />
                  Spiritual Meaning
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{interpretation.spiritualMeaning}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Key Symbols & Meanings</h3>
                <p className="text-gray-700 dark:text-gray-300">{interpretation.symbolism}</p>
              </div>

              <div className="bg-cosmicPurple/5 p-4 rounded-lg border border-cosmicPurple/20">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-divineBlue" />
                  Journaling Suggestion
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{interpretation.journalingSuggestion}</p>
              </div>

              <div className="bg-spiritual-gradient/5 p-4 rounded-lg border border-saffron/20">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-cosmicPurple" />
                  Recommended Chant
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic">{interpretation.recommendedChant}</p>
              </div>

              <Button 
                onClick={() => setInterpretation(null)} 
                variant="outline" 
                className="w-full"
              >
                Interpret Another Dream
              </Button>
            </div>
          )}
        </CardContent>

        {!interpretation && (
          <CardFooter className="bg-gradient-to-r from-mystic/5 to-cosmicPurple/5 p-4 border-t border-mystic/30">
            <Button 
              onClick={handleGetInterpretation}
              disabled={isLoading || !dreamDescription.trim()} 
              className="w-full bg-spiritual-gradient hover:opacity-90"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Interpreting dream...</span>
                </div>
              ) : (
                "Interpret My Dream"
              )}
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default DreamInterpreter;
