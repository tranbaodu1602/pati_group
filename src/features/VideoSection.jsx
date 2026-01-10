import React, { useRef, useState } from "react";
import iconNext from "../assets/iconNext.webp";
import iconPlay from "../assets/iconPlay.webp";
import { Listvideo } from "../utils/dataMock";

const VideoSection = () => {
  const scrollRef = useRef(null);
  const videoRefs = useRef({});
  const [playingId, setPlayingId] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      const progress =
        totalScrollable > 0 ? (scrollLeft / totalScrollable) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  // Scroll by Item
  const scrollOneItem = (direction) => {
    if (scrollRef.current) {
      const item = scrollRef.current.firstChild;
      const itemWidth = item.offsetWidth + 16;

      scrollRef.current.scrollBy({
        left: direction === "next" ? itemWidth : -itemWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePlayVideo = (id) => {
    if (playingId && videoRefs.current[playingId]) {
      videoRefs.current[playingId].pause();
    }
    setPlayingId(id);
    // Phát video ngay khi click icon play không đợi bậy video control của thẻ video
    if (videoRefs.current[id]) {
      videoRefs.current[id].play().catch((error) => {
        console.error("Video play failed:", error);
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-2 ">
      {/* Container Video */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide md:flex-nowrap"
      >
        {Listvideo.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer flex-shrink-0 
                       w-[75%] sm:w-[45%] md:w-[calc(25%-12px)] 
                       snap-start overflow-hidden rounded-lg shadow-md aspect-[9/16] bg-black"
          >
            <video
              ref={(el) => (videoRefs.current[item.id] = el)}
              src={item.urlVideo}
              className="w-full h-full object-cover"
              controls={playingId === item.id}
              loop
              muted={playingId !== item.id}
              onClick={() => handlePlayVideo(item.id)}
            />

            {playingId !== item.id && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/20"
                onClick={() => handlePlayVideo(item.id)}
              >
                <div className="p-3 transition-all transform group-hover:scale-110">
                  <img src={iconPlay} alt="Play" className="w-8 h-8" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between gap-20 ">
        <div className="flex-1 h-1 bg-gray-200 relative  ">
          <div
            className="absolute h-full  bg-[#00816a] transition-all duration-300"
            style={{
              width: "15%",
              left: `${scrollProgress * 0.7}%`,
            }}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scrollOneItem("prev")}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white"
          >
            <img src={iconNext} alt="pre-icon" />
          </button>
          <button
            onClick={() => scrollOneItem("next")}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white "
          >
            <img src={iconNext} alt="next-icon" className="rotate-180 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
