import React from "react";
import Footer from "./footer";

const Elections = () => {
  return (
    <div className="font-['Helvetica'] bg-white text-black min-h-screen">
      <div className="px-4 py-6 max-w-md mx-auto lg:max-w-4xl xl:max-w-6xl">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-400 rounded-full px-3 py-2 mb-4 lg:mb-6 max-w-lg mx-auto lg:mx-0">
          <svg
            className="w-5 h-5 text-gray-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by name, office, or district..."
            className="ml-2 w-full outline-none text-sm placeholder-gray-500"
          />
          <button className="ml-2 flex-shrink-0">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>

        {/* Header Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          {/* Left Column - Text Content */}
          <div className="lg:order-2">
            {/* Heading & Intro */}
            <h1 className="text-2xl font-bold leading-tight mb-2 lg:text-3xl xl:text-4xl lg:mb-4">
              Upcoming Elections in Kenya
            </h1>
            <p className="text-sm font-medium leading-snug mb-4 lg:text-base lg:mb-6">
              Find information about upcoming elections, including key dates and
              positions up for election.
            </p>

            {/* General Elections */}
            <div className="bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded w-fit mb-4 lg:text-base lg:px-6 lg:py-3 lg:mb-6">
              General Elections
              <br />
              Date: August 17, 2025
            </div>

            {/* Voter Registration Deadline */}
            <p className="text-sm font-semibold text-black lg:text-base">
              Voter Registration Deadline{" "}
              <span className="text-red-600 italic">July 21, 2025</span>
            </p>
          </div>

          {/* Right Column - Image Banner */}
          <div className="lg:order-1 mb-4 lg:mb-0">
            <img
              src="/assets/election-banner.png"
              alt="Election Banner"
              className="w-full rounded-md h-48 lg:h-64 xl:h-80 object-cover"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-8">
          {/* Left Column - Get Election Ready */}
          <div>
            <h2 className="text-xl font-bold mt-6 mb-3 lg:text-2xl lg:mt-8 lg:mb-4">
              Get Election Ready
            </h2>
            <div className="space-y-3 lg:space-y-4">
              <button className="w-full bg-[#0057A0] text-white font-semibold py-2 rounded lg:py-3 lg:text-lg hover:bg-[#004080] transition-colors">
                Register to Vote
              </button>
              <button className="w-full bg-[#0057A0] text-white font-semibold py-2 rounded lg:py-3 lg:text-lg hover:bg-[#004080] transition-colors">
                Check Your Registration Status
              </button>
              <button className="w-full bg-[#0057A0] text-white font-semibold py-2 rounded lg:py-3 lg:text-lg hover:bg-[#004080] transition-colors">
                Find Your Polling Station
              </button>
            </div>

            {/* Resources */}
            <p className="text-sm mt-4 lg:text-base lg:mt-6">
              View our <span className="font-bold">Resources</span> to find out
              more about the electoral process
            </p>
          </div>

          {/* Right Column - Campaign Trail & Media */}
          <div>
            <h2 className="text-xl font-bold mt-10 mb-6 lg:text-2xl lg:mt-8 lg:mb-4">
              Campaign Trail & Media
            </h2>

            <div className="bg-red-600 rounded overflow-hidden">
              <img
                src="/assets/candidate-campaign.png"
                alt="Candidate Campaign"
                className="w-full object-cover h-32 lg:h-48"
              />
              <div className="p-2 text-white text-sm lg:p-4 lg:text-base">
                <p className="font-semibold">Jane Doe Campaign</p>
                <p className="text-xs mt-1 lg:text-sm">
                  Date: <span className="font-medium">February 28, 2025</span>
                </p>
                <p className="text-xs lg:text-sm">
                  Location: <span className="font-medium">Nakuru</span>
                </p>
              </div>
            </div>

            {/* Media Notes */}
            <div className="text-sm mt-3 lg:text-base lg:mt-6">
              <h3 className="mt-6 font-bold lg:text-lg lg:mt-8">Media</h3>
              <p className="mt-4 lg:mt-6">
                Catch up on speeches, interviews, and campaign videos shared by
                the candidate
              </p>
              <div className="mt-4 space-y-2 lg:mt-6 lg:space-y-3">
                <p className="text-red-600 italic hover:text-red-800 cursor-pointer">
                  Watch Interview on Healthcare Policy
                </p>
                <p className="text-red-600 italic hover:text-red-800 cursor-pointer">
                  Speech at Youth Forum
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extra spacing before footer on larger screens */}
        <div className="mb-20 lg:mb-16"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Elections;
