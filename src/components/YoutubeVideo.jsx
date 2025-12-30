import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "pKKbsowu_p8";

const YoutubeVideo = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-[#020817] py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
          SCH ’26 Promo
        </h2>

        {/* Video Wrapper */}
        <div
          className="
            relative
            w-full
            aspect-[16/9]
            rounded-xl
            overflow-hidden
            border border-white/10
            mx-auto
          "
        >
          {/* ^ CRITICAL CHANGE: aspect-[16/9] ensures the box matches the video height exactly. */}

          {!play ? (
            /* Thumbnail */
            <button
              onClick={() => setPlay(true)}
              className="absolute inset-0 w-full h-full group"
            >
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="SCH 26 Promo"
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition">
                  <Play className="w-7 h-7 md:w-9 md:h-9 text-black ml-1" />
                </div>
              </div>
            </button>
          ) : (
            /* Iframe */
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="SCH 26 Promo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full block"
            />
          )}
        </div>

      </div>
    </section>
  );
};

export default YoutubeVideo;