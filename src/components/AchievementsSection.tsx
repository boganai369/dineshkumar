import { Trophy, DollarSign, Users, Award, TrendingUp, Star } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      icon: DollarSign,
      title: "$2.7M Revenue Generation",
      description: "Generated $2.7M in 2 months by driving monthly-to-annual upgrades for top Zoho products through a Year-End Wallet Program campaign.",
      metric: "$2.7M",
      timeframe: "2 months",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "$480K Cost Optimization",
      description: "Slashed $480K in AdWords spend for Zoho Forms by reverse engineering and analyzing signup trends to eliminate wasteful ad spend.",
      metric: "$480K",
      timeframe: "Saved",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "1700+ Event Tickets Sold",
      description: "Achieved 1700+ ticket sales within three weeks for Zoholics India (Zoho's flagship event) through an omnichannel strategy with hyper-personalized campaigns.",
      metric: "1700+",
      timeframe: "3 weeks",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: "$50K+ Free to Paid Conversion",
      description: "Generated more than $50K for Free to Paid Campaigns through strategic optimization and targeted messaging.",
      metric: "$50K+",
      timeframe: "Campaign",
      color: "from-primary to-accent"
    },
    {
      icon: Award,
      title: "Academic Excellence - 1st Place SSLC",
      description: "Secured 1st place in High School examination (SSLC) - 10th Grade - School Level - 98.4%",
      metric: "98.4%",
      timeframe: "School 1st",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Star,
      title: "District Champion",
      description: "District 1st place in high school examination in Northern Part of Greater Chennai Corporation",
      metric: "1st Place",
      timeframe: "District Level",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">Key Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measurable impact across revenue generation, cost optimization, and operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            
            return (
              <div 
                key={index}
                className={`card-premium group animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="text-center">
                  <div className="mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 gold-glow group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="mb-2">
                      <div className="text-3xl font-bold text-primary mb-1">{achievement.metric}</div>
                      <div className="text-base text-muted-foreground">{achievement.timeframe}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}