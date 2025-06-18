import Footer from "./footer";
import SearchBar from "./searchbar";
const IssuesDetailed = () => {
  const candidates = [
    {
      id: 1,
      name: "John Doe",
      party: "UDA",
      stance: "Supports the change to SHA",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Jane Smith",
      party: "ODM",
      stance: "Proposes gradual transition to SHA",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Michael Johnson",
      party: "ANC",
      stance: "Advocates for improved NHIF system",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <div className="font-sans bg-white text-black px-4 py-6 max-w-md lg:max-w-4xl xl:max-w-6xl mx-auto text-sm lg:text-base">
      {/* Breadcrumb */}
      <p className="text-xs lg:text-sm mb-3 lg:mb-4">
        Home {">"} Issues {">"}{" "}
        <span className="underline text-blue-600">Healthcare</span>
      </p>

          <SearchBar/>

      {/* Header Section */}
      <div className="mb-6 lg:mb-8 lg:text-center xl:max-w-4xl xl:mx-auto">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-black mb-2 lg:mb-4">
          Issue: Healthcare
        </h1>
        <h2 className="text-sm lg:text-xl xl:text-2xl font-bold mb-3 lg:mb-6 leading-snug">
          How candidates across Kenya plan to improve healthcare access.
        </h2>
      </div>

      {/* Content Description */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12 mb-6 lg:mb-8">
        <div className="lg:col-span-2">
          <p className="text-xs lg:text-base leading-relaxed mb-3 lg:mb-4">
            Kenya is undergoing a healthcare reform that involves the transition
            from the National Hospital Insurance Fund (NHIF) to a new system
            under the Social Health Authority (SHA). This major transformation
            aims to provide universal health coverage for all Kenyan citizens.
            <br />
            <br />
            Under the new system, all Kenyan citizens and residents are required
            to register and contribute 2.75% of their gross monthly income, with
            registration being mandatory to access public services. The reform
            promises improved healthcare delivery and better resource
            allocation.
          </p>

          {/* Related Link */}
          <p className="text-red-600 italic underline text-xs lg:text-sm mb-5 lg:mb-8 cursor-pointer hover:text-red-700">
            View articles related to healthcare
          </p>
        </div>

        {/* Sidebar for larger screens */}
        <div className="hidden lg:block">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Candidates:</span>
                <span className="font-semibold">27</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Parties Involved:</span>
                <span className="font-semibold">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Support SHA:</span>
                <span className="font-semibold text-green-600">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Oppose SHA:</span>
                <span className="font-semibold text-red-600">9</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-6 xl:gap-8">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="mb-6 lg:mb-8">
            {/* Candidate Card */}
            <div className="bg-slate-800 rounded-md p-3 lg:p-4 text-white mb-3 flex items-center lg:flex-col lg:text-center">
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full object-cover mr-3 lg:mr-0 lg:mb-3"
              />
              <div className="text-xs lg:text-sm">
                <p className="mb-1">
                  <span className="font-semibold">Name:</span> {candidate.name}
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Party:</span>{" "}
                  {candidate.party}
                </p>
                <p>
                  <span className="font-semibold">Stance:</span>{" "}
                  {candidate.stance}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end lg:justify-center">
              <button className="border border-slate-800 rounded-full px-4 lg:px-6 py-1 lg:py-2 text-xs lg:text-sm font-semibold hover:bg-slate-800 hover:text-white transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination & Compare */}
      <div className="text-center mb-6 lg:mb-8">
        <p className="text-xs lg:text-sm mb-1">3/27</p>
        <p className="text-red-600 italic text-sm lg:text-base mb-6 lg:mb-8 cursor-pointer hover:text-red-700">
          Load More
        </p>
      </div>

      <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
        <div className="mb-4 lg:mb-6">
          <p className="text-sm lg:text-base">
            Compare how different candidates plan to improve healthcare systems
            in Kenya
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 w-60 lg:w-80 xl:w-96 text-white font-semibold py-2 lg:py-3 px-6 lg:px-8 text-sm lg:text-base rounded-full mt-10 lg:mt-6 hover:bg-blue-600 transition-colors">
            Compare Candidates
          </button>
        </div>
      </div>

      <div className="mb-20 lg:mb-16"></div>
      <Footer />
    </div>
  );
};

export default IssuesDetailed;
