
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Heart, Star, Flower, Moon, Calendar, User } from "lucide-react";
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
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reading, setReading] = useState<KarmaReadingType | null>(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const { toast } = useToast();

  const handleGetReading = async () => {
    if (!reflection.trim()) return;
    
    setIsLoading(true);
    
    try {
      const karmaReading = await generateKarmaReading(reflection, userName, birthDate);
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
    <section id="karma-reading" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4 heading-gradient">
            Dharma Wheel
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Receive personalized spiritual insights based on your current state of being.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border border-mystic/30 shadow-lg overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <CardHeader className="bg-gradient-to-r from-mystic/20 to-cosmicPurple/20 border-b border-mystic/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-spiritual-gradient p-3 rounded-full shadow-md">
                    <Flower className="h-6 w-6 text-white animate-pulse-gentle" />
                  </div>
                  <div>
                    <CardTitle className="font-playfair text-2xl text-cosmicPurple">
                      Dharma Wheel
                    </CardTitle>
                    <CardDescription className="text-base">
                      Discover your spiritual path and purpose
                    </CardDescription>
                  </div>
                </div>
                {!reading && !showUserForm && (
                  <Button 
                    onClick={() => setShowUserForm(true)} 
                    variant="outline"
                    className="border-mystic hover:bg-mystic/10"
                  >
                    Begin Consultation
                  </Button>
                )}
              </div>
            </CardHeader>

            <CardContent className="p-6 md:p-8">
              {!reading ? (
                showUserForm ? (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="userName" className="text-sm font-medium flex items-center gap-2">
                          <User className="h-4 w-4 text-cosmicPurple" />
                          Your Name (Optional)
                        </label>
                        <Input
                          id="userName"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="Enter your name"
                          className="border-mystic/30 focus:border-cosmicPurple"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="birthDate" className="text-sm font-medium flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-saffron" />
                          Birth Date (Optional)
                        </label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                          className="border-mystic/30 focus:border-cosmicPurple"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reflection" className="text-sm font-medium">
                        Share your current thoughts, feelings, or situation
                      </label>
                      <Textarea
                        id="reflection"
                        value={reflection}
                        onChange={(e) => setReflection(e.target.value)}
                        placeholder="What's on your mind? How are you feeling today?"
                        className="min-h-[150px] border-mystic/30 focus:border-cosmicPurple"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-24 h-24 mx-auto bg-spiritual-gradient rounded-full flex items-center justify-center shadow-lg">
                      <Flower className="h-12 w-12 text-white animate-pulse-gentle" />
                    </div>
                    <h3 className="text-xl font-playfair">Discover Your Karmic Path</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                      Reveal insights about your emotional state, chakra balance, and personalized dharma advice.
                    </p>
                  </div>
                )
              ) : (
                <div className="space-y-8 animate-fade-in">
                  <div className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 shadow-sm border border-mystic/20">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className={`p-4 rounded-full ${getChakraDetails(reading.chakra).color} shadow-lg`}>
                        {getChakraDetails(reading.chakra).icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Emotional State</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg">{reading.emotionalState}</p>
                        <div className="mt-3">
                          <span className="text-sm text-cosmicPurple font-medium flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            {reading.chakra}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-mystic/10 to-cosmicPurple/10 p-6 rounded-xl border border-mystic/30 shadow-inner">
                    <h3 className="font-playfair text-xl mb-4 text-cosmicPurple">Daily Dharma Advice</h3>
                    <p className="italic text-lg text-gray-700 dark:text-gray-300 leading-relaxed">"{reading.dharmaAdvice}"</p>
                  </div>

                  <div className="bg-gradient-to-r from-saffron/10 to-sage/10 p-6 rounded-xl border border-saffron/30 shadow-inner">
                    <h3 className="font-playfair text-xl mb-4 text-saffron flex items-center gap-2">
                      <Moon className="h-5 w-5" />
                      Daily Practice
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{reading.dailyTask}</p>
                  </div>

                  <Button 
                    onClick={() => {
                      setReading(null);
                      setShowUserForm(true);
                    }} 
                    variant="outline" 
                    className="w-full border-mystic hover:bg-mystic/10 text-base py-6"
                  >
                    Get Another Reading
                  </Button>
                </div>
              )}
            </CardContent>

            {!reading && showUserForm && (
              <CardFooter className="bg-gradient-to-r from-mystic/10 to-cosmicPurple/10 p-6 border-t border-mystic/30">
                <div className="w-full flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => setShowUserForm(false)} 
                    variant="outline" 
                    className="flex-1 border-mystic hover:bg-mystic/10"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleGetReading}
                    disabled={isLoading || !reflection.trim()} 
                    className="flex-1 bg-spiritual-gradient hover:opacity-90 py-6"
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
                </div>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KarmaReading;
