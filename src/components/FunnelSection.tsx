import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Target, Zap, Heart, Megaphone, BarChart } from "lucide-react";

export function FunnelSection() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const funnelStages = [
    {
      id: "awareness",
      title: "Awareness (TOFU)",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      responsibilities: [
        "Branding", "Event Management & Promotions", "Influencer Marketing", 
        "Affiliate Marketing", "Community Marketing", "Vertical Based Marketing", 
        "Organic Lead Generation", "Transnational Localism"
      ]
    },
    {
      id: "consideration",
      title: "Interest & Consideration (MOFU)",
      icon: Target,
      color: "from-green-500 to-green-600",
      responsibilities: [
        "ABM", "Enterprise Marketing", "User Onboarding Flow", "Lead Enrichment", 
        "Lead Qualification", "Lead Nurturing", "Omnichannel Marketing", 
        "GTM (Go-To-Market)", "Partner Program", "Product Led Growth", "CRO"
      ]
    },
    {
      id: "conversion",
      title: "Conversion (BOFU)",
      icon: Zap,
      color: "from-primary to-accent",
      responsibilities: [
        "Funnel Optimization", "End-to-End Email Marketing", "Competitor Analysis", 
        "Revenue Growth", "Customer Success"
      ]
    },
    {
      id: "retention",
      title: "Retention & Loyalty",
      icon: Heart,
      color: "from-purple-500 to-purple-600",
      responsibilities: [
        "Customer Retention", "Loyalty Management"
      ]
    },
    {
      id: "advocacy",
      title: "Advocacy",
      icon: Megaphone,
      color: "from-pink-500 to-pink-600",
      responsibilities: [
        "Partner Program (long-term advocacy)"
      ]
    },
    {
      id: "enablers",
      title: "Cross-functional / Enablers",
      icon: BarChart,
      color: "from-indigo-500 to-indigo-600",
      responsibilities: [
        "Reporting & Feedback Loop", "Data Compliance", "Competitive Intelligence", 
        "Mentoring", "Research", "Collaboration", "Analytical practices"
      ]
    }
  ];

  return (
    <section id="funnel" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">Marketing Funnel Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive case study approach covering every stage of the customer journey
          </p>
        </div>

        <div className="space-y-6">
          {funnelStages.map((stage, index) => {
            const IconComponent = stage.icon;
            const isExpanded = expandedCards[stage.id];
            
            return (
              <div 
                key={stage.id}
                className={`card-expandable animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleCard(stage.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{stage.title}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {stage.responsibilities.length} responsibilities
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {stage.responsibilities.map((responsibility, idx) => (
                          <div 
                            key={idx}
                            className="bg-muted/50 px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
                          >
                            {responsibility}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}