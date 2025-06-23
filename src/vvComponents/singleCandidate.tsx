import SearchBar from "./searchbar";
import Footer from "./footer";

const SingleCandidate = () => {
  return (
    <>
      <main className="w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 py-4 font-[Helvetica] text-gray-900">
        {/* Breadcrumb */}
        <p className="text-xs md:text-sm mb-4">
          Home &gt; Candidates &gt; John Doe
        </p>

        {/* Search */}
        <div className="mb-4 md:mb-6">
          <SearchBar />
        </div>

        {/* Main Content Grid for Medium+ Screens */}
        <div className="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 lg:gap-8">
          {/* Left Column - Candidate Info */}
          <div className="md:col-span-1">
            {/* Candidate Card */}
            <div className="border rounded-md p-4 mb-4 md:mb-6 md:sticky md:top-20">
              <img
                src="/9015f31d-fdb3-4125-b9d5-8fcceed06925.png"
                alt="Boniface Wanjoki"
                className="w-56 h-56 md:w-full md:h-48 lg:h-56 xl:h-64 m-auto object-cover rounded mb-3"
              />
              <div>
                <p className="font-extrabold text-sm md:text-base lg:text-lg">
                  Boniface Wanjoki
                </p>
                <p className="text-xs md:text-sm font-extrabold text-gray-700 float-end">
                  M, 36
                </p>
              </div>
              <p className="font-bold text-sm md:text-base lg:text-lg mt-2">
                Candidate: Governor - Nairobi County
              </p>
              <p className="text-xs md:text-sm text-[#43761E] mt-2">
                Kenya African National Union (KANU)
              </p>

              {/* Compare + Share - Moved inside card on larger screens */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <button className="bg-white border border-black text-xs md:text-sm px-4 py-1 md:py-2 rounded-full italic hover:bg-gray-50 transition-colors">
                  Compare
                </button>
                <button className="text-lg md:text-xl hover:text-blue-600 transition-colors">
                  🔗
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="md:col-span-2 lg:col-span-3">
            {/* Compare + Share for Mobile Only */}
            <div className="flex justify-between items-center mb-4 md:hidden">
              <button className="bg-white border border-black text-xs px-4 py-1 rounded-full italic">
                Compare
              </button>
              <button className="text-lg">🔗</button>
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              {/* Left Sub-column */}
              <div>
                {/* Career & History Section */}
                <h2 className="font-extrabold text-sm md:text-base lg:text-lg mb-2 md:mb-4">
                  Career & History
                </h2>
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {[
                    "Biography",
                    "Education Background",
                    "Political History",
                  ].map((item, i) => (
                    <button
                      key={i}
                      className="bg-[#003366] hover:bg-[#004080] text-white text-left w-full text-sm md:text-base font-medium rounded px-4 py-2 md:py-3 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* On the Issues Section */}
                <h2 className="font-extrabold text-sm md:text-base lg:text-lg mt-6 mb-2 md:mb-4">
                  On the Issues
                </h2>
                <p className="text-xs md:text-sm lg:text-base mb-3 md:mb-4 leading-relaxed">
                  We're a team of developers, designers, civic educators, and
                  researchers committed to strengthening electoral integrity
                  through digital tools. Our work is driven by a deep belief
                  that informed voters make stronger democracies.
                </p>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {["Education", "Economy"].map((issue) => (
                    <button
                      key={issue}
                      className="bg-[#003366] hover:bg-[#004080] text-white text-left w-full text-sm md:text-base font-medium rounded px-4 py-2 md:py-3 transition-colors"
                    >
                      {issue}
                    </button>
                  ))}
                </div>

                {/* Youth & Gender */}
                <div className="bg-[#D6E3F3] rounded p-3 md:p-4 lg:p-6 text-sm md:text-base mb-4 md:mb-6">
                  <h3 className="font-bold mb-2 md:mb-3 text-sm md:text-base lg:text-lg">
                    Youth & Gender
                  </h3>
                  <p className="text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">
                    Candidate's Stance: Youth employment and SME support through
                    tax incentives and business incubation.
                  </p>
                  <div className="bg-[#FCE6AF] text-[10px] md:text-xs px-2 md:px-3 py-2 md:py-3 rounded mb-1 md:mb-2 italic">
                    "Don't quit until you try. Try until you succeed. I'll pilot
                    job placement hubs in key urban hubs and create incentives
                    for startups and SMEs"
                    <div className="text-right mt-1 md:mt-2 font-bold">
                      - 3rd April, 2025
                    </div>
                  </div>
                  <p className="text-[10px] md:text-xs italic text-red-700 underline hover:text-red-800 cursor-pointer transition-colors">
                    TV Interview, 3rd April at youth empowerment
                  </p>
                </div>

                {/* More Issues */}
                <div className="space-y-2 md:space-y-3">
                  {["Healthcare", "Economy"].map((issue, i) => (
                    <button
                      key={i}
                      className="bg-[#003366] hover:bg-[#004080] text-white text-left w-full text-sm md:text-base font-medium rounded px-4 py-2 md:py-3 transition-colors"
                    >
                      {issue}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Sub-column */}
              <div className="lg:mt-0 mt-6">
                {/* Transparency Section */}
                <h2 className="font-extrabold text-sm md:text-base lg:text-lg mt-6 lg:mt-0 mb-2 md:mb-4">
                  Transparency & Declarations
                </h2>
                <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 text-center mb-6 md:mb-8">
                  <div className="text-xs md:text-sm p-2 md:p-3 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                    <div className="text-3xl md:text-4xl lg:text-5xl mb-2">
                      💰
                    </div>
                    <p className="font-bold text-[11px] md:text-xs lg:text-sm">
                      Asset Declaration
                    </p>
                  </div>
                  <div className="text-xs md:text-sm p-2 md:p-3 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                    <div className="text-3xl md:text-4xl lg:text-5xl mb-2">
                      🌿
                    </div>
                    <p className="font-bold text-[11px] md:text-xs lg:text-sm">
                      Candidate Manifesto
                    </p>
                  </div>
                  <div className="text-xs md:text-sm p-2 md:p-3 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                    <div className="text-3xl md:text-4xl lg:text-5xl mb-2">
                      ⚖️
                    </div>
                    <p className="font-bold text-[11px] md:text-xs lg:text-sm">
                      Legal & Ethical History
                    </p>
                  </div>
                </div>

                {/* Campaign & Media */}
                <h2 className="text-sm md:text-base lg:text-lg font-extrabold mb-3 md:mb-4">
                  Campaign & Media
                </h2>
                <div className="relative mb-3 md:mb-4">
                  <img
                    src="/285708338_403252745164311_801316957641000861_n-370x370.jpg"
                    alt="Jubilee Campaign"
                    className="rounded w-full h-48 md:h-56 lg:h-64 object-cover"
                  />
                  <div className="absolute bottom-0 w-full h-30 bg-black opacity-50 text-white px-5 py-5 font-semibold text-xs md:text-sm lg:text-base">
                    Event Title: Youth Engagement
                    <br />
                    Date: February 28, 2025
                    <br />
                    Location: City Hall, Nairobi
                  </div>
                </div>

                {/* Media Text */}
                <div className="mt-2 text-xs md:text-sm lg:text-base mb-10">
                  <p className="font-bold mb-2">Media Appearances</p>
                  <p className="mt-1 mb-4 leading-relaxed">
                    Catch up on speeches, interviews, and campaign videos shared
                    by the candidate
                  </p>
                  <div className="space-y-2">
                    <p className="italic text-red-600 underline hover:text-red-700 cursor-pointer transition-colors">
                      Watch Interview on Healthcare Policy
                    </p>
                    <p className="italic text-red-600 underline hover:text-red-700 cursor-pointer transition-colors">
                      Speech at Youth Forum
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Compare */}
            <div className="text-center my-6 md:my-8 lg:my-12 md:col-span-full">
              <p className="text-xs md:text-sm lg:text-base font-bold mb-2 md:mb-4">
                Find out how this candidate compares to other candidates on
                policies and more
              </p>
              <button className="bg-blue-500 italic w-60 md:w-72 lg:w-80 hover:bg-blue-600 text-white text-sm md:text-base font-medium px-6 py-2 md:py-3 rounded-full transition-colors">
                Compare Candidates
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleCandidate;
