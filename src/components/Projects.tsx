import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Brand Audit",
    category: "Brand Communication",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "Digital Storytelling",
    category: "Social Media Strategy",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Content Ideation",
    category: "Audience Engagement",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop",
  },
  {
    title: "Trend Research",
    category: "Media Operations",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section className="relative bg-black min-h-screen py-32 px-8 md:px-24 text-white z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Selected Work
          </h3>
          <div className="h-[1px] w-full bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] aspect-square md:aspect-[4/3] flex flex-col justify-end p-8 cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

              {/* Content */}
              <div className="relative z-10 flex justify-between items-end w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/70 mb-2 font-medium">
                    {project.category}
                  </p>
                  <h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h4>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 -rotate-45 group-hover:rotate-0 transform origin-center">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
