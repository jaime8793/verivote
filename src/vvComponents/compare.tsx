import SearchBar from "./searchbar";
import Footer from "./footer";

const Compare = () => {
  return (
    <>
      <main className="w-full max-w-md md:max-w-3xl lg:max-w-5xl mx-auto px-4 py-4 font-[Helvetica] text-gray-900">
        {/* Breadcrumb */}
        <p className="text-xs md:text-sm mb-4">Home &gt; Compare</p>

        {/* Search */}
        <div className="mb-5">
          <SearchBar />
        </div>

        {/* Header */}
        <h1 className="text-2xl md:text-3xl text-center font-extrabold mb-4">
          Compare Candidates
        </h1>

        {/* Dropdowns */}
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <select className="w-full border border-[#43761E] rounded-full px-3 py-1 text-sm">
            <option className="text-gray-300">Candidate 1</option>
          </select>
          <select className="w-full border border-[#43761E] rounded-full px-3 py-1 text-sm">
            <option>Candidate 2</option>
          </select>
        </div>

        {/* Filter/Clear */}
        <div className="flex items-center justify-between mb-4">
          <button className="bg-[#43761E] text-white text-xs px-4 py-1 rounded-full font-medium">
            Filter
          </button>
          <button className="text-xs underline font-semibold">
            Clear Selection
          </button>
        </div>

        {/* Compare Button */}
        <div className="mb-6 text-center">
          <button className="bg-blue-500 italic w-80 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
            Compare
          </button>
        </div>

        {/* Candidate Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="border border-gray-300 rounded px-2 py-3 text-center">
            <img
              src="/candidate1.jpg"
              alt="Martin Kilonzo"
              className="rounded mb-2"
            />
            <p className="text-sm font-semibold">Martin Kilonzo</p>
            <p className="text-xs">Maendeleo Chap Chap</p>
            <p className="text-xs italic mt-1">
              “Smart Leadership for Real Change”
            </p>
          </div>
          <div className="border border-[#43761E] rounded px-2 py-3 text-center">
            <img
              src="/candidate2.jpg"
              alt="Kevin Oduor"
              className="rounded mb-2"
            />
            <p className="text-sm font-semibold">Kevin Oduor</p>
            <p className="text-xs">KANU</p>
            <p className="text-xs italic mt-1">“Youth. Jobs. The Future.”</p>
          </div>
        </div>

        {/* Dropdown Comparisons */}
        <div className="space-y-3">
          {["Policy Position", "Voting records", "Education"].map((section) => (
            <div key={section}>
              <h2 className="text-sm font-extrabold mb-1">{section}</h2>
              <div className="space-y-2">
                <button className="bg-[#A0B9D9] text-left w-full px-3 py-2 mb-4 rounded text-sm">
                  Candidate 1
                </button>
                <button className="bg-[#90BD70] text-left w-full px-3 py-2 rounded text-sm">
                  Candidate 2
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Healthcare Comparison */}
        <div className="mt-6">
          <h2 className="text-sm font-bold mb-2">Healthcare</h2>
          <div className="bg-[#A0B9D9] rounded px-3 py-2 text-xs mb-2">
            <p className="font-bold">Candidate 1 - Martin Kilonzo</p>
            <p>
              Supports universal health coverage through better public hospital
              funding and staffing. Backs SHA rollout with strong oversight and
              public awareness.
            </p>
            <p className="text-red-700 italic text-right mt-1 underline">
              See Source
            </p>
          </div>
          <div className="bg-[#90BD70] rounded px-3 py-2 text-xs">
            <p className="font-bold">Candidate 2 - Kevin Oduor</p>
            <p>
              Advocates for tech-driven healthcare and private sector
              partnerships. Supports SHA but prefers gradual implementation with
              a focus on efficiency.
            </p>
            <p className="text-red-700 italic text-right mt-1 underline">
              Watch Interview
            </p>
          </div>
        </div>

        {/* Candidate Score */}
        <div className="mt-8 mb-6">
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">
            Candidate Score
          </h2>
          <div className="grid grid-cols-2 gap-3 text-center text-xs">
            <div className="bg-[#A0B9D9] rounded p-3">
              <p className="font-bold mb-1">Candidate 1</p>
              <p className="text-sm font-bold">Martin Kilonzo</p>
              <p className="text-2xl font-extrabold">76%</p>
              <p className="italic mt-1">Suitable</p>
            </div>
            <div className="bg-[#90BD70] rounded p-3">
              <p className="font-bold mb-1">Candidate 2</p>
              <p className="text-sm font-bold">Kevin Oduor</p>
              <p className="text-2xl font-extrabold">60%</p>
              <p className="italic mt-1">Suitable</p>
            </div>
          </div>
        </div>

        {/* Suitability Tool */}
        <div className="mb-8">
          <h2 className="text-sm font-extrabold mb-2 text-center">
            What Is the Candidate Suitability Tool?
          </h2>
          <p className="font-bold text-center mb-2">
            A guide to informed voting
          </p>
          <p className="text-xs mb-4">
            The Candidate Suitability Tool evaluates political candidates using
            verified, non-partisan criteria. It’s designed to support voters
            like you in making confident, fact-based decisions.
          </p>

          <h3 className="text-sm font-extrabold mb-1">Assessment Criteria</h3>
          <p className="text-xs mb-2 font-bold">What we look at</p>
          <p className="text-xs mb-6">
            Each candidate is assessed along the following areas:
          </p>
          <ul className="text-xs list-disc list-inside space-y-1">
            <li className="mb-4">
              <strong>Experience</strong>
              <p className="ml-4">Political/professional background</p>
            </li>
            <li className="mb-4">
              <strong>Leadership & Decision-Making</strong>
              <p className="ml-4">Sound decision-making record</p>
            </li>
            <li className="mb-4">
              <strong>Alternative Public Service</strong>
              <p className="ml-4">Non-political contributions</p>
            </li>
            <li className="mb-4">
              <strong>Professional Contributions</strong>
              <p className="ml-4">Community work and more</p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Compare;
