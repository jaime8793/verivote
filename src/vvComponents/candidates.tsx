import SearchBar from "./searchbar";
import Footer from "./footer";

// Import all image assets
import heroImg from "../assets/1be01b4c-9a41-403f-92c2-9d5c960b0791.png";
import samuelImg from "../assets/918b4624-d71f-4fbb-aeb7-063e19f30949.png";
import fatimaImg from "../assets/918b4624-d71f-4fbb-aeb7-063e19f30949.png";
import kevinImg from "../assets/1be01b4c-9a41-403f-92c2-9d5c960b0791.png";
import martinImg from "../assets/918b4624-d71f-4fbb-aeb7-063e19f30949.png";

const Candidates = () => {
  const candidates = [
    {
      name: "Samuel Kiptroo",
      party: "The National Alliance (TNA)",
      quote: "Justice is the Agenda",
      img: samuelImg,
    },
    {
      name: "Fatima Noor",
      party: "Jubilee Party",
      quote: "Leading with Vision, Grounded in Truth",
      img: fatimaImg,
    },
    {
      name: "Kevin Oduor",
      party: "KANU",
      quote: "Youth. Jobs. The Future.",
      img: kevinImg,
    },
    {
      name: "Martin Kilonzo",
      party: "Maendeleo Chap Chap",
      quote: "Smart Leadership for Real Change",
      img: martinImg,
    },
    {
      name: "Kevin Oduor",
      party: "KANU",
      quote: "Youth. Jobs. The Future.",
      img: samuelImg,
    },
    {
      name: "Grace Wanjiru",
      party: "Wiper Democratic Movement – Kenya",
      quote: "Hope for Every Household",
      img: fatimaImg,
    },
    {
      name: "Daniel Okoth",
      party: "UDEA",
      quote: "Integrity. Action. Progress.",
      img: kevinImg,
    },
    {
      name: "Aisha Mutua",
      party: "ODM",
      quote: "Together, We Prosper",
      img: martinImg,
    },
  ];

  return (
    <>
      <main className="w-full max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4 py-4 font-[Helvetica] text-gray-900">
        <p className="text-xs md:text-sm mb-4">Home &gt; Candidates</p>

        <div className="mb-4">
          <SearchBar />
        </div>

        <div className="mb-4">
          <button className="bg-[#43761E] text-white text-xs md:text-sm px-4 py-1 rounded-full font-medium">
            Filter
          </button>
        </div>

        <div className="mb-4">
          <button className="border shadow mt-4 text-black text-xs md:text-sm px-4 py-1 rounded font-medium">
            Presidential Candidates
          </button>
        </div>

        {/* Hero Section */}
        <div className="mb-4">
          <div
            className="w-full h-48 md:h-64 lg:h-72 bg-cover bg-center rounded-md relative overflow-hidden"
            style={{
              backgroundImage: `url(${heroImg})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-4 md:px-6 text-white">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
                The 2027 Presidential Debate Stage
              </h2>
              <p className="text-xs md:text-sm mt-1 md:mt-2">
                See where Kenya’s presidential hopefuls stand on the issues that
                matter. Watch them share their visions, challenge each other’s
                plans, and speak directly to you—the voter.
              </p>
              <p className="text-[10px] md:text-xs italic text-yellow-300 mt-1 underline">
                Watch Highlights
              </p>
            </div>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-extrabold mb-8 mt-16">
            Presidential Candidates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs md:text-sm">
            {candidates.map((cand, i) => (
              <div key={i} className="text-center">
                <img
                  src={cand.img}
                  alt={cand.name}
                  className="rounded w-full h-32 object-cover mb-2"
                />
                <p className="font-bold">{cand.name}</p>
                <p className="text-[11px] md:text-sm italic">{cand.party}</p>
                <p className="text-[10px] md:text-xs mt-1 text-gray-600">
                  “{cand.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center my-6 md:my-10">
          <h3 className="text-base md:text-xl font-extrabold mb-6 mt-20">
            Your Vote, Your Voice
          </h3>
          <p className="text-xs md:text-sm mb-10 font-bold">
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
