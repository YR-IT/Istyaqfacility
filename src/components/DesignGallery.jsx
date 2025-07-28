import React, { useEffect, useState } from "react";

const DesignGallery = () => {
  const [zoomIndex, setZoomIndex] = useState(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Luxury Living Room",
    },
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      title: "Elegant Office Space",
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Contemporary Kitchen",
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Modern Workspace",
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Creative Studio Design",
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Elegant Hallway",
    },
  ];

  const handlePrev = () => {
    setZoomIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setZoomIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleClose = () => {
    setZoomIndex(null);
  };

  // Add keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomIndex !== null) {
        if (e.key === "ArrowLeft") {
          handlePrev();
        } else if (e.key === "ArrowRight") {
          handleNext();
        } else if (e.key === "Escape") {
          handleClose();
        }
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
            {/* Title */}
            <h3 className="text-white text-2xl mb-6 font-semibold">
              {images[zoomIndex].title}
            </h3>

            {/* Image with arrows */}
            <div className="relative flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-0 text-white text-4xl px-4 py-2 hover:bg-white/10 transition rounded-full"
              >
                &#8592;
              </button>

              {/* Zoomed Image */}
              <img
                src={images[zoomIndex].url}
                alt={images[zoomIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />

              {/* Right Arrow */}
              <button
                onClick={(e) => {
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
              onClick={(e) => {
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
