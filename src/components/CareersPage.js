import React from "react";
import './tailwindstyles.css';

const CareersPage = () => {
  return (
    <div className="bg-sky-100 font-sans min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold animate-fade-in-down">
            Careers at ConvolabsAI
          </h1>
          <p className="text-lg mt-2 font-medium animate-fade-in-up">
            Join us in shaping the future!
          </p>
          <p
            className="text-lg mt-4 font-semibold bg-clip-text text-black"
          >
            Fail Fast Learn Fast
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Why Join Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in-down">
            Why Join Our Team?
          </h2>
          <p
            className="text-lg font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-6 animate-fade-in-up"
          >
            We encourage exploring and experimenting your interest.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Environment",
                description:
                  "Work on cutting-edge technologies and solve challenging problems with a team of experts.",
              },
              {
                title: "Growth Opportunities",
                description:
                  "We provide training, mentorship, and resources to help you grow your career.",
              },
              {
                title: "Supportive Culture",
                description:
                  "Join a team that values collaboration, diversity, and a healthy work-life balance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in-down">
            Current Openings
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ul className="divide-y divide-gray-200">
              {[
                {
                  title: "Frontend Developer",
                  location: "Remote",
                  experience: "1+ years",
                },
                {
                  title: "Backend Developer",
                  location: "Onsite (Delhi)",
                  experience: "2+ years",
                },
                {
                  title: "UI/UX Designer",
                  location: "Remote",
                  experience: "1+ years",
                },
              ].map((job, index) => (
                <li
                  key={index}
                  className="py-4 flex justify-between items-center hover:bg-sky-200 transition duration-300 ease-in-out rounded-md px-4"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {job.title}
                    </h3>
                    <p className="text-gray-600">
                      Location: {job.location} | Experience: {job.experience}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Apply Now
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Resume Upload Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in-down">
            Submit Your Resume
          </h2>
          <form
            action="/upload"
            method="POST"
            encType="multipart/form-data"
            className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-2xl"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="font-bold bg-white py-6 text-center text-[#333]">
        <p>© 2025 ConvolabsAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CareersPage;