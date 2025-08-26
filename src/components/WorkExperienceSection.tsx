import { Briefcase, Calendar, MapPin } from "lucide-react";

export function WorkExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-premium animate-fade-in-up">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center gold-glow">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Marketing Operations Lead</h3>
                    <p className="text-xl text-primary font-semibold mb-2">Zoho.com</p>
                  </div>
                  
                  <div className="flex flex-col lg:items-end text-muted-foreground">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2020 – Present</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Chennai, India</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="pill-badge">6+ Years Experience</span>
                </div>
                
                <div className="text-muted-foreground space-y-4">
                  <p className="text-xl">
                    Leading comprehensive marketing operations across Zoho's extensive product ecosystem, 
                    driving growth through strategic automation and cross-functional collaboration.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Key Responsibilities</h4>
                      <ul className="text-base space-y-1">
                        <li>• Org-wide marketing operations</li>
                        <li>• Regional communications</li>
                        <li>• Compliance & automation</li>
                        <li>• Cross-team collaboration</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Impact Areas</h4>
                      <ul className="text-base space-y-1">
                        <li>• Revenue scaling (MRR & ARR)</li>
                        <li>• 80+ product teams</li>
                        <li>• SMB to Enterprise customers</li>
                        <li>• Marketing automation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}