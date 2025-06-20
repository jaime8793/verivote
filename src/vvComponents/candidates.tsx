import SearchBar from "./searchbar";
import Footer from "./footer";

const Candidates = () => {
  return (
    <>
      <main className="w-full max-w-md mx-auto px-4 py-4 font-[Helvetica] text-gray-900">
        {/* Breadcrumb */}
        <p className="text-xs mb-4">Home &gt; Candidates</p>

        {/* Search */}
        <div className="mb-4">
          <SearchBar />
        </div>

        {/* CTA Filter */}
        <div className="mb-4">
          <button className="bg-[#43761E] text-white text-xs px-4 py-1 rounded-full font-medium">
            Filter
          </button>
        </div>
        <div className="mb-4">
          <button className="border shadow mt-4 text-black text-xs px-4 py-1 rounded font-[1rem] ">
            Presidential Candidates
          </button>
        </div>

        {/* Hero Debate Image */}
        <div className="mb-4">
          <div
            className="w-full h-48 bg-cover bg-center rounded-md relative overflow-hidden"
            style={{ backgroundImage: "url('/debate-stage.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-4 text-white">
              <h2 className="text-xl font-extrabold leading-tight">
                The 2027 Presidential Debate Stage
              </h2>
              <p className="text-xs mt-1">
                See where Kenya’s presidential hopefuls stand on the issues that
                matter. Watch them share their visions, challenge each other’s
                plans, and speak directly to you—the voter.
              </p>
              <p className="text-[10px] italic text-yellow-300 mt-1 underline">
                Watch Highlights
              </p>
            </div>
          </div>
        </div>

        {/* Candidate Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-extrabold mb-16 mt-16">Presidential Candidates</h2>
          <div className="grid grid-cols-2 gap-4 text-xs">
            {[
              {
                name: "Samuel Kiptroo",
                party: "The National Alliance (TNA)",
                quote: "Justice is the Agenda",
                img: "/candidate1.jpg",
              },
              {
                name: "Fatima Noor",
                party: "Jubilee Party",
                quote: "Leading with Vision, Grounded in Truth",
                img: "/candidate2.jpg",
              },
              {
                name: "Kevin Oduor",
                party: "KANU",
                quote: "Youth. Jobs. The Future.",
                img: "/candidate3.jpg",
              },
              {
                name: "Martin Kilonzo",
                party: "Maendeleo Chap Chap",
                quote: "Smart Leadership for Real Change",
                img: "/candidate4.jpg",
              },
              {
                name: "Kevin Oduor",
                party: "KANU",
                quote: "Youth. Jobs. The Future.",
                img: "/candidate3.jpg",
              },
              {
                name: "Grace Wanjiru",
                party: "Wiper Democratic Movement – Kenya",
                quote: "Hope for Every Household",
                img: "/candidate5.jpg",
              },
              {
                name: "Daniel Okoth",
                party: "UDEA",
                quote: "Integrity. Action. Progress.",
                img: "/candidate6.jpg",
              },
              {
                name: "Aisha Mutua",
                party: "ODM",
                quote: "Together, We Prosper",
                img: "/candidate7.jpg",
              },
            ].map((cand, i) => (
              <div key={i} className="text-center">
                <img
                  src={cand.img}
                  alt={cand.name}
                  className="rounded w-full h-32 object-cover mb-2"
                />
                <p className="font-bold">{cand.name}</p>
                <p className="text-[11px] italic">{cand.party}</p>
                <p className="text-[10px] mt-1 text-gray-600">“{cand.quote}”</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center my-6">
          <h3 className="text-base font-extrabold mb-6 mt-20">
            Your Vote, Your Voice
          </h3>
          <p className="text-xs mb-10 font-bold">
            Explore what each presidential candidate stands for — on your terms.
            Scroll, compare, and stay informed before you cast your ballot.
          </p>
          <button className="bg-blue-500 mb-10 italic w-60 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
            Compare Candidates
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Candidates;
