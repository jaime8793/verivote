import { useState, useEffect, useRef } from "react";
import SearchBar from "./searchbar";
import Footer from "./footer";

// Sample hero carousel data
const heroSlides = [
  {
    image: "/hero1.jpg",
    headline: "Know your candidates.",
    subtext:
      "Explore upcoming campaign stops and hear directly from the people seeking your vote.",
  },
  {
    image: "/hero2.jpg",
    headline: "Vote with confidence.",
    subtext: "Get the facts before you head to the polls.",
  },
  {
    image: "/hero3.jpg",
    headline: "Make your voice count.",
    subtext: "Learn how to register and get involved today.",
  },
];

// Info cards
const infoItems = [
  {
    icon: "🔍",
    title: "Search & Filter",
    description: "Quickly find candidates by name, location, or issue.",
  },
  {
    icon: "📄",
    title: "Candidate Profiles",
    description:
      "Get detailed information on experience, priorities, and background.",
  },
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const infoRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="w-full overflow-x-hidden text-gray-800"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <p className="text-xs lg:text-sm mb-3 ml-4 lg:mb-4">Home</p>

      <div className="my-4 lg:my-6 max-w-lg mx-auto lg:mx-0 w-90">
        <SearchBar />
      </div>

      {/* Hero Carousel */}
      <section
        className="relative w-full h-[360px] bg-cover bg-center flex items-center justify-center transition-all duration-500"
        style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl font-bold leading-tight">
            {heroSlides[currentSlide].headline}
          </h1>
          <p className="mt-2 text-sm">{heroSlides[currentSlide].subtext}</p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-10 my-6 px-4">
        <button className="bg-blue-500 w-60 hover:bg-blue-600 italic text-white text-sm font-medium px-6 py-2 rounded-full">
          Find Candidates Near You
        </button>
      </div>

      {/* Info Grid Carousel */}
      <section className=" px-4">
        <h2 className="text-lg mt-20 font-bold mb-2">
          Your Source for Informed Voting
        </h2>
        <p className="text-sm mb-20">
          VeriVote empowers you to make informed choices by providing easy
          access to reliable candidate information.
        </p>
        <div className="flex overflow-x-auto gap-6 px-2 max-w-md mx-auto scrollbar-hide">
          {infoItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-44 bg-white rounded shadow p-4"
            >
              <div className="text-blue-600 text-3xl">{item.icon}</div>
              <h3 className="font-semibold text-sm mt-2">{item.title}</h3>
              <p className="text-xs mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center my-6 px-4">
        <button className="bg-blue-500 italic hover:bg-blue-600 w-60 text-white text-sm font-medium px-6 py-2 rounded-full">
          Start Your Research
        </button>
      </div>

     

      {/* Candidates to Watch */}
      <section className="px-4 mb-8">
        <p className="text-[1rem] font-bold mb-20">
          Explore the candidates and make your voice heard in the upcoming
          election.
        </p>
        <h2 className="font-bold text-2xl mb-2">Candidates to Watch</h2>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="text-center">
            <img
              src="/candidate1.jpg"
              alt="Candidate 1"
              className="w-full rounded"
            />
            <p className="text-xs mt-1 font-bold">Peter Salley</p>
            <p className="text-xs">Managing Court</p>
          </div>
          <div className="text-center">
            <img
              src="/candidate2.jpg"
              alt="Candidate 2"
              className="w-full rounded"
            />
            <p className="text-xs mt-1 font-bold">Ben Cox</p>
            <p className="text-xs">Professor | Member of National Oversight</p>
          </div>
        </div>
      </section>

      {/* Compare Candidates */}
      <section className="px-4 mb-6">
        <h2 className="font-bold text-sm mb-2">
          Compare policy positions, experience, and more.
        </h2>
        <div className="w-full border border-black">
          <div className="grid grid-cols-2  bg-green-700 text-white text-xs text-center font-semibold">
            <div className="py-1 border-r border-black">Candidate 1</div>
            <div className="py-1 border-black">Candidate 2</div>
          </div>
          <div className="grid grid-cols-1 bg-green-700 text-white text-xs text-center font-semibold">
            <div className="py-1 border-black border-t"> 2024 Finance Bill</div>
          </div>
          <div className="grid grid-cols-2 text-center text-xs">
            <div className="py-2 border-t border-black">✔️ voted yes</div>
            <div className="py-2 border-t border-l border-black">
              ✔️ voted No
            </div>
          </div>
          <div className="grid grid-cols-1 bg-green-700 text-white text-xs text-center font-semibold">
            <div className="py-1"></div>
          </div>
          <div className="grid grid-cols-2 text-center text-xs">
            <div className="py-2 border-t border-black"> </div>
            <div className="py-2 border-t border-l border-black"></div>
          </div>
          <div className="grid grid-cols-1 bg-green-700 text-white text-xs text-center font-semibold">
            <div className="py-1"> </div>
          </div>
          <div className="grid grid-cols-2 text-center text-xs">
            <div className="py-2 border-t border-black"> </div>
            <div className="py-2 border-t border-l border-black"></div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="bg-blue-500 italic w-60 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
            Compare Candidates
          </button>
        </div>
      </section>

      {/* Get Election Ready */}
      <section className="px-4 mb-20">
        <h2 className="font-bold text-sm mb-2">Get Election Ready</h2>
        <p className="text-xs mb-4">Everything You Need to Know to Vote</p>
        <div className="space-y-2">
          {[
            "The Voting Process",
            "Polling Locations",
            "Key Election Issues",
          ].map((item) => (
            <button
              key={item}
              className="block w-full bg-[#003366] hover:bg-blue-800 text-white text-xs py-2 rounded"
            >
              {item}
            </button>
          ))}
          <button className="text-[10px] text-[#C21C1F] mt-1  float-end underline">
            View more resources
          </button>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="px-4 mb-8 text-center">
        <h2 className="font-bold text-sm mb-2">Our Commitment to You</h2>
        <p className="text-xs mb-4">
          Your trust is important to us. Here's how we ensure the integrity of
          our platform
        </p>
        <div className="space-y-6">
          <div>
            <p className="font-bold text-xs mt-1">Data Verified</p>
            <div className="text-blue-600 text-4xl">✅</div>

            <p className="text-[10px] mt-1">
              We go through a comprehensive verification process to ensure the
              accuracy of the information we present.
            </p>
          </div>
          <div>
            <p className="font-bold text-xs mt-1">Non-Partisan</p>
            <div className="text-blue-600 text-4xl">⚖️</div>

            <p className="text-[10px] mt-1">
              We are committed to neutrality. Our platform provides information
              without political bias.
            </p>
          </div>
          <div>
            <p className="font-bold text-xs mt-1">Open Access</p>
            <div className="text-blue-600 text-4xl">🔓</div>

            <p className="text-[10px] mt-1">
              All information on our platform is freely available to everyone,
              promoting transparency in the electoral process.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <div className="px-8">
        <section className="bg-[#F2D399] px-2 py-6 text-center text-xs mb-8 rounded-lg ">
          <div className="max-w-xs mx-auto text-left ">
            <div className="flex items-center space-x-2 mb-2">
              <img
                src="/user.jpg"
                alt="User"
                className="w-6 h-6 rounded-full"
              />
              <span className="font-bold italic">Anonymous User</span>
            </div>
            <p className="text-[11px] font-semibold">
              Verivote has become my go-to source for reliable candidate
              information. I trust the data, and it has made me a more informed
              voter.
            </p>
            <p className="font-bold float-end italic">3rd April, 2025</p>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <div className="text-center mb-12 px-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
          Explore Candidates Now
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default LandingPage;
