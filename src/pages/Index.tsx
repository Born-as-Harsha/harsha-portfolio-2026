import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import CircuitBackground from "@/components/CircuitBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import GitHubSection from "@/components/GitHubSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen">
    <CircuitBackground />
    <CustomCursor />
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <GitHubSection />
    <ResumeSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
