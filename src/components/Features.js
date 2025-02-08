import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const Features = () => {
  const navigate = useNavigate();
  const features = [
    {
      id: 1,
      image: "https://www.shutterstock.com/image-photo/medical-technology-doctor-use-ai-600nw-2304284475.jpg",
      title: "Revolutionizing Healthcare: AI Voice Technology's Transformative Impact",
      description: "The healthcare landscape is undergoing a radical transformation, driven by artificial intelligence's unprecedented capabilities...",
      bgColor: "#F3E5F5",
    },
    {
      id: 2,
      image: "https://img.freepik.com/premium-photo/doctors-focused-hand-writes-prescription-symbolizing-precision-medical-care_1320055-12962.jpg",
      title: "Precision in AI: The Critical Role of Advanced Data Annotation",
      description: "Data annotation is the unsung hero of artificial intelligence—a meticulous craft that transforms raw, unstructured data into intelligence...",
      bgColor: "#FFF8E5",
    },
    {
      id: 3,
      image: "https://img.freepik.com/premium-photo/futuristic-laboratory-medical-professionals-conducting-advanced-tests_886588-32436.jpg",
      title: "Breakthrough AI Content Generation: Beyond Speed to Meaningful Communication",
      description: "Content generation powered by artificial intelligence transcends mere text production. It's about crafting meaningful...",
      bgColor: "#E7FFEB",
    },
    {
      id: 4,
      image: "https://elearningindustry.com/wp-content/uploads/2019/12/4-Benefits-Of-AI-In-Personalized-Learning.jpg",
      title: "The education sector is on the brink of a revolution, with artificial intelligence paving the way for personalized learning experience...",
      description: "As AI becomes increasingly integrated into healthcare systems, addressing ethical considerations and maintaining transparency has become paramount. Explore how healthcare providers are balancing innovation with patient trust...",
      bgColor: "#E3F2FD",
    },
    {
      id: 5,
      image: "https://media.licdn.com/dms/image/D4D12AQGjuZbRz71a7A/article-cover_image-shrink_720_1280/0/1715692030331?e=2147483647&v=beta&t=v__SrpVtFwYZnGu-ETmaA7R0czEdBJ5zw7Hl3gKFer0",
      title: "Traditional education systems often struggle to address the diverse learning needs of students. One-size-fits-all approaches can ...",
      description: "Discover how artificial intelligence is revolutionizing personalized medicine by analyzing vast amounts of patient data to create tailored treatment plans that consider individual genetic profiles, lifestyle factors, and medical history...",
      bgColor: "#F3E5F5",
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSlide = (direction) => {
    if (direction === 'right') {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const getVisibleFeatures = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + features.length) % features.length;
      result.push({ ...features[index], position: i });
    }
    return result;
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-sky-100 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-16 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700`}>
          Blogs to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            know more
          </span>
        </h2>

        <div className="relative h-[600px] flex items-center justify-center">
          <button
            onClick={() => handleSlide('left')}
            className="absolute left-4 z-20 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <IoChevronBackOutline className="w-6 h-6 text-gray-600" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            {getVisibleFeatures().map((feature, index) => {
              const isCenter = feature.position === 0;
              const transformValue = `translateX(${feature.position * 100}%) scale(${isCenter ? 1.1 : 0.8})`;
              const zIndex = isCenter ? 10 : 0;
              const opacity = isCenter ? 1 : 0.6;

              return (
                <div
                  key={`${feature.id}-${index}`}
                  onClick={() => handleCardClick(feature.id)}
                  className="absolute cursor-pointer shadow-lg rounded-lg transition-all duration-500 hover:shadow-2xl"
                  style={{
                    transform: transformValue,
                    zIndex,
                    opacity,
                    width: '400px',
                    backgroundColor: feature.bgColor,
                    transition: 'all 0.5s ease-in-out',
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 line-clamp-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-base line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => handleSlide('right')}
            className="absolute right-4 z-20 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <IoChevronForwardOutline className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-blue-500 w-4' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;