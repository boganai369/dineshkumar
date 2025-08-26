import { Building, ExternalLink, DollarSign, Calendar, MapPin } from "lucide-react";

export function CompaniesSection() {
  const companies = [
    {
      name: "Basebay",
      role: "Co-founder",
      description: "Co-founded an electronics e-commerce store (similar to BestBuy) and scaled it to $50K MRR in just 3 months",
      metric: "$50K MRR",
      timeframe: "3 months",
      link: "https://www.facebook.com/basebayofficial/",
      type: "E-commerce"
    },
    {
      name: "Gokaart",
      role: "Founder",
      description: "Technology-focused venture with innovative solutions",
      link: "https://www.indiafilings.com/search/gokaart-technologies-llp-AAX-6491",
      type: "Technology"
    },
    {
      name: "Zerroo",
      role: "Founder", 
      description: "Digital solutions and e-commerce platform",
      link: "https://www.zerroo.in/",
      type: "Digital Platform"
    },
    {
      name: "MTIKK Restaurant",
      role: "Founder",
      description: "Founded MTIKK, a South Indian restaurant, and scaled it to $15K in monthly recurring revenue.",
      metric: "$15K MRR",
      link: "https://www.zomato.com/chennai/madurais-thattu-idly-kari-kulambu-potheri",
      type: "Food & Beverage"
    },
    {
      name: "Instagram Network",
      role: "Founder",
      description: "Founded and scaled a network of Instagram pages from 0 to 50K followers within 3 months by leveraging growth algorithms and the creator economy, generating over $6,000 through affiliate marketing",
      metric: "50K followers, $6K+",
      timeframe: "3 months",
      link: "https://www.instagram.com/r15v4official_/",
      type: "Social Media"
    }
  ];

  return (
    <section id="companies" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">Companies Founded</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entrepreneurial ventures across diverse industries, showcasing versatility and business acumen
          </p>
        </div>

        <div className="space-y-6">
          {companies.map((company, index) => (
            <div 
              key={index}
              className={`card-premium group animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {company.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                        <span className="pill-badge text-xs">{company.type}</span>
                        <span className="text-primary font-semibold text-sm">{company.role}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                      {company.description}
                    </p>
                    
                    {(company.metric || company.timeframe) && (
                      <div className="flex items-center space-x-4 text-base mb-3">
                        {company.metric && (
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4 text-primary" />
                            <span className="text-primary font-semibold">{company.metric}</span>
                          </div>
                        )}
                        {company.timeframe && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{company.timeframe}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0 lg:ml-4">
                  <a 
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors font-medium"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="mt-8 text-center">
          <div className="card-premium">
            <h4 className="font-semibold text-foreground mb-4">Additional Business Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
                <a 
                href="https://www.linkedin.com/in/zerabiz-ecom-llp-883966348/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors text-base"
              >
                <span>Zerabiz E-com LLP</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}