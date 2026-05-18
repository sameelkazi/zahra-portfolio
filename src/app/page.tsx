import ScrollyCanvas from "@/components/ScrollyCanvas";
import StoryScrollDemo from "@/components/StoryScrollDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <ScrollyCanvas />
      <StoryScrollDemo />
      <Footer />
    </main>
  );
}
