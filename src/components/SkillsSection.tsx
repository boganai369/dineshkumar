import { 
  Megaphone, 
  Users, 
  Search, 
  Globe, 
  Mail, 
  FileText, 
  TrendingUp, 
  Target, 
  MapPin 
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    { name: "Digital Marketing", icon: Globe, level: 95 },
    { name: "Lead Generation", icon: Users, level: 98 },
    { name: "Search Engine Marketing (SEM)", icon: Search, level: 94 },
    { name: "Search Engine Optimization (SEO)", icon: TrendingUp, level: 92 },
    { name: "Social Media Marketing", icon: Megaphone, level: 99 },
    { name: "Email & Content Marketing", icon: Mail, level: 99 },
    { name: "Demand & Growth Marketing", icon: Target, level: 94 },
    { name: "Marketing Strategy", icon: FileText, level: 99 },
    { name: "Tapping New Markets", icon: MapPin, level: 93 }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <div 
                key={skill.name}
                className={`card-premium group animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-base">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent rounded-full h-2 transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
