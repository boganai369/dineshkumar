himport { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Briefcase } from "lucide-react";
import heroImage from "@/assets/Dinesh.png";

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Marketing Operations Lead | Driving Growth Through Automation";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                <span className="block">{displayedText}</span>
                <span className="border-r-2 border-primary animate-blink-caret"></span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground italic mb-8 animate-fade-in-up animate-delay-500">
                <span className="text-primary">"</span>
                The best marketing doesn't feel like marketing.
                <span className="text-primary">"</span>
                <div className="text-lg font-medium mt-2">— Tom Fishburne</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-300">
              <Button 
                onClick={() => scrollToSection("achievements")}
                className="btn-hero group"
              >
                <Briefcase className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Key Achievements
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="btn-outline-gold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 animate-fade-in-up animate-delay-500">
              <button 
                onClick={() => scrollToSection("about")}
                className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-sm mb-2">Discover More</span>
                <ArrowDown className="w-6 h-6 animate-bounce group-hover:text-primary" />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animate-delay-200">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 gold-glow">
                <img 
                  src={heroImage} 
                  alt="Dinesh Kumar Palani - Marketing Operations Leader" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
