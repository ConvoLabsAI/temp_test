import React, { useState, useEffect, useRef } from "react";
import { FaProjectDiagram, FaRegComment, FaUsers, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [currentWord, setCurrentWord] = useState("AI");
  const [isFlipping, setIsFlipping] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const words = ["AI", "Marketing", "Autonomous Vehicles", "Customer Service", "HR", "Sales"];
  const wordRef = useRef(currentWord);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    let flipTimer;
    let resetTimer;

    const startFlip = () => {
      setIsFlipping(true);
      flipTimer = setTimeout(() => {
        const currentIndex = words.indexOf(wordRef.current);
        const newWord = words[(currentIndex + 1) % words.length];
        setCurrentWord(newWord);
        wordRef.current = newWord;
      }, 250);

      resetTimer = setTimeout(() => {
        setIsFlipping(false);
      }, 500);
    };

    interval = setInterval(startFlip, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(flipTimer);
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] bg-gradient-to-b from-white via-purple-50 to-purple-200">
      {/* Background Blobs - Adjusted for better mobile display */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full opacity-30">
          <div className="absolute top-0 -left-4 w-48 md:w-72 h-48 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-48 md:w-72 h-48 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-48 md:w-72 h-48 md:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          <div className="absolute -top-16 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-1000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:pt-20 md:pb-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Heading - Improved responsive text sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 text-gray-800 px-2">
            <span className="block">
              All{" "}
              <span
                className={`inline-block text-blue-600 transition-transform duration-500 ${
                  isFlipping ? "flip-backward" : ""
                }`}
              >
                {currentWord}
              </span>{" "}
              agent
            </span>
            <span className="block mt-2">need to run your Business</span>
          </h1>

          {/* Description - Adjusted padding and font sizes */}
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-gray-700 leading-relaxed px-4">
            <span className="block">Convolabs.AI taps into the full potential</span>
            <span className="block">
              of enterprise data to develop reliable Generative AI Solutions you can count on.
            </span>
          </p>

          {/* Search Bar - Mobile-friendly padding and sizing */}
          <div className="max-w-3xl mx-auto mb-8 md:mb-16 px-4">
            <div
              className={`relative group transition-all duration-300 ${
                searchFocus ? "scale-105" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white rounded-xl md:rounded-2xl shadow-xl">
                <div className="flex items-center p-3 md:p-4">
                  <FaSearch className="text-gray-400 text-lg md:text-xl mr-3 md:mr-4" />
                  <input
                    type="text"
                    placeholder="What AI solution are you looking for?"
                    className="w-full text-base md:text-lg text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none"
                    onFocus={() => setSearchFocus(true)}
                    onBlur={() => setSearchFocus(false)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Book a Demo Button - Updated with reduced size */}
          <div className="mb-8 md:mb-12">
            <button
              onClick={() => navigate("/signin")}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Join the Waitlist
            </button>
          </div>

          {/* Stats Grid - Improved grid responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 max-w-4xl mx-auto px-4">
            {[
              { icon: FaProjectDiagram, color: "blue", count: "500+", label: "Projects" },
              { icon: FaRegComment, color: "purple", count: "1,700,000+", label: "Annotations" },
              { icon: FaUsers, color: "indigo", count: "100+", label: "Clients" }
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/80 to-purple-100/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-300/50 border border-purple-200 group"
              >
                <stat.icon className={`text-3xl md:text-4xl mb-3 md:mb-4 mx-auto text-${stat.color}-600 group-hover:animate-bounce`} />
                <p className="text-xl md:text-2xl font-bold text-gray-800">{stat.count}</p>
                <p className="text-base md:text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flipBackward {
          0% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          50% {
            transform: rotateX(-90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }

        .flip-backward {
          animation: flipBackward 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}

export default Hero;