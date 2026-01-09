import React, { useRef, useState } from "react";
import iconNext from "../assets/iconNext.webp";
import iconPlay from "../assets/iconPlay.webp";
import { Listvideo } from "../utils/dataMock";

const VideoSection = () => {
  const scrollRef = useRef(null);
  const [playingId, setPlayingId] = useState(null); // Lưu ID video đang phát
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

  // Logic: Mỗi lần click scroll đúng 1 video
  const scrollOneItem = (direction) => {
    if (scrollRef.current) {
      const item = scrollRef.current.firstChild; // Lấy item đầu tiên để đo kích thước
      const itemWidth = item.offsetWidth + 16; // Chiều rộng item + gap (16px)

      scrollRef.current.scrollBy({
        left: direction === "next" ? itemWidth : -itemWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePlayVideo = (id) => {
    if (playingId === id) {
      setPlayingId(null); // Nếu đang phát mà bấm lại thì dừng
    } else {
      setPlayingId(id); // Phát video được chọn
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
              src={item.urlVideo}
              className="w-full h-full object-cover"
              controls={playingId === item.id} // Chỉ hiện thanh điều khiển khi đang phát
              autoPlay={playingId === item.id}
              loop
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
