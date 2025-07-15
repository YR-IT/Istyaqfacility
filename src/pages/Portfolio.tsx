import { Heart, Eye } from 'lucide-react';
import '../components/stylesheet/Main.css';
import backgroundVideo from '../assests/7578554-uhd_3840_2160_30fps.mp4';

const Portfolio = () => {
  const projects = [
    {
      title: 'Modern 4BHK Duplex - Mohali',
      category: 'Living Room',
      description: 'A luxurious duplex with a modern living room designed for comfort and style. Featuring elegant furniture, lighting, and layout that reflects contemporary aesthetics.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Premium 2BHK Flat - Mohali',
      category: 'Bedroom',
      description: 'A cozy and spacious bedroom setup with built-in wardrobes, ambient lighting, and a peaceful color palette designed to ensure a relaxing experience.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Bank HQ Showroom - Chandigarh',
      category: 'Office',
      description: 'A corporate showroom redesigned with sleek furniture, modern wall finishes, and functional lighting to enhance productivity and presentation.',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Luxury Master Bathroom',
      category: 'Bathroom',
      description: 'Premium fixtures, ambient lighting, and elegant design elevate this master bathroom into a private spa-like retreat.',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Luxury Bungalow - Chandigarh',
      category: 'Living Room',
      description: 'Colonial-style renovation with modern upgrades, high ceilings, rich textures, and sophisticated interiors throughout.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Modern Kitchen Design',
      category: 'Kitchen',
      description: 'An elegant kitchen space with modular cabinetry, built-in appliances, and a layout optimized for daily use and entertaining guests.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    }
  ];

  return (
    <>
     
      <section className="relative w-full h-[100vh] flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        <div className="relative z-10 px-4">
          <h2 className="text-white text-5xl font-bold mb-6 font-playfair">OUR FINEST</h2>
          <p className="text-white text-2xl max-w-3xl mx-auto font-playfair">
            "We believe true design lies in the details each project shaped with care, purpose, and permanence."
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center mb-20 gap-6 md:gap-12`}
            >
             <div className="md:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/2 w-full">
                <span className="inline-block text-base bg-gray-200 text-gray-800 px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-700 mb-5">{project.description}</p>

                <div className="flex items-center justify-between flex-wrap text-gray-600 mb-4">
                  <div className="flex space-x-6 text-base">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-5 h-5" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-5 h-5" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                </div>

                <button className="mt-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
