
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BookUser, Flower, Infinity, BellRing, Bell, Star } from "lucide-react";

const ResourcesSection = () => {
  const concepts = [
    {
      title: "Karma",
      icon: <Infinity className="h-8 w-8 text-saffron mb-2" />,
      description: "The law of cause and effect that influences the cycle of rebirth.",
      content: "Karma literally means 'action,' 'work,' or 'deed.' The principle of karma states that all actions have consequences which will affect the doer of the action. Good actions create good karma and bad actions create bad karma. This cosmic law operates on the principle that for every action there is an equal reaction.",
      quote: "As you sow, so shall you reap.",
      source: "Brihadaranyaka Upanishad"
    },
    {
      title: "Dharma",
      icon: <BellRing className="h-8 w-8 text-mystic mb-2" />,
      description: "Righteous conduct, moral duty, and one's purpose in life.",
      content: "Dharma refers to the religious, moral, ethical and legal duties, which inform the spiritual path one should follow. It is often referred to as 'righteousness' or 'duty.' Different people have different dharmas according to their age, gender, class, community, occupation and capability.",
      quote: "Better is one's own dharma though imperfectly carried out than the dharma of another carried out perfectly.",
      source: "Bhagavad Gita 18:47"
    },
    {
      title: "Moksha",
      icon: <Star className="h-8 w-8 text-spiritualGold mb-2" />,
      description: "Liberation from the cycle of rebirth and suffering.",
      content: "Moksha is the ultimate goal of human existence. It is a transcendent state attained by being free of all suffering and the cycle of rebirth (samsara). It is reached through the realization of one's identity with Brahman, the universal soul. Various paths to moksha include Jnana (knowledge), Bhakti (devotion), and Karma (selfless action).",
      quote: "The knower of the Self goes beyond grief.",
      source: "Chandogya Upanishad 7.1.3"
    },
    {
      title: "Samsara",
      icon: <Bell className="h-8 w-8 text-divineBlue mb-2" />,
      description: "The continuous cycle of life, death, and rebirth.",
      content: "Samsara is the repeating cycle of birth, life, death and rebirth. It is driven by karma and continues until moksha is attained. The quality of existence in each cycle depends on one's accumulated karma. Breaking free from samsara requires understanding the impermanence of life and following one's dharma.",
      quote: "As a man casts off worn-out garments and puts on others that are new, similarly the embodied soul casts off worn-out bodies and enters into others that are new.",
      source: "Bhagavad Gita 2:22"
    },
  ];

  const texts = [
    {
      title: "Bhagavad Gita",
      description: "The sacred dialogue between Lord Krishna and Arjuna about dharma and spiritual wisdom.",
      icon: <BookUser className="h-5 w-5 text-mystic" />,
    },
    {
      title: "Upanishads",
      description: "Philosophical texts that form the theoretical basis for Hinduism.",
      icon: <BookOpen className="h-5 w-5 text-saffron" />,
    },
    {
      title: "Vedas",
      description: "Ancient scriptural texts composed in Vedic Sanskrit, the oldest scriptures of Hinduism.",
      icon: <BookUser className="h-5 w-5 text-divineBlue" />,
    },
    {
      title: "Puranas",
      description: "Ancient narratives about the history of the universe from creation to destruction.",
      icon: <BookOpen className="h-5 w-5 text-spiritualGold" />,
    },
  ];

  const practices = [
    {
      title: "Meditation",
      description: "Focused mental practice to achieve clarity and spiritual insight.",
      icon: <Meditation className="h-5 w-5 text-mystic" />,
    },
    {
      title: "Yoga",
      description: "Physical, mental, and spiritual practices that aim to unite body, mind, and spirit.",
      icon: <Lotus className="h-5 w-5 text-saffron" />,
    },
    {
      title: "Bhakti",
      description: "Devotional worship and love directed toward a personal deity or the Divine.",
      icon: <Flower className="h-5 w-5 text-divineBlue" />,
    },
    {
      title: "Jnana",
      description: "Path of knowledge and wisdom to realize the true nature of reality.",
      icon: <Star className="h-5 w-5 text-spiritualGold" />,
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-background to-mystic/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4 heading-gradient">
            Sacred Knowledge
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the rich tapestry of Hindu philosophy and spiritual concepts
            that guide the understanding of karma and dharma.
          </p>
        </div>
        
        <Tabs defaultValue="concepts" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <TabsTrigger value="concepts" className="text-sm sm:text-base">Key Concepts</TabsTrigger>
              <TabsTrigger value="texts" className="text-sm sm:text-base">Sacred Texts</TabsTrigger>
              <TabsTrigger value="practices" className="text-sm sm:text-base">Spiritual Practices</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="concepts" className="mt-2">
            <div className="grid md:grid-cols-2 gap-6">
              {concepts.map((concept, index) => (
                <Card key={index} className="border-mystic/20 overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="bg-gradient-to-r from-mystic/10 to-cosmicPurple/5 border-b border-mystic/20">
                    <div className="flex flex-col items-center">
                      {concept.icon}
                      <CardTitle className="font-playfair text-2xl">{concept.title}</CardTitle>
                      <CardDescription className="text-center">{concept.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 dark:text-gray-300">{concept.content}</p>
                    <div className="mt-4 p-4 bg-mystic/10 rounded-lg border-l-4 border-mystic">
                      <p className="italic text-gray-600 dark:text-gray-400">"{concept.quote}"</p>
                      <p className="text-sm text-right mt-2 text-gray-500">— {concept.source}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center pb-6">
                    <Button variant="outline" className="border-mystic text-mystic hover:bg-mystic/10">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="texts">
            <div className="grid md:grid-cols-2 gap-6">
              {texts.map((text, index) => (
                <Card key={index} className="border-mystic/20 overflow-hidden flex">
                  <div className="bg-mystic/20 p-6 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-4">
                      {text.icon}
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2">{text.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{text.description}</p>
                    <Button variant="link" className="text-mystic p-0">Explore Text</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="practices">
            <div className="grid md:grid-cols-2 gap-6">
              {practices.map((practice, index) => (
                <Card key={index} className="border-mystic/20 overflow-hidden flex">
                  <div className="bg-spiritual-gradient p-6 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-4">
                      {practice.icon}
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2">{practice.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{practice.description}</p>
                    <Button variant="link" className="text-mystic p-0">Learn Practice</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;
