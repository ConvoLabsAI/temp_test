import React, { useEffect, useRef } from "react";
import "./tailwindstyles.css"; // Import the CSS file

const Info = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section');
          const cards = entry.target.querySelectorAll('.animate-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('card-visible');
            }, index * 200); // Stagger the card animations
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-blue-100 text-gray-800 overflow-hidden">
      
      <div ref={section1Ref} className="container mx-auto px-4 mb-20 opacity-0 not-animated">
        <div className="text-center mb-10 animate-title">
          <h2 className="text-5xl font-bold text-blue-700 mb-4">
            Client Data Journey
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive approach to understanding and fulfilling your data needs
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {[
              {
                number: 1,
                title: "Requirements Analysis",
                items: ["Business needs assessment", "Data scope definition", "Resource planning"]
              },
              {
                number: 2,
                title: "Expert Consultation",
                items: ["Industry specialist assignment", "Task definition", "Team selection"]
              },
              {
                number: 3,
                title: "Implementation Plan",
                items: ["Timeline creation", "Resource allocation", "Quality metrics setup"]
              }
            ].map((card, index) => (
              <div key={index} className="animate-card opacity-0 scale-95">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto animate-bounce-slow">
                    {card.number}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-center slide-in-right" style={{animationDelay: `${i * 0.2}s`}}>
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={section2Ref} className="container mx-auto px-4 mb-20 opacity-0 not-animated">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
          <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
            Interactive Data Annotation Workflow
          </h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {[
                { title: "Project Setup", desc: "Custom project creation using our no-code solution" },
                { title: "Data Processing", desc: "Automated data preprocessing and organization" },
                { title: "Quality Assurance", desc: "Multi-level validation and verification process" }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-lg animate-card opacity-0 scale-95 hover:bg-blue-100 transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block text-blue-500 text-4xl animate-pulse">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div ref={section3Ref} className="container mx-auto px-4 mb-20 opacity-0 not-animated">
        <div className="bg-gradient-to-r from-blue-100 via-purple-200 to-purple-300 rounded-3xl shadow-xl p-10 max-w-6xl mx-auto text-gray-900 transform hover:scale-105 transition-transform duration-500">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-700 drop-shadow-sm">
            AI-Assisted Quality Check System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Initial Scan", desc: "AI performs preliminary data analysis" },
              { title: "Region Detection", desc: "Automated annotation region identification" },
              { title: "Smart Assistance", desc: "AI suggestions and auto-corrections" },
              { title: "Final Verification", desc: "Human expert review and approval" }
            ].map((item, index) => (
              <div
                key={index}
                className="animate-card opacity-0 scale-95 transition-transform duration-500 hover:scale-100"
              >
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-white/70 transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;