import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { MdMail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import logo from "./logo.jpg";
import "./tailwindstyles.css";

const AboutUs = () => {
  return (
    <section className="bg-gradient-custom text-custom-gray py-32 relative overflow-hidden w-full">
      <div className="container mx-auto px-custom max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Section */}
          <div className="md:col-span-4 space-y-10">
            <div className="transform hover-scale transition-custom">
              <div className="flex items-center space-x-4 mb-6">
                <img src={logo} alt="ConvolabsAI Logo" className="w-10 h-10 rounded-lg" />
                <h1 className="text-3xl text-custom-blue">ConvolabsAI</h1>
              </div>
              <p className="text-lg leading-relaxed mb-8">
                Empowering Innovation with AI: Tailored Solutions for your organizations, Intelligence and Growth
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center link-custom transition-custom group">
                <MdLocationOn className="icon-custom mr-3 text-custom-blue group-hover-scale" />
                <p className="text-base">123 AI Innovation Drive, Tech City, India</p>
              </div>
              <div className="flex items-center link-custom transition-custom group">
                <MdAccessTime className="icon-custom mr-3 text-custom-blue group-hover-scale" />
                <p className="text-base">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Section: Three Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Column 1: Company */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-custom pb-2">Company</h3>
              <ul className="space-y-4">
                {["Careers", "About Us", "Blog", "Partners", "Developers"].map((item) => (
                  <li key={item}>
                    <a href="#" className="link-custom transition-custom">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Legal */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-custom pb-2">Legal</h3>
              <ul className="space-y-4">
                {["Terms", "Privacy", "Security", "Compliance", "Support"].map((item) => (
                  <li key={item}>
                    <a href="#" className="link-custom transition-custom">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact and Socials */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-custom pb-2">Connect</h3>
              <ul className="space-y-6">
                <li>
                  <a href="mailto:sales@convolabs.ai" className="flex items-center link-custom transition-custom group">
                    <MdMail className="icon-custom mr-3 text-custom-blue group-hover-scale" />
                    <span>sales@convolabs.ai</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919999999999" className="flex items-center link-custom transition-custom group">
                    <MdPhone className="icon-custom mr-3 text-custom-blue group-hover-scale" />
                    <span>+91 99999 99999</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center space-x-4">
                    {[FaTwitter, FaLinkedinIn, FaFacebook, FaGithub, FaInstagram].map((Icon, index) => (
                      <a key={index} href="#" className="link-custom transition-custom hover-scale">
                        <Icon className="icon-custom" />
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full decorative-blur -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full decorative-blur translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default AboutUs;
