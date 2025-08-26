import { Linkedin, Facebook, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navigationLinks = [
    { label: "Home", action: scrollToTop },
    { label: "About", action: () => scrollToSection("about") },
    { label: "Experience", action: () => scrollToSection("experience") },
    { label: "Work", action: () => scrollToSection("work") },
    { label: "Contact", action: () => scrollToSection("contact") }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dineshkumarpalani/",
      label: "LinkedIn"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/basebayofficial/",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/r15v4official_/",
      label: "Instagram"
    }
  ];

  return (
    <footer className="bg-royal-dark text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand Section */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Dinesh Kumar Palani</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Marketing Operations Leader driving growth through automation and strategic innovation. 
                  Building systems that scale and deliver measurable results.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center text-primary hover:text-accent transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Navigation</h4>
                <div className="space-y-2">
                  {navigationLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={link.action}
                      className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <a 
                      href="mailto:dineshkumar.pvb@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      dineshkumar.pvb@gmail.com
                    </a>
                  </p>
                  <p>
                    <a 
                      href="tel:+919940682352"
                      className="hover:text-primary transition-colors"
                    >
                      +91 9940682352
                    </a>
                  </p>
                  <p>Chennai, India</p>
                </div>

                {/* Back to Top Button */}
                <div className="mt-6">
                  <Button
                    onClick={scrollToTop}
                    variant="outline"
                    size="sm"
                    className="btn-outline-gold group"
                  >
                    <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                    Back to Top
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left">
              <p className="text-muted-foreground text-base mb-4 md:mb-0">
                © {new Date().getFullYear()} Dinesh Kumar Palani. All rights reserved.
              </p>
              <p className="text-muted-foreground text-base">
                Built with 💛 using React & Modern Web Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}