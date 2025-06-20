import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import Footer from "./footer";

const Resources = () => {
  return (
    <div className="font-sans text-black min-h-screen bg-white">
      <div className="max-w-md mx-auto lg:max-w-4xl xl:max-w-6xl px-4 py-6">
        {/* Page Title */}
        <div className="text-center mt-6 mb-8 lg:mb-12">
          <h1 className="text-[2rem] font-extrabold lg:text-3xl xl:text-4xl">
            Resources
          </h1>
        </div>

        {/* Search Component */}
        <div className="my-4 lg:my-6 max-w-lg mx-auto lg:mx-0">
          <SearchBar />
        </div>

        {/* Header Text */}
        <div className="mb-6 lg:mb-10 lg:text-center xl:max-w-4xl xl:mx-auto">
          <h2 className="text-xl font-bold lg:text-2xl xl:text-3xl leading-tight">
            Understand the System.
            <br />
            Empower Your Vote.
          </h2>
          <p className="text-sm mt-2 lg:text-base lg:mt-4 xl:text-lg">
            From civic education to role breakdowns — here's everything you need
            to become an informed voter.
          </p>
        </div>

        {/* Icon Buttons Grid */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs mb-8 lg:grid-cols-6 lg:gap-4 lg:text-sm lg:mb-12">
          {[
            "Guides",
            "Downloads",
            "FAQs",
            "Dates & Deadlines",
            "Policy Information",
            "Accessibility Support",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F2D399] py-3 rounded flex flex-col items-center justify-center h-20 shadow hover:bg-yellow-300 hover:shadow-md transition-all cursor-pointer lg:h-24 lg:py-4"
            >
              {/* Placeholder icon */}
              <div className="w-6 h-6 bg-gray-400 mb-1 rounded lg:w-8 lg:h-8 lg:mb-2"></div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Left Column */}
          <div className="space-y-8 lg:space-y-10">
            {/* Voter Education */}
            <div>
              <h3 className="font-bold text-lg mb-1 lg:text-xl lg:mb-2">
                Voter Education
              </h3>
              <p className="text-sm mb-10 lg:text-base lg:mb-4 mt-4">
                Learn about the voting process, your rights, and how to make
                your voice heard.
              </p>
              <img
                src="src/assets/barbara-burgess-3uiVo7ala9k-unsplash.png"
                alt="Voting is my superpower"
                className="rounded mb-4 w-48 m-auto h-48 lg:h-56 object-cover"
              />

              <div className="flex flex-col gap-3 lg:gap-4 items-center mt-10">
                <button className="bg-[#003366] text-white text-sm rounded px-4 py-2 w-full md:w-auto">
                  Register to Vote
                </button>
                <button className=" bg-[#003366] text-white text-sm rounded px-4 py-2 w-full md:w-auto">
                  Check Your Registration Status
                </button>
                <button className="bg-[#003366] text-white text-sm rounded px-4 py-2 w-full md:w-auto">
                  Find Your Polling Station
                </button>
              </div>
            </div>

            {/* Candidate Information */}
            <div>
              <h3 className="font-bold text-lg mb-5 lg:text-xl lg:mb-2">
                Candidate Information
              </h3>
              <h1 className="text-xl mb-3 lg:text-base lg:mb-4">
                Access comprehensive information about candidates.
              </h1>
              <p className="text-sm mb-3 lg:text-base lg:mb-4">
                Our candidate information is up to date and verified from
                credible sources
              </p>
              <Link to="/elections" className="flex flex-col items-center">
                <button className="bg-[#007aff] w-70 text-white py-2 px-4 rounded-4xl  m-10 lg:py-3 lg:text-lg hover:bg-[#0056cc] transition-colors">
                  Explore Candidates Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-8 lg:mt-0 space-y-8 lg:space-y-10">
            {/* Civic Engagement */}
            <div>
              <h3 className="font-bold mb-10 text-lg  lg:text-xl lg:mb-2">
                Civic Engagement
              </h3>

              <img
                src="src/assets/tito-texidor-iii-ZyniVuEhxVk-unsplash.png"
                alt="Civic engagement"
                className="rounded mb-10 m-auto  h-48 w-48 lg:h-56 object-cover lg:mb-4"
              />
              <div className=" rounded-lg lg:p-6 flex flex-col items-center">
                <p className="text-sm mb-2 lg:text-base lg:mb-4 mt-10">
                  Learn how you can participate and make a difference in your
                  community.
                </p>
                <button className="bg-[#007aff] mt-10 text-white py-2  px-4 rounded-4xl w-80 lg:py-3 lg:text-lg hover:bg-[#0056cc] transition-colors">
                  Get Involved
                </button>
              </div>
            </div>

            {/* Newsletter Sign Up */}
            <div className="  rounded-lg lg:p-6 flex flex-col items-center">
              <p className="text-center text-sm mb-2 lg:text-base lg:mb-4">
                Get new resources straight to your inbox before the polls open.
              </p>
              <button className="bg-[#007aff]  text-white py-2 px-4 rounded-4xl w-80 lg:py-3 lg:text-lg hover:bg-[#0056cc] transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="mb-20 lg:mb-16"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
