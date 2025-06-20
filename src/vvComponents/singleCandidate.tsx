import SearchBar from "./searchbar";
import Footer from "./footer";

const SingleCandidate = () => {
  return (
    <>
      <main className="w-full max-w-md mx-auto px-4 py-4 font-[Helvetica] text-gray-900">
        {/* Breadcrumb */}
        <p className="text-xs mb-4">Home &gt; Candidates &gt; John Doe</p>

        {/* Search */}
        <div className="mb-4">
          <SearchBar />
        </div>

        {/* Candidate Card */}
        <div className="border rounded-md p-4 mb-4">
          <img
            src="src/assets/candidates/9015f31d-fdb3-4125-b9d5-8fcceed06925.png"
            alt="Boniface Wanjoki"
            className="w-56 h-56 m-auto object-cover rounded mb-3"
          />
          <div>
            <p className="font-extrabold text-sm">Boniface Wanjoki</p>
            <p className="text-xs font-extrabold text-gray-700 float-end">
              M, 36
            </p>
          </div>
          <p className="font-bold">Candidate: Governor - Nairobi County</p>
          <p className="text-xs text-[#43761E] mt-2">
            Kenya African National Union (KANU)
          </p>
        </div>

        {/* Compare + Share */}
        <div className="flex justify-between items-center mb-4">
          <button className="bg-white border border-black text-xs px-4 py-1 rounded-full italic">
            Compare
          </button>
          <button className="text-lg">🔗</button>
        </div>

        {/* Career & History Section */}
        <h2 className="font-extrabold text-sm mb-2">Career & History</h2>
        {["Biography", "Education Background", "Political History"].map(
          (item, i) => (
            <button
              key={i}
              className="bg-[#003366] text-white text-left w-full text-sm font-medium rounded px-4 py-2 mb-2"
            >
              {item}
            </button>
          )
        )}

        {/* On the Issues Section */}
        <h2 className="font-extrabold text-sm mt-6 mb-2">On the Issues</h2>
        <p className="text-xs mb-3">
          We're a team of developers, designers, civic educators, and
          researchers committed to strengthening electoral integrity through
          digital tools. Our work is driven by a deep belief that informed
          voters make stronger democracies.
        </p>

        {["Education", "Economy"].map((issue) => (
          <button
            key={issue}
            className="bg-[#003366] text-white text-left w-full text-sm font-medium rounded px-4 py-2 mb-2"
          >
            {issue}
          </button>
        ))}

        {/* Youth & Gender */}
        <div className="bg-[#D6E3F3] rounded p-3 text-sm mb-4">
          <h3 className="font-bold mb-2">Youth & Gender</h3>
          <p className="text-xs mb-2">
            Candidate’s Stance: Youth employment and SME support through tax
            incentives and business incubation.
          </p>
          <div className="bg-[#FCE6AF] text-[10px] px-2 py-2 rounded mb-1 italic">
            “Don’t quit until you try. Try until you succeed. I'll pilot job
            placement hubs in key urban hubs and create incentives for startups
            and SMEs”
            <div className="text-right mt-1 font-bold">- 3rd April, 2025</div>
          </div>
          <p className="text-[10px] italic text-red-700 underline">
            TV Interview, 3rd April at youth empowerment
          </p>
        </div>

        {/* More Issues */}
        {["Healthcare", "Economy"].map((issue, i) => (
          <button
            key={i}
            className="bg-[#003366] text-white text-left w-full text-sm font-medium rounded px-4 py-2 mb-2"
          >
            {issue}
          </button>
        ))}

        {/* Transparency Section */}
        <h2 className="font-extrabold text-sm mt-6 mb-2">
          Transparency & Declarations
        </h2>
        <div className="grid grid-cols-3 gap-3 text-center mb-6">
          <div className="text-xs">
            <div className="text-3xl">💰</div>
            <p className="mt-1 font-bold text-[11px]">Asset Declaration</p>
          </div>
          <div className="text-xs">
            <div className="text-3xl">🌿</div>
            <p className="mt-1 font-bold text-[11px]">Candidate Manifesto</p>
          </div>
          <div className="text-xs">
            <div className="text-3xl">⚖️</div>
            <p className="mt-1 font-bold text-[11px]">
              Legal & Ethical History
            </p>
          </div>
        </div>

        {/* Campaign & Media */}
        <h2 className="text-sm font-extrabold mb-3">Campaign & Media</h2>
        <div className="relative mb-3">
          <img
            src="src/assets/285708338_403252745164311_801316957641000861_n-370x370.jpg"
            alt="Jubilee Campaign"
            className="rounded w-full"
          />
          <div className="absolute bottom-0 w-full h-32 bg-black bg-opacity-75 text-white px-5 py-5  font-semibold">
            Event Title: Youth Engagement
            <br />
            Date: February 28, 2025
            <br />
            Location: City Hall, Nairobi
          </div>
        </div>

        {/* Media Text */}
        <div className="mt-2 text-xs mb-10">
          <p className="font-bold">Media Appearances</p>
          <p className="mt-1">
            Catch up on speeches, interviews, and campaign videos shared by the
            candidate
          </p>
          <p className="italic text-red-600 mt-4 underline">
            Watch Interview on Healthcare Policy
          </p>
          <p className="italic text-red-600 underline">Speech at Youth Forum</p>
        </div>

        {/* CTA Compare */}
        <div className="text-center my-6">
          <p className="text-xs font-bold mb-2">
            Find out how this candidate compares to other candidates on policies
            and more
          </p>
          <button className="bg-blue-500 italic w-60 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
            Compare Candidates
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleCandidate;
