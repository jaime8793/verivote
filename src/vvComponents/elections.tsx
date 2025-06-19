import SearchBar from "./searchbar";
import Footer from "./footer";

const Elections = () => {
  return (
    <>
      <main className="w-full text-gray-900 font-[Helvetica] px-4 py-4 max-w-md mx-auto">
        {/* Breadcrumb */}
        <p className="text-xs mb-4">Home &gt; Elections</p>

        {/* Search */}
        <div className="mb-6">
          <SearchBar />
        </div>

        {/* Header */}
        <h1 className="text-2xl font-extrabold leading-tight mb-1">
          Upcoming Elections in Kenya
        </h1>
        <p className="text-sm font-bold mb-4 leading-snug">
          Find information about upcoming elections, including key dates and
          positions up for election.
        </p>

        {/* Election Info */}
        <div className="bg-[#43761E] text-white text-sm font-bold px-4 py-2 rounded w-fit mb-4">
          General Elections
          <div className="text-xs font-bold">Date: August 17, 2025</div>
        </div>

        {/* Poster */}
        <div className="mb-3">
          <img
            src="/election-poster.jpg"
            alt="Peaceful Kenya Election"
            className="rounded w-full"
          />
        </div>

        {/* Deadline */}
        <div className="text-xs font-bold mt-1 mb-6">
          Voter Registration Deadline{" "}
          <span className="italic font-normal text-red-600 ml-2 float-end">
            July 21, 2025
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mb-4">
          <button className="bg-[#003366] text-white text-sm rounded px-4 py-2 w-full">
            Register to Vote
          </button>
          <button className="bg-[#003366] text-white text-sm rounded px-4 py-2 w-full">
            Check Your Registration Status
          </button>
          <button className="bg-[#003366] text-white text-sm rounded px-4 py-2 w-full">
            Find Your Polling Station
          </button>
        </div>

        {/* Link */}
        <p className="text-xs mt-10 mb-20 font-bold">
          View our{" "}
          <span className="font-semibold underline cursor-pointer">
            Resources
          </span>{" "}
          to find out more about the electoral process
        </p>

        {/* Campaign Trail */}
        <h2 className="text-lg font-extrabold mt-8 mb-4">
          Campaign Trail & Media
        </h2>

        {/* Media Poster */}
        <div className="relative mb-2">
          <img
            src="/jubilee-campaign.jpg"
            alt="Jubilee Campaign"
            className="rounded w-full"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-xs font-semibold rounded">
            Jane Doe Campaign
          </div>
        </div>

        {/* Date and Location */}
        <p className="text-xs font-semibold">
          Date:{" "}
          <span className="font-normal text-gray-700">February 28, 2025</span>
          <br />
          Location: <span className="text-gray-700">Nakuru</span>
        </p>

        {/* Media Text */}
        <div className="mt-4 text-sm leading-snug mb-2 ">
          <strong>Media</strong>
          <p className="text-xs mt-1">
            Catch up on speeches, interviews, and campaign videos shared by the
            candidate
          </p>
          <p className="text-xs italic text-red-600 mt-10 underline">
            Watch Interview on Healthcare Policy
          </p>
          <p className="text-xs italic text-red-600  mb-10 underline">
            Speech at Youth Forum
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Elections;
