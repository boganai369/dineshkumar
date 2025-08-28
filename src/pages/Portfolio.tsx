import { NavigationHeader } from "@/components/NavigationHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";
import { FunnelSection } from "@/components/FunnelSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { CompaniesSection } from "@/components/CompaniesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      
      <main>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <WorkExperienceSection />
         <CompaniesSection />
         <ContactSection />
        <EducationSection />
        <FunnelSection />
        <SkillsSection />
        
        
      </main>
      
      <Footer />
    </div>
  );
}
