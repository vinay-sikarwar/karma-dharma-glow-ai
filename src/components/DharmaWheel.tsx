
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface DharmaWheelProps {
  selectedSpoke: string;
  isSpinning: boolean;
}

const spokes = [
  "Compassion",
  "Wisdom",
  "Patience",
  "Discipline",
  "Truth",
  "Letting Go",
  "Gratitude",
  "Focus"
];

export const DharmaWheel = ({ selectedSpoke, isSpinning }: DharmaWheelProps) => {
  const [hoveredSpoke, setHoveredSpoke] = useState<string | null>(null);

  return (
    <div className="relative w-80 h-80 mx-auto">
      <div className="absolute inset-0 bg-spiritual-gradient rounded-full opacity-10 animate-pulse-gentle" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-72 h-72">
          {spokes.map((spoke, index) => {
            const rotationDeg = (index * 360) / spokes.length;
            const isSelected = spoke === selectedSpoke;
            
            return (
              <motion.div
                key={spoke}
                className={cn(
                  "absolute w-1 h-36 origin-bottom",
                  "transform transition-all duration-500",
                  isSelected ? "bg-spiritual-gradient" : "bg-gray-300/50 dark:bg-gray-600/50",
                  isSpinning && "animate-pulse-gentle"
                )}
                style={{
                  left: "50%",
                  bottom: "50%",
                  transform: `rotate(${rotationDeg}deg)`,
                }}
                onMouseEnter={() => setHoveredSpoke(spoke)}
                onMouseLeave={() => setHoveredSpoke(null)}
              >
                <AnimatePresence>
                  {(hoveredSpoke === spoke || isSelected) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                    >
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 shadow-lg">
                        {spoke}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-spiritual-gradient flex items-center justify-center text-white text-xs text-center p-2 animate-pulse-gentle">
              Your Karma Insight
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
