export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </div>

          <div className="card-premium animate-fade-in-up">
            <div className="text-xl leading-relaxed text-muted-foreground space-y-6">
              <p>
                Leading Marketing Operations at <span className="text-primary font-semibold">Zoho.com</span> (2020–present) with nearly 6 years of experience driving growth through org-wide marketing operations and regional communications aligned with compliance and automation.
              </p>
              
              <p>
                Collaborated with <span className="text-primary font-semibold">80+ product teams</span> across Marketing, Customer Experience, Business Intelligence, Collaboration, Finance, HR, Developer Tools, and Project Management suites — helping scale revenue, including MRR and ARR.
              </p>
              
              <p>
                Experienced in selling to <span className="text-primary font-semibold">SMBs, Mid-market, and Enterprise customers</span>.
              </p>
            </div>
          </div>

          {/* Operating Principles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Operating Principles</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Customer Obsessed", "Always Day 1", "Transnational Localism", "Building Systems & Processes"].map((principle, index) => (
                <div 
                  key={principle}
                  className={`pill-badge animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}