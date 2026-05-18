import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const skills = [
    "Social Media Marketing",
    "Content Ideation & Planning",
    "Communication & Coordination",
    "Caption Writing & Copy Basics",
    "Brand Awareness & Trend Research",
    "Team Collaboration",
  ];

  return (
    <footer className="bg-black border-t border-white/10 text-white py-24 px-8 md:px-24 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-4xl font-bold tracking-tight mb-8">Let&apos;s Connect</h3>
          <p className="text-white/60 mb-8 max-w-sm">
            I&apos;m currently seeking hands-on internship opportunities in social media marketing, communications, and media operations.
          </p>
          <div className="space-y-4">
            <a href="mailto:sysayedzahra@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              sysayedzahra@gmail.com
            </a>
            <a href="tel:+919820472780" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              +91 98204 72780
            </a>
            <div className="flex items-center gap-4 text-white/80">
              <MapPin className="w-5 h-5" />
              Jogeshwari (West), Mumbai 400102
            </div>
            <a href="https://www.linkedin.com/in/zahra-sayed-65a9873b4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Skills & Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
          <div className="flex flex-wrap gap-3 mb-12">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 rounded-full border border-white/20 text-sm bg-white/5 backdrop-blur-sm text-white/80">
                {skill}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="space-y-4 text-white/80">
            <div>
              <p className="font-medium text-white">St. Xavier&apos;s College</p>
              <p className="text-sm">Junior College (HSC) • Commerce • 2025-2026</p>
            </div>
            <div>
              <p className="font-medium text-white">Jankidevi Public School</p>
              <p className="text-sm">Secondary School (ICSE) • 2023-2024</p>
            </div>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Zahra Sayed. All rights reserved.</p>
      </div>
    </footer>
  );
}
