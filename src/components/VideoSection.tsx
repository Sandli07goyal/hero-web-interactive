import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import womanTablet from "@/assets/woman-tablet.jpg";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video/Image Area */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl group cursor-pointer" onClick={togglePlay}>
              <img 
                src={womanTablet} 
                alt="Professional using tablet" 
                className="w-full h-auto"
              />
              {/* Play/Pause Button Overlay */}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-white" fill="white" />
                  ) : (
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  )}
                </div>
              </div>
              {/* Hidden video element for demo purposes */}
              <video 
                ref={videoRef}
                className="hidden"
                loop
              >
                {/* Video source would go here */}
              </video>
            </div>

            {/* Content Area */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fastest way to organize
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
