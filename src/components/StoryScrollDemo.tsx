import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

export default function StoryScrollDemo() {
  return (
    <div className="relative z-30">
      <FlowArt aria-label="Zahra Sayed Story">
        
        {/* Slide 1 — Work Vid 1 */}
        <FlowSection aria-label="Project One" style={{ backgroundColor: "#fd5200", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Project Showcase</p>
          <hr className="my-[2vw] border-none border-t border-black opacity-100" />
          <div className="flex flex-col lg:flex-row gap-[4vw] items-center flex-1">
            {/* Video */}
            <div className="w-full lg:w-[55%] aspect-video rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 ring-1 ring-white/10">
              <video
                src="/videos/work-vid-1.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            {/* Description */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              <h2 className="text-[clamp(2.5rem,7vw,8rem)] font-bold leading-[0.85] uppercase tracking-tight">
                Brand
                <br />
                Film
              </h2>
              <hr className="my-[1vw] border-none border-t border-black/40 opacity-100" />
              <p className="max-w-[45ch] text-[clamp(0.95rem,2vw,1.6rem)] font-normal leading-relaxed opacity-90">
                A cinematic brand film crafted to capture the essence of a brand&apos;s identity through visual storytelling and emotive narrative.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Slide 2 — Work Vid 2 (Creative Social First) */}
        <FlowSection aria-label="Creative Social First" style={{ backgroundColor: "#000", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Creative Social First</p>
          <hr className="my-[2vw] border-none border-t border-white/60" />
          <div className="flex flex-col lg:flex-row-reverse gap-[4vw] items-center flex-1">
            {/* Video */}
            <div className="w-full lg:w-[55%] aspect-video rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 ring-1 ring-white/10">
              <video
                src="/videos/work-vid-2.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            {/* Description */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              <h2 className="text-[clamp(2.5rem,7vw,8rem)] font-bold leading-[0.85] uppercase tracking-tight">
                Creative
                <br />
                Social
                <br />
                First
              </h2>
              <hr className="my-[1vw] border-none border-t border-white/30 opacity-100" />
              <p className="max-w-[45ch] text-[clamp(0.95rem,2vw,1.6rem)] font-normal leading-relaxed opacity-80">
                A social-first creative campaign designed to resonate with digital-native audiences — built for scroll-stopping engagement and shareability.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Slide 3 — Work Vid 3 (Mother's Day) */}
        <FlowSection aria-label="Mother's Day Campaign" style={{ backgroundColor: "#F5F0E8", color: "#000" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Mother&apos;s Day Campaign</p>
          <hr className="my-[2vw] border-none border-t border-black/60" />
          <div className="flex flex-col lg:flex-row gap-[4vw] items-center flex-1">
            {/* Video */}
            <div className="w-full lg:w-[55%] aspect-video rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 ring-1 ring-black/10">
              <video
                src="/videos/work-vid-3.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            {/* Description */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              <h2 className="text-[clamp(2.5rem,7vw,8rem)] font-bold leading-[0.85] uppercase tracking-tight">
                Mother&apos;s
                <br />
                Day
              </h2>
              <hr className="my-[1vw] border-none border-t border-black/30 opacity-100" />
              <p className="max-w-[45ch] text-[clamp(0.95rem,2vw,1.6rem)] font-normal leading-relaxed opacity-80">
                A heartfelt Mother&apos;s Day campaign that celebrates the bond between mothers and their children — emotional, warm, and deeply personal storytelling.
              </p>
            </div>
          </div>
        </FlowSection>

      </FlowArt>
    </div>
  );
}
