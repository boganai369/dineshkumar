import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dineshkumar.pvb@gmail.com",
      href: "mailto:dineshkumar.pvb@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9940682352",
      href: "tel:+919940682352"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Chennai, India",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/dineshkumarpalani/"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to drive growth through innovative marketing operations? Let's connect and explore opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card-premium">
              <h4 className="font-bold text-foreground mb-4">Why Work With Me?</h4>
              <div className="space-y-3 text-base">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>6+ years marketing operations expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>$2.7M+ revenue generated in campaigns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>80+ cross-functional teams collaborated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Multiple successful ventures founded</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-premium">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`transition-all duration-300 focus:scale-105 ${
                    errors.name 
                      ? "border-destructive focus:border-destructive" 
                      : "focus:border-primary"
                  }`}
                />
                {errors.name && (
                  <div className="flex items-center space-x-1 mt-1 text-destructive text-base">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`transition-all duration-300 focus:scale-105 ${
                    errors.email 
                      ? "border-destructive focus:border-destructive" 
                      : "focus:border-primary"
                  }`}
                />
                {errors.email && (
                  <div className="flex items-center space-x-1 mt-1 text-destructive text-base">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`transition-all duration-300 focus:scale-105 resize-none ${
                    errors.message 
                      ? "border-destructive focus:border-destructive" 
                      : "focus:border-primary"
                  }`}
                />
                {errors.message && (
                  <div className="flex items-center space-x-1 mt-1 text-destructive text-base">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full group"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}