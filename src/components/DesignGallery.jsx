import React, { useState } from "react";

const DesignGallery = () => {
  const [zoomImage, setZoomImage] = useState(null);

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

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="md:text-8xl text-stone-500 text-center mb-10 font-playfair font-semibold">
        Iconic Designs{" "}
        <p className="font-playfair mt-4 text-6xl text-black">That Inspire Worldwide</p>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
        {images.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            onClick={() => setZoomImage(item.url)}
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
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img src={zoomImage} alt="Zoomed" className="max-w-5xl w-full max-h-[90vh] object-contain" />
        </div>
      )}
    </section>
  );
};

export default DesignGallery;
