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
      <main className="w-full max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-4 py-4 lg:px-6 xl:px-8 2xl:px-12 font-[Helvetica] text-gray-900">
        <p className="text-xs md:text-sm lg:text-base xl:text-lg mb-4 lg:mb-6">
          Home &gt; Candidates
        </p>

        <div className="mb-4 lg:mb-6">
          <SearchBar />
        </div>

        <div className="mb-4 lg:mb-6">
          <button className="bg-[#43761E] text-white text-xs md:text-sm lg:text-base xl:text-lg px-4 py-1 lg:px-6 lg:py-2 xl:px-8 xl:py-3 rounded-full font-medium hover:bg-[#365219] transition-colors">
            Filter
          </button>
        </div>

        <div className="mb-4 lg:mb-6">
          <button className="border shadow mt-4 text-black text-xs md:text-sm lg:text-base xl:text-lg px-4 py-1 lg:px-6 lg:py-2 xl:px-8 xl:py-3 rounded font-medium hover:bg-gray-50 transition-colors">
            Presidential Candidates
          </button>
        </div>

        {/* Hero Section */}
        <div className="mb-4 lg:mb-8">
          <div
            className="w-full h-48 md:h-64 lg:h-80 xl:h-96 2xl:h-[28rem] bg-cover bg-center rounded-md relative overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${heroImg})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col justify-center px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 text-white">
              <div className="max-w-4xl">
                <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight mb-2 lg:mb-4">
                  The 2027 Presidential Debate Stage
                </h2>
                <p className="text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl mt-1 md:mt-2 lg:mt-4 max-w-3xl leading-relaxed">
                  See where Kenya's presidential hopefuls stand on the issues
                  that matter. Watch them share their visions, challenge each
                  other's plans, and speak directly to you—the voter.
                </p>
                <p className="text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg italic text-yellow-300 mt-1 lg:mt-4 underline cursor-pointer hover:text-yellow-200 transition-colors">
                  Watch Highlights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="mb-6 lg:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold mb-8 mt-16 lg:mb-12 lg:mt-20 xl:mb-16 xl:mt-24">
            Presidential Candidates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 lg:gap-6 xl:gap-8 text-xs md:text-sm lg:text-base xl:text-lg">
            {candidates.map((cand, i) => (
              <div
                key={i}
                className="text-center group hover:transform hover:scale-105 transition-transform duration-200"
              >
                <div className="relative mb-2 lg:mb-4">
                  <img
                    src={cand.img}
                    alt={cand.name}
                    className="rounded w-48 lg:w-full m-auto h-48 lg:h-56 xl:h-64 2xl:h-72 object-cover shadow-md group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded"></div>
                </div>
                <div className="space-y-1 lg:space-y-2">
                  <p className="font-bold text-sm lg:text-base xl:text-lg 2xl:text-xl">
                    {cand.name}
                  </p>
                  <p className="text-[11px] md:text-sm lg:text-base xl:text-lg 2xl:text-xl italic text-gray-700">
                    {cand.party}
                  </p>
                  <p className="text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg mt-1 text-gray-600 leading-relaxed">
                    "{cand.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center my-6 md:my-10 lg:my-16 xl:my-20 2xl:my-24">
          <h3 className="text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold mb-6 mt-20 lg:mb-8 lg:mt-24 xl:mb-10 xl:mt-28">
            Your Vote, Your Voice
          </h3>
          <p className="text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl mb-10 lg:mb-12 xl:mb-16 font-bold max-w-4xl mx-auto leading-relaxed">
            Explore what each presidential candidate stands for — on your terms.
            Scroll, compare, and stay informed before you cast your ballot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <button className="bg-blue-500 mb-10 lg:mb-0 italic w-60 lg:w-72 xl:w-80 2xl:w-96 hover:bg-blue-600 text-white text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium px-6 py-2 lg:px-8 lg:py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              Compare Candidates
            </button>
            <button className="border-2 border-blue-500 text-blue-500 w-60 lg:w-72 xl:w-80 2xl:w-96 hover:bg-blue-500 hover:text-white text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium px-6 py-2 lg:px-8 lg:py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              View Positions
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Candidates;
