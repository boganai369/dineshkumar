import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      institution: "Thiagarajar College of Engineering",
      degree: "B.E. Computer Science, First Class",
      period: "2015–2019",
      type: "University"
    },
    {
      institution: "GreenPark Matriculation Higher Secondary School",
      degree: "Bio-Mathematics",
      period: "2013–2015",
      score: "96.8%",
      type: "Higher Secondary"
    },
    {
      institution: "Vellayan Chettiar Higher Secondary School",
      degree: "Secondary Education",
      period: "2008–2013", 
      score: "98.4%",
      type: "Secondary"
    }
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">Education Timeline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`card-premium animate-fade-in-up animate-delay-${(index + 1) * 200}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-primary font-semibold mb-1">{edu.degree}</p>
                    {edu.score && (
                      <p className="text-muted-foreground">Score: <span className="text-primary font-semibold">{edu.score}</span></p>
                    )}
                    <div className="mt-2">
                      <span className="pill-badge text-xs">{edu.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}