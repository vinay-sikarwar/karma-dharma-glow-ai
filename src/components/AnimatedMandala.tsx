
import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedMandalaProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

const AnimatedMandala = ({ 
  className, 
  size = 'lg',
  color = "stroke-mystic"
}: AnimatedMandalaProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const sizeMap = {
    sm: 100,
    md: 200,
    lg: 300,
    xl: 400
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let rotation = 0;
    
    const drawMandala = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Base circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, canvas.width * 0.35, 0, Math.PI * 2);
      ctx.strokeStyle = '#9b87f580';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Petals
      const petalCount = 12;
      const petalRadius = canvas.width * 0.32;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;
        
        ctx.save();
        ctx.rotate(angle);
        
        // Lotus petal
        ctx.beginPath();
        ctx.ellipse(0, petalRadius * 0.6, petalRadius * 0.15, petalRadius * 0.4, 0, 0, Math.PI * 2);
        ctx.strokeStyle = '#9b87f5';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        // Inner decoration
        ctx.beginPath();
        ctx.ellipse(0, petalRadius * 0.6, petalRadius * 0.1, petalRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = '#6E59A580';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
      }
      
      // Inner circles
      ctx.beginPath();
      ctx.arc(0, 0, canvas.width * 0.23, 0, Math.PI * 2);
      ctx.strokeStyle = '#FFD70060';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(0, 0, canvas.width * 0.15, 0, Math.PI * 2);
      ctx.strokeStyle = '#FF993380';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Center dot
      ctx.beginPath();
      ctx.arc(0, 0, canvas.width * 0.03, 0, Math.PI * 2);
      ctx.fillStyle = '#6E59A590';
      ctx.fill();
      
      ctx.restore();
    };
    
    const animate = () => {
      rotation += 0.001;
      drawMandala();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(0);
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      width={sizeMap[size]}
      height={sizeMap[size]}
      className={cn("opacity-80", className)}
    />
  );
};

export default AnimatedMandala;
