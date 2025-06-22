import SearchBar from "./searchbar";
import Footer from "./footer";

const Elections = () => {
  return (
    <>
      <main className="w-full text-gray-900 font-[Helvetica] px-4 py-4 max-w-md md:max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-xs md:text-sm mb-4">Home &gt; Elections</p>

        {/* Search */}
        <div className="mb-6">
          <SearchBar />
        </div>

        {/* Header */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-1">
          Upcoming Elections in Kenya
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-bold mb-4 lg:mb-6 leading-snug">
          Find information about upcoming elections, including key dates and
          positions up for election.
        </p>

        {/* Main Content Grid for Large Screens */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Left Column */}
          <div>
            {/* Election Info */}
            <div className="bg-[#43761E] text-white text-sm md:text-base lg:text-lg font-bold px-4 lg:px-6 py-2 lg:py-3 rounded w-fit mb-4 lg:mb-6">
              General Elections
              <div className="text-xs md:text-sm lg:text-base font-bold">
                Date: August 17, 2025
              </div>
            </div>

            {/* Poster */}
            <div className="mb-3 lg:mb-6">
              <img
                src="/public/image (1).png"
                alt="Peaceful Kenya Election"
                className="rounded w-80 lg:w-full xl:w-96 m-auto lg:m-0"
              />
            </div>

            {/* Deadline */}
            <div className="text-xs md:text-sm lg:text-base font-bold mt-1 mb-6 lg:mb-8">
              Voter Registration Deadline{" "}
              <span className="italic font-normal text-red-600 ml-2 float-end">
                July 21, 2025
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-4 lg:gap-3 xl:gap-4 gap-3 mb-4 lg:mb-8">
              <button className="bg-[#003366] text-white text-sm lg:text-base rounded px-4 lg:px-6 py-2 lg:py-3 w-full md:w-auto lg:w-full xl:w-auto hover:bg-[#004080] transition-colors">
                Register to Vote
              </button>
              <button className="bg-[#003366] text-white text-sm lg:text-base rounded px-4 lg:px-6 py-2 lg:py-3 w-full md:w-auto lg:w-full xl:w-auto hover:bg-[#004080] transition-colors">
                Check Your Registration Status
              </button>
              <button className="bg-[#003366] text-white text-sm lg:text-base rounded px-4 lg:px-6 py-2 lg:py-3 w-full md:w-auto lg:w-full xl:w-auto hover:bg-[#004080] transition-colors">
                Find Your Polling Station
              </button>
            </div>

            {/* Link */}
            <p className="text-xs md:text-sm lg:text-base mt-10 lg:mt-12 mb-20 lg:mb-8 font-bold">
              View our{" "}
              <span className="font-semibold underline cursor-pointer hover:text-blue-600 transition-colors">
                Resources
              </span>{" "}
              to find out more about the electoral process
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:mt-0">
            {/* Campaign Trail */}
            <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold mt-8 lg:mt-0 mb-4 lg:mb-6">
              Campaign Trail & Media
            </h2>

            {/* Media Poster */}
            <div className="relative mb-2 lg:mb-4">
              <img
                src="public/image (2).png"
                alt="Jubilee Campaign"
                className="rounded w-80 lg:w-full xl:w-96"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-xs md:text-sm lg:text-base font-semibold rounded">
                Jane Doe Campaign
              </div>
            </div>

            {/* Date and Location */}
            <p className="text-xs md:text-sm lg:text-base font-semibold mb-4 lg:mb-6">
              Date:{" "}
              <span className="font-normal text-gray-700">
                February 28, 2025
              </span>
              <br />
              Location: <span className="text-gray-700">Nakuru</span>
            </p>

            {/* Media Text */}
            <div className="mt-4 lg:mt-6 text-sm lg:text-base leading-snug mb-2">
              <strong>Media</strong>
              <p className="text-xs md:text-sm lg:text-base mt-1 lg:mt-2 mb-6 lg:mb-8">
                Catch up on speeches, interviews, and campaign videos shared by
                the candidate
              </p>
              <div className="space-y-2 lg:space-y-3">
                <p className="text-xs md:text-sm lg:text-base italic text-red-600 underline hover:text-red-700 cursor-pointer transition-colors">
                  Watch Interview on Healthcare Policy
                </p>
                <p className="text-xs md:text-sm lg:text-base italic text-red-600 underline hover:text-red-700 cursor-pointer transition-colors">
                  Speech at Youth Forum
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Elections;
