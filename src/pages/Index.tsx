
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AIAdvisor from "@/components/AIAdvisor";
import KarmaReading from "@/components/KarmaReading";
import DreamInterpreter from "@/components/DreamInterpreter";
import ResourcesSection from "@/components/ResourcesSection";
import MeditationTimer from "@/components/MeditationTimer";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <NavBar />
      <Hero />
      <AIAdvisor />
      <KarmaReading />
      <DreamInterpreter />
      <ResourcesSection />
      <MeditationTimer />
      <Footer />
    </div>
  );
};

export default Index;
