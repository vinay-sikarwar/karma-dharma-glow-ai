
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Moon, Play, Pause, RotateCcw } from "lucide-react";
import AnimatedMandala from "./AnimatedMandala";

const MeditationTimer = () => {
  const [duration, setDuration] = useState(5); // minutes
  const [timeLeft, setTimeLeft] = useState(duration * 60); // seconds
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://soundbible.com/mp3/tibetan-singing-bowl-daniel_simon.mp3");
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setTimeLeft(duration * 60);
    setIsCompleted(false);
  }, [duration]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            setIsActive(false);
            setIsCompleted(true);
            
            // Play sound when timer completes
            if (audioRef.current) {
              audioRef.current.play();
            }
            
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(duration * 60);
    setIsCompleted(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateProgress = () => {
    const total = duration * 60;
    const elapsed = total - timeLeft;
    return (elapsed / total) * 100;
  };

  return (
    <section id="meditation" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4 heading-gradient">
            Mindful Meditation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Take a moment to connect with your inner self. Regular meditation helps
            align your actions (karma) with your purpose (dharma).
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-spiritual-gradient p-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-64 h-64 flex items-center justify-center rounded-full bg-gradient-to-br from-mystic/20 to-cosmicPurple/20">
                    <AnimatedMandala size="lg" />
                    
                    {/* Timer Display */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                      <div className="text-4xl font-bold font-playfair mb-2 text-cosmicPurple">
                        {formatTime(timeLeft)}
                      </div>
                      
                      {isCompleted ? (
                        <div className="text-sm text-saffron font-medium animate-pulse">
                          Meditation Complete
                        </div>
                      ) : isActive ? (
                        <div className="text-sm text-mystic font-medium">
                          Meditating...
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {duration} minute{duration !== 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                    
                    {/* Progress Ring */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="4"
                        strokeDasharray="175.9"
                        strokeDashoffset="0"
                        style={{ transformOrigin: 'center', transform: 'scale(4)' }}
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="175.9"
                        strokeDashoffset={175.9 * (1 - calculateProgress() / 100)}
                        style={{ transformOrigin: 'center', transform: 'scale(4)' }}
                        className="transition-all duration-300"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#9b87f5" />
                          <stop offset="100%" stopColor="#6E59A5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Timer Duration</span>
                  <span className="text-sm font-medium text-mystic">{duration} min</span>
                </div>
                <Slider
                  disabled={isActive}
                  value={[duration]}
                  min={1}
                  max={30}
                  step={1}
                  onValueChange={(value) => setDuration(value[0])}
                  className="mb-6"
                />
                
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={isActive}
                    onClick={() => setDuration(5)}
                    className={duration === 5 ? "border-mystic text-mystic" : ""}
                  >
                    5m
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={isActive}
                    onClick={() => setDuration(10)}
                    className={duration === 10 ? "border-mystic text-mystic" : ""}
                  >
                    10m
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={isActive}
                    onClick={() => setDuration(15)}
                    className={duration === 15 ? "border-mystic text-mystic" : ""}
                  >
                    15m
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={isActive}
                    onClick={() => setDuration(20)}
                    className={duration === 20 ? "border-mystic text-mystic" : ""}
                  >
                    20m
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={toggleTimer}
                  size="lg"
                  className={`bg-spiritual-gradient hover:opacity-90 rounded-full w-14 h-14 p-0 ${isActive ? 'animate-pulse' : ''}`}
                >
                  {isActive ? <Pause /> : <Play className="ml-1" />}
                </Button>
                
                {(isActive || isCompleted) && (
                  <Button
                    onClick={resetTimer}
                    size="lg"
                    variant="outline"
                    className="border-mystic text-mystic hover:bg-mystic/10 rounded-full w-14 h-14 p-0"
                  >
                    <RotateCcw />
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="font-playfair text-lg mb-3 flex items-center">
              <Moon className="h-4 w-4 mr-2 text-cosmicPurple" />
              Meditation Guidance
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Find a quiet place where you won't be disturbed.</li>
              <li>Sit comfortably with your back straight.</li>
              <li>Close your eyes and focus on your breath.</li>
              <li>When your mind wanders, gently bring it back to your breath.</li>
              <li>Remember: "One becomes what one thinks." - Upanishads</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationTimer;
