import SearchBar from "./searchbar";
import Footer from "./footer";

// Sample candidate image imports (adjust paths & filenames as needed)
import candidate1 from "../assets/1be01b4c-9a41-403f-92c2-9d5c960b0791.png";
import candidate2 from "../assets/918b4624-d71f-4fbb-aeb7-063e19f30949.png";
import candidate3 from "../assets/1be01b4c-9a41-403f-92c2-9d5c960b0791.png";
import candidate4 from "../assets/918b4624-d71f-4fbb-aeb7-063e19f30949.png";
// import filterIcon from "../assets/918b4624-d71f-4fbb-aeb7-063e19f30949.png";

const candidateImages = [candidate1, candidate2, candidate3, candidate4];

const CandidatesExpanded = () => {
  return (
    <>
      <main className="w-full max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4 py-4 font-[Helvetica] text-gray-900">
        {/* Breadcrumb */}
        <p className="text-xs md:text-sm mb-3 md:mb-4">Home &gt; Candidates</p>

        {/* Search */}
        <div className="mb-3 md:mb-4">
          <SearchBar />
        </div>

        {/* Filter Button */}
        <div className="flex justify-start mb-4 md:mb-6">
          <button className="bg-[#43761E] text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full">
            Filter
          </button>
        </div>

        {/* Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-4 text-xs md:text-sm font-medium">
          <button className="bg-white border shadow px-3 py-1 rounded">
            Presidential Candidates
          </button>
          <button className="bg-[#A0B9D9] px-3 py-1 h-8 rounded">
            Governors
          </button>
          <button className="bg-[#F2BB16] px-3 py-1 h-8 rounded">
            Senators
          </button>
          <button className="bg-[#6EA646] px-3 py-1 h-8 rounded">MPs</button>
          <button className="bg-[#F2D399] px-3 py-1 h-8 rounded">MCAs</button>
          <button className="bg-[#F2B6CC] px-3 py-1 h-8 rounded">
            Women Reps
          </button>
        </div>

        {/* Candidate Sections */}
        {[
          "Presidential Candidates",
          "Gubernatorial Candidates",
          "Senatorial Candidates",
          "Women Representatives",
          "Members of Parliament",
        ].map((section, idx) => (
          <section key={section} className="mb-10 md:mb-12">
            <h2 className="font-extrabold text-xl md:text-2xl mb-8 mt-10">
              {section}
            </h2>

            {/* County Dropdown */}
            {idx > 0 && (
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <select className="text-xs md:text-sm border border-[#6EA646] p-3 rounded-full">
                  <option>County 001</option>
                </select>
                {/* <img src={filterIcon} alt="filter" className="w-4 h-4" /> */}
              </div>
            )}

            {/* Candidate Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {candidateImages.map((img, i) => (
                <div key={i} className="text-center">
                  <img src={img} alt="Candidate" className="w-full rounded" />
                  <p className="text-[11px] md:text-sm font-bold mt-1">
                    John Doe
                  </p>
                  <p className="text-[10px] md:text-xs leading-tight">
                    United Democratic Alliance (UDA)
                  </p>
                  <p className="text-[10px] md:text-xs italic mt-1">
                    "Unity. Action. Progress."
                  </p>
                </div>
              ))}
            </div>

            {/* View All */}
            <div className="text-center mt-3">
              <button className="text-xs md:text-sm float-end text-black italic border border-blue-800 px-4 py-[2px] rounded-full">
                View All
              </button>
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="text-center mt-20 mb-12">
          <p className="mb-2 font-bold text-base md:text-lg">
            Enter your region to explore MCAs or search them by name
          </p>
          <button className="bg-blue-500 italic w-60 mt-4 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
            Search
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CandidatesExpanded;
