import { BellRing } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = {
    about: [
      { label: "Our Mission", href: "#" },
      { label: "Philosophy", href: "#" },
      { label: "Team", href: "#" },
      { label: "Advisors", href: "#" },
    ],
    resources: [
      { label: "Sacred Texts", href: "#" },
      { label: "Glossary", href: "#" },
      { label: "Articles", href: "#" },
      { label: "Audio Guides", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <BellRing className="h-8 w-8 text-mystic mr-2" />
              <span className="font-playfair text-xl font-bold">
                <span className="text-cosmicPurple">Karma</span>
                <span className="text-saffron">&</span>
                <span className="text-mystic">Dharma</span>
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Guiding you on your spiritual journey through ancient Hindu wisdom
              and modern AI technology to help align your karma and fulfill your dharma.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-mystic/10 hover:bg-mystic/20 p-2 rounded-full transition-colors">
                <svg className="h-5 w-5 text-cosmicPurple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="bg-mystic/10 hover:bg-mystic/20 p-2 rounded-full transition-colors">
                <svg className="h-5 w-5 text-cosmicPurple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.36 14.36c-.18.18-.42.28-.67.28-.25 0-.5-.1-.67-.28-.19-.19-.29-.44-.29-.71 0-.26.1-.51.29-.71.37-.37 1.01-.37 1.38 0 .19.2.29.45.29.71 0 .27-.1.52-.29.71zm-1.07-7.44h-1.31c-.12 1.25-.53 2.46-1.21 3.55-.13.21-.42.3-.67.23-.25-.08-.42-.31-.42-.57V8.46h-.84c-.29 0-.53-.24-.53-.53 0-.29.24-.53.53-.53h.84V5.96c0-.29.24-.53.53-.53s.53.24.53.53V7.4h1.31c.29 0 .53.24.53.53 0 .29-.24.53-.53.53z"></path>
                </svg>
              </a>
              <a href="#" className="bg-mystic/10 hover:bg-mystic/20 p-2 rounded-full transition-colors">
                <svg className="h-5 w-5 text-cosmicPurple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="bg-mystic/10 hover:bg-mystic/20 p-2 rounded-full transition-colors">
                <svg className="h-5 w-5 text-cosmicPurple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 text-gray-900 dark:text-white">About</h3>
            <ul className="space-y-2">
              {links.about.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-mystic dark:hover:text-mystic transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-mystic dark:hover:text-mystic transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4 text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-mystic dark:hover:text-mystic transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Karma & Dharma AI Advisor. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-gray-500 dark:text-gray-500 text-xs mr-2">Made with</p>
            <span className="text-saffron">♥</span>
            <p className="text-gray-500 dark:text-gray-500 text-xs ml-2">and divine guidance</p>
          </div>
        </div>
      </div>
      
      <div className="bg-cosmicPurple/5 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-sanskrit">
            <span className="om-symbol text-lg">ॐ</span> शान्तिः शान्तिः शान्तिः (Om Shanti Shanti Shanti)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
