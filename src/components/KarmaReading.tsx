
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Star, Flower, Moon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateKarmaReading, KarmaReading as KarmaReadingType } from "@/utils/gemini-api";

// Map of chakras to their associated symbols and colors
const chakraInfo: Record<string, { icon: React.ReactNode, color: string }> = {
  "Root Chakra": { icon: <div className="h-6 w-6 bg-red-500 rounded-full" />, color: "bg-red-500" },
  "Sacral Chakra": { icon: <div className="h-6 w-6 bg-orange-500 rounded-full" />, color: "bg-orange-500" },
  "Solar Plexus Chakra": { icon: <div className="h-6 w-6 bg-yellow-500 rounded-full" />, color: "bg-yellow-500" },
  "Heart Chakra": { icon: <Heart className="h-6 w-6 text-green-500" />, color: "bg-green-500" },
  "Throat Chakra": { icon: <div className="h-6 w-6 bg-blue-500 rounded-full" />, color: "bg-blue-500" },
  "Third Eye Chakra": { icon: <div className="h-6 w-6 bg-indigo-500 rounded-full" />, color: "bg-indigo-500" },
  "Crown Chakra": { icon: <div className="h-6 w-6 bg-purple-500 rounded-full" />, color: "bg-purple-500" }
};

// Get chakra icon and color
const getChakraDetails = (chakra: string) => {
  // Extract just the chakra name without additional text
  const chakraName = Object.keys(chakraInfo).find(name => chakra.includes(name));
  return chakraName ? chakraInfo[chakraName] : { icon: <Star className="h-6 w-6 text-yellow-500" />, color: "bg-amber-500" };
};

const KarmaReading = () => {
  const [reflection, setReflection] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reading, setReading] = useState<KarmaReadingType | null>(null);
  const { toast } = useToast();

  const handleGetReading = async () => {
    if (!reflection.trim()) return;
    
    setIsLoading(true);
    
    try {
      const karmaReading = await generateKarmaReading(reflection);
      setReading(karmaReading);
      toast({
        title: "Karma Reading Received",
        description: "Your personalized dharma insights are ready.",
      });
    } catch (error) {
      console.error("Error getting karma reading:", error);
      toast({
        title: "Reading Failed",
        description: "Unable to generate your karma reading at this time.",
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
                <Flower className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="font-playfair text-xl text-cosmicPurple">
                  Dharma Wheel
                </CardTitle>
                <CardDescription>
                  Get your personalized karma reading
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {!reading ? (
            <div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Share your current thoughts, feelings, or situation for a personalized Dharma reading.
              </p>
              <Textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="What's on your mind? How are you feeling today?"
                className="min-h-[120px]"
              />
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-4 border-b pb-4">
                <div className={`p-3 rounded-full ${getChakraDetails(reading.chakra).color}`}>
                  {getChakraDetails(reading.chakra).icon}
                </div>
                <div>
                  <h3 className="font-medium">Emotional State</h3>
                  <p className="text-gray-700 dark:text-gray-300">{reading.emotionalState}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium flex items-center gap-2">
                  <Star className="h-5 w-5 text-spiritualGold" />
                  Associated Chakra
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{reading.chakra}</p>
              </div>

              <div className="bg-mystic/5 p-4 rounded-lg border border-mystic/20">
                <h3 className="font-medium mb-2">Daily Dharma Advice</h3>
                <p className="italic text-gray-700 dark:text-gray-300">"{reading.dharmaAdvice}"</p>
              </div>

              <div className="bg-cosmicPurple/5 p-4 rounded-lg border border-cosmicPurple/20">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Moon className="h-5 w-5 text-cosmicPurple" />
                  Daily Practice
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{reading.dailyTask}</p>
              </div>

              <Button 
                onClick={() => setReading(null)} 
                variant="outline" 
                className="w-full"
              >
                Get Another Reading
              </Button>
            </div>
          )}
        </CardContent>

        {!reading && (
          <CardFooter className="bg-gradient-to-r from-mystic/5 to-cosmicPurple/5 p-4 border-t border-mystic/30">
            <Button 
              onClick={handleGetReading}
              disabled={isLoading || !reflection.trim()} 
              className="w-full bg-spiritual-gradient hover:opacity-90"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Reading the cosmos...</span>
                </div>
              ) : (
                "Get Your Karma Reading"
              )}
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default KarmaReading;
