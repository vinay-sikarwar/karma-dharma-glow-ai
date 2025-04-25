
import { Button } from "@/components/ui/button";
import AnimatedMandala from "./AnimatedMandala";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 opacity-30">
        <AnimatedMandala size="xl" />
      </div>
      <div className="absolute bottom-0 left-0 transform translate-y-1/4 -translate-x-1/4 opacity-30">
        <AnimatedMandala size="lg" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 heading-gradient">
            Discover Your Path Through Karma & Dharma
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in">
            Explore ancient Hindu wisdom with modern AI guidance to understand your karmic path 
            and fulfill your dharma in today's world.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-spiritual-gradient hover:opacity-90 text-white py-6 px-8 text-lg rounded-full shadow-lg animate-float"
            >
              Begin Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-mystic text-mystic hover:bg-mystic/10 py-6 px-8 text-lg rounded-full"
            >
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="glassmorphism rounded-xl p-4 w-48 text-center animate-fade-in">
              <h3 className="font-playfair text-xl mb-2 text-cosmicPurple">Karma</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Understand actions and consequences in your life journey
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-4 w-48 text-center animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="font-playfair text-xl mb-2 text-saffron">Dharma</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Discover your sacred duty and purposeful path
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-4 w-48 text-center animate-fade-in" style={{animationDelay: "0.4s"}}>
              <h3 className="font-playfair text-xl mb-2 text-divineBlue">Guidance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                AI-powered insights based on ancient wisdom
              </p>
            </div>
          </div>
          
          <div className="mt-20 font-sanskrit text-2xl text-center text-mystic">
            <span className="om-symbol text-4xl">ॐ</span>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              "Where dharma is, there victory follows" - Bhagavad Gita
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
