"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120; // 0 to 119

const getFrameUrl = (index: number) =>
  `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to frame index (0 to 119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages[i] = img;
            resolve(true);
          };
          img.onerror = () => {
            console.error(`Failed to load image ${i}`);
            resolve(false);
          };
        });
      }
      setImages(loadedImages);
      setLoaded(true);
    };

    loadImages();
  }, []);

  const renderFrame = (index: number) => {
    if (!images[index] || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Set canvas dimensions to match window (handle high DPI if needed, but keeping it simple)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Object-fit: cover logic
    const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
    const centerX = (canvas.width - img.width * ratio) / 2;
    const centerY = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerX,
      centerY,
      img.width * ratio,
      img.height * ratio
    );
  };

  // Render first frame when loaded or resized
  useEffect(() => {
    if (loaded && images.length > 0) {
      renderFrame(0);
      
      const handleResize = () => {
        renderFrame(Math.round(frameIndex.get()));
      };
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [loaded, images]);

  // Render on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (loaded) {
      renderFrame(Math.round(latest));
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-white text-sm tracking-widest uppercase flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Initializing Sequence...
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ objectFit: "cover" }}
        />
        {/* Overlay Parallax Text */}
        <Overlay scrollYProgress={scrollYProgress} />
        {/* Overlay gradient to blend with next section */}
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
