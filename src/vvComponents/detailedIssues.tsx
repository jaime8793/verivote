// import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const IssuesDetailed = () => {
//   const navigate = useNavigate();

  const candidates = [
    {
      id: 1,
      name: "John Doe",
      party: "UDA",
      stance: "Supports the change to SHA",
      image: "/assets/candidate1.png",
    },
    {
      id: 2,
      name: "John Doe",
      party: "UDA",
      stance: "Supports the change to SHA",
      image: "/assets/candidate2.png",
    },
    {
      id: 3,
      name: "John Doe",
      party: "UDA",
      stance: "Supports the change to SHA",
      image: "/assets/candidate3.png",
    },
  ];

  return (
    <div className="font-['Helvetica'] bg-white text-black px-4 py-6 max-w-md mx-auto text-sm">
      {/* Breadcrumb */}
      <p className="text-xs mb-3">
        Home {">"} Issues {">"}{" "}
        <span className="underline text-[#0057A0]">Healthcare</span>
      </p>

      {/* Search Bar */}
      <div className="flex items-center border border-black rounded-full px-3 py-2 mb-4">
        <svg
          className="w-5 h-5 text-black"
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
          className="ml-2 w-full outline-none text-xs placeholder-gray-600"
        />
        <button className="ml-2">
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

      {/* Heading */}
      <h1 className="text-2xl font-black mb-2">Issue: Healthcare</h1>
      <h2 className="text-sm font-bold mb-3 leading-snug">
        How candidates across Kenya plan to improve healthcare access.
      </h2>

      {/* Paragraph */}
      <p className="text-xs leading-relaxed mb-3">
        Kenya is undergoing a healthcare reform that involves the transition
        from the National Hospital Insurance Fund (NHIF) to a new system under
        the Social Health Authority (SHA)...
        <br />
        <br />
        Under the new system, all Kenyan citizens and residents are required to
        register and contribute 2.75% of their gross monthly income, with
        registration being mandatory to access public services...
      </p>

      {/* Related Link */}
      <p className="text-red-600 italic underline text-xs mb-5">
        View articles related to healthcare
      </p>

      {/* Candidates */}
      {candidates.map((candidate) => (
        <div>
          {/* Candidate Card */}
          <div
            key={candidate.id}
            className="bg-[#003366] rounded-md p-2 text-white mb-2 flex items-center"
          >
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-14 h-14 rounded object-cover mr-3"
            />
            <div className="text-xs">
              <p>
                <span className="font-semibold">Name:</span> {candidate.name}
              </p>
              <p>
                <span className="font-semibold">Party:</span> {candidate.party}
              </p>
              <p>
                <span className="font-semibold">Stance:</span>{" "}
                {candidate.stance}
              </p>
            </div>
          </div>

          {/* Button outside, floated right */}
          <div className="flex justify-end mb-5">
            <button className="border border-[#003366] rounded-full px-4 py-1 text-xs font-semibold">
              View Profile
            </button>
          </div>
        </div>
      ))}

      {/* Pagination & Compare */}
      <p className="text-center text-xs mb-1">3/27</p>
      <p className="text-center text-red-600 italic text-sm mb-5">Load More</p>

      <div>
        <p>
          Compare how different candidates plan to improve healthcare systems in
          Kenya
        </p>
      </div>

      <div className="flex justify-center">
        <button className="bg-[#007aff] w-60 text-white font-semibold py-2 px-6 rounded-full mt-10">
          Compare Candidates
        </button>
      </div>
      <div className="mb-20 lg:mb-16"></div>
      <Footer />
    </div>
  );
};

export default IssuesDetailed;
