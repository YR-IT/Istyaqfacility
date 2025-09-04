import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

interface ImageItem {
  url: string;
  title: string;
  description: string;
}

const DesignGallery = () => {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const images: ImageItem[] = [
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Luxury Living Room",
      description:
        "A modern luxury living room designed with a harmonious blend of comfort and sophistication. Plush seating, premium textured fabrics, and warm ambient lighting create a cozy yet opulent atmosphere. The large windows invite natural light, enhancing the earthy color palette and highlighting intricate décor elements."
    },
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      title: "Elegant Office Space",
      description:
        "An elegantly designed office space tailored for productivity and inspiration. Featuring minimalist furniture, ergonomic chairs, and abundant natural light, this workspace encourages focus while maintaining a serene, clutter-free environment. Thoughtfully placed indoor plants bring freshness and life to the interior."
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Contemporary Kitchen",
      description:
        "A sleek, contemporary kitchen boasting marble countertops, high-end appliances, and seamless cabinetry. The open layout maximizes functionality while maintaining a stylish aesthetic. Subtle LED lighting under the counters adds a modern touch, perfect for both cooking and social gatherings."
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Modern Workspace",
      description:
        "A cozy yet efficient workspace designed for modern professionals. The space incorporates ergonomic furniture, smart storage solutions, and a neutral color palette for a calm working environment. Accented with wooden finishes and soft task lighting, it creates the perfect setting for productivity."
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Creative Studio Design",
      description:
        "An inspiring creative studio that stimulates imagination with its vibrant color palette and open floor plan. Artistic wall displays, movable workstations, and natural light pouring in from large windows make it ideal for brainstorming, design work, and collaborative projects."
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Elegant Hallway",
      description:
        "A spacious, elegant hallway featuring polished wooden floors, soft overhead lighting, and carefully curated wall art. The neutral tones create a welcoming transition between rooms, while subtle decorative accents add personality without overwhelming the space."
    }
  ];

  const handlePrev = () => {
    setZoomIndex((prev) => (prev !== null ? (prev > 0 ? prev - 1 : images.length - 1) : 0));
    setShowInfo(false);
  };

  const handleNext = () => {
    setZoomIndex((prev) => (prev !== null ? (prev < images.length - 1 ? prev + 1 : 0) : 0));
    setShowInfo(false);
  };

  const handleClose = () => {
    setZoomIndex(null);
    setShowInfo(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomIndex !== null) {
        if (e.key === "ArrowLeft") handlePrev();
        else if (e.key === "ArrowRight") handleNext();
        else if (e.key === "Escape") handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomIndex]);

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="md:text-8xl text-stone-500 text-center mb-10 font-playfair font-semibold">
        Iconic Designs{" "}
        <p className="font-playfair mt-4 text-6xl text-black">
          That Inspire Worldwide
        </p>
      </h2>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
        {images.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            onClick={() => setZoomIndex(index)}
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Overlay */}
      {zoomIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative w-full max-w-6xl px-6 text-center">
            {/* Title + Info Button */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <h3 className="text-white text-2xl font-semibold">
                {images[zoomIndex].title}
              </h3>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setShowInfo((prev) => !prev);
                }}
                className="text-white text-xl hover:text-blue-400 transition"
                title="More Info"
              >
                <FaInfoCircle />
              </button>
            </div>

            {/* Info Box */}
            {showInfo && (
              <div className="bg-white/10 text-white p-8 rounded-lg mb-4 max-w-5xl mx-auto text-sm">
                {images[zoomIndex].description}
              </div>
            )}

            {/* Image + Arrows */}
            <div className="relative flex items-center justify-center">
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-0 text-white text-4xl px-4 py-2 hover:bg-white/10 transition rounded-full"
              >
                &#8592;
              </button>

              <img
                src={images[zoomIndex].url}
                alt={images[zoomIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />

              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-0 text-white text-4xl px-4 py-2 hover:bg-white/10 transition rounded-full"
              >
                &#8594;
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                handleClose();
              }}
              className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignGallery;
