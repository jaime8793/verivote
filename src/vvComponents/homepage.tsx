import { useState, useEffect } from "react";
import SearchBar from "./searchbar";
import Footer from "./footer";

// Sample hero carousel data
const heroSlides = [
  {
    image:
      "@/assets/west-kenya-union-conference-adventist-media-ds43iXMG8UQ-unsplash.png",
    headline: "Know your candidates.",
    subtext:
      "Explore upcoming campaign stops and hear directly from the people seeking your vote.",
  },
  {
    image:
      "@/assets/west-kenya-union-conference-adventist-media-ds43iXMG8UQ-unsplash.png",
    headline: "Vote with confidence.",
    subtext: "Get the facts before you head to the polls.",
  },
  {
    image:
      "@/assets/west-kenya-union-conference-adventist-media-ds43iXMG8UQ-unsplash.png",
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
      <p className="text-xs lg:text-sm mb-3 ml-4 lg:mb-4 lg:ml-6 xl:ml-8">
        Home
      </p>

      <div className="my-4 lg:my-6 max-w-lg mx-auto lg:mx-0 w-90 lg:ml-6 xl:ml-8 lg:max-w-2xl xl:max-w-4xl">
        <SearchBar />
      </div>

      {/* Hero Carousel */}
      <section
        className="relative w-full h-[360px] lg:h-[480px] xl:h-[600px] bg-cover bg-center flex items-center justify-center transition-all duration-500"
        style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4 lg:px-8 xl:px-12">
          <h1 className="text-3xl font-bold leading-tight lg:text-5xl xl:text-6xl lg:max-w-4xl xl:max-w-6xl">
            {heroSlides[currentSlide].headline}
          </h1>
          <p className="mt-2 text-sm lg:text-lg xl:text-xl lg:mt-4 xl:mt-6 lg:max-w-2xl xl:max-w-4xl mx-auto">
            {heroSlides[currentSlide].subtext}
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-10 my-6 px-4 lg:mt-12 lg:my-8 xl:mt-16 xl:my-10">
        <button className="bg-blue-500 w-60 hover:bg-blue-600 italic text-white text-sm font-medium px-6 py-2 rounded-full lg:w-72 lg:text-base lg:py-3 xl:w-80 xl:text-lg xl:py-4 transition-colors">
          Find Candidates Near You
        </button>
      </div>

      {/* Info Grid Carousel */}
      <section className="px-4 lg:px-6 xl:px-8">
        <div className="lg:max-w-4xl xl:max-w-6xl lg:mx-auto">
          <h2 className="text-lg mt-20 font-bold mb-2 lg:text-2xl lg:mt-24 xl:text-3xl xl:mt-28 lg:text-center">
            Your Source for Informed Voting
          </h2>
          <p className="text-sm mb-20 lg:text-base lg:mb-16 xl:text-lg xl:mb-20 lg:text-center lg:max-w-3xl lg:mx-auto">
            VeriVote empowers you to make informed choices by providing easy
            access to reliable candidate information.
          </p>
          <div className="flex overflow-x-auto gap-6 px-2 max-w-md mx-auto scrollbar-hide lg:grid lg:grid-cols-2 lg:max-w-2xl lg:gap-8 xl:max-w-4xl xl:gap-12">
            {infoItems.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-44 bg-white rounded shadow p-4 lg:w-full lg:p-6 xl:p-8"
              >
                <div className="text-blue-600 text-3xl lg:text-4xl xl:text-5xl">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm mt-2 lg:text-base lg:mt-3 xl:text-lg xl:mt-4">
                  {item.title}
                </h3>
                <p className="text-xs mt-1 lg:text-sm lg:mt-2 xl:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center my-6 px-4 lg:my-8 xl:my-10">
        <button className="bg-blue-500 italic hover:bg-blue-600 w-60 text-white text-sm font-medium px-6 py-2 rounded-full lg:w-72 lg:text-base lg:py-3 xl:w-80 xl:text-lg xl:py-4 transition-colors">
          Start Your Research
        </button>
      </div>

      {/* Candidates to Watch */}
      <section className="px-4 mb-8 lg:px-6 xl:px-8">
        <div className="lg:max-w-4xl xl:max-w-6xl lg:mx-auto">
          <p className="text-[1rem] font-bold mb-20 lg:text-lg lg:mb-16 xl:text-xl xl:mb-20 lg:text-center">
            Explore the candidates and make your voice heard in the upcoming
            election.
          </p>
          <h2 className="font-bold text-2xl mb-2 lg:text-3xl lg:mb-4 xl:text-4xl xl:mb-6 lg:text-center">
            Candidates to Watch
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4 lg:gap-6 lg:mt-12 xl:gap-8 xl:mt-16">
            <div className="text-center">
              <img
                src="@/assets/602895d8-aa40-48ed-9178-2873e29a51da.png"
                alt="Candidate 1"
                className="w-full rounded lg:h-48 xl:h-56 object-cover"
              />
              <p className="text-xs mt-1 font-bold lg:text-sm lg:mt-2 xl:text-base">
                Peter Salley
              </p>
              <p className="text-xs lg:text-sm xl:text-base">Managing Court</p>
            </div>
            <div className="text-center">
              <img
                src="@/assets/777014c1-33f8-4b11-bbea-1d7eb49f8d4a.png"
                alt="Candidate 2"
                className="w-full rounded lg:h-48 xl:h-56 object-cover"
              />
              <p className="text-xs mt-1 font-bold lg:text-sm lg:mt-2 xl:text-base">
                Ben Cox
              </p>
              <p className="text-xs lg:text-sm xl:text-base">
                Professor | Member of National Oversight
              </p>
            </div>
            {/* Additional candidates for larger screens */}
            <div className="text-center hidden lg:block">
              <img
                src="@/assets/candidate3.jpg"
                alt="Candidate 3"
                className="w-full rounded lg:h-48 xl:h-56 object-cover"
              />
              <p className="text-xs mt-1 font-bold lg:text-sm lg:mt-2 xl:text-base">
                Sarah Johnson
              </p>
              <p className="text-xs lg:text-sm xl:text-base">City Council</p>
            </div>
            <div className="text-center hidden lg:block">
              <img
                src="@/assets/candidate4.jpg"
                alt="Candidate 4"
                className="w-full rounded lg:h-48 xl:h-56 object-cover"
              />
              <p className="text-xs mt-1 font-bold lg:text-sm lg:mt-2 xl:text-base">
                Mike Davis
              </p>
              <p className="text-xs lg:text-sm xl:text-base">
                State Representative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Candidates */}
      <section className="px-4 mb-6 lg:px-6 xl:px-8">
        <div className="lg:max-w-4xl xl:max-w-6xl lg:mx-auto">
          <h2 className="font-bold text-sm mb-2 lg:text-lg lg:mb-4 xl:text-xl xl:mb-6 lg:text-center">
            Compare policy positions, experience, and more.
          </h2>
          <div className="w-full border border-black lg:max-w-3xl lg:mx-auto">
            <div className="grid grid-cols-2 bg-green-700 text-white text-xs text-center font-semibold lg:text-sm xl:text-base">
              <div className="py-1 border-r border-black lg:py-2">
                Candidate 1
              </div>
              <div className="py-1 border-black lg:py-2">Candidate 2</div>
            </div>
            <div className="grid grid-cols-1 bg-green-700 text-white text-xs text-center font-semibold lg:text-sm xl:text-base">
              <div className="py-1 border-black border-t lg:py-2">
                {" "}
                2024 Finance Bill
              </div>
            </div>
            <div className="grid grid-cols-2 text-center text-xs lg:text-sm xl:text-base">
              <div className="py-2 border-t border-black lg:py-3">
                ✔️ voted yes
              </div>
              <div className="py-2 border-t border-l border-black lg:py-3">
                ✔️ voted No
              </div>
            </div>
            <div className="grid grid-cols-1 bg-green-700 text-white text-xs text-center font-semibold lg:text-sm xl:text-base">
              <div className="py-1 lg:py-2"></div>
            </div>
            <div className="grid grid-cols-2 text-center text-xs lg:text-sm xl:text-base">
              <div className="py-2 border-t border-black lg:py-3"> </div>
              <div className="py-2 border-t border-l border-black lg:py-3"></div>
            </div>
            <div className="grid grid-cols-1 bg-green-700 text-white text-xs text-center font-semibold lg:text-sm xl:text-base">
              <div className="py-1 lg:py-2"> </div>
            </div>
            <div className="grid grid-cols-2 text-center text-xs lg:text-sm xl:text-base">
              <div className="py-2 border-t border-black lg:py-3"> </div>
              <div className="py-2 border-t border-l border-black lg:py-3"></div>
            </div>
          </div>
          <div className="text-center mt-4 lg:mt-6 xl:mt-8">
            <button className="bg-blue-500 italic w-60 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full lg:w-72 lg:text-base lg:py-3 xl:w-80 xl:text-lg xl:py-4 transition-colors">
              Compare Candidates
            </button>
          </div>
        </div>
      </section>

      {/* Get Election Ready */}
      <section className="px-4 mb-20 lg:px-6 xl:px-8">
        <div className="lg:max-w-2xl xl:max-w-3xl lg:mx-auto lg:text-center">
          <h2 className="font-bold text-sm mb-2 lg:text-lg lg:mb-4 xl:text-xl xl:mb-6">
            Get Election Ready
          </h2>
          <p className="text-xs mb-4 lg:text-sm lg:mb-6 xl:text-base xl:mb-8">
            Everything You Need to Know to Vote
          </p>
          <div className="space-y-2 lg:space-y-3 xl:space-y-4">
            {[
              "The Voting Process",
              "Polling Locations",
              "Key Election Issues",
            ].map((item) => (
              <button
                key={item}
                className="block w-full bg-[#003366] hover:bg-blue-800 text-white text-xs py-2 rounded lg:text-sm lg:py-3 xl:text-base xl:py-4 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="text-[10px] text-[#C21C1F] mt-1 float-end underline lg:text-xs xl:text-sm hover:text-red-700 transition-colors">
              View more resources
            </button>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="px-4 mb-8 text-center lg:px-6 xl:px-8">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="font-bold text-sm mb-2 lg:text-lg lg:mb-4 xl:text-xl xl:mb-6">
            Our Commitment to You
          </h2>
          <p className="text-xs mb-4 lg:text-sm lg:mb-8 xl:text-base xl:mb-10 lg:max-w-2xl lg:mx-auto">
            Your trust is important to us. Here's how we ensure the integrity of
            our platform
          </p>
          <div className="space-y-6 lg:flex lg:justify-center lg:gap-8 lg:space-y-0 xl:gap-12">
            <div className="lg:flex-1 lg:max-w-xs">
              <p className="font-bold text-xs mt-1 lg:text-sm xl:text-base">
                Data Verified
              </p>
              <div className="text-blue-600 text-4xl lg:text-5xl xl:text-6xl">
                ✅
              </div>
              <p className="text-[10px] mt-1 lg:text-xs xl:text-sm">
                We go through a comprehensive verification process to ensure the
                accuracy of the information we present.
              </p>
            </div>
            <div className="lg:flex-1 lg:max-w-xs">
              <p className="font-bold text-xs mt-1 lg:text-sm xl:text-base">
                Non-Partisan
              </p>
              <div className="text-blue-600 text-4xl lg:text-5xl xl:text-6xl">
                ⚖️
              </div>
              <p className="text-[10px] mt-1 lg:text-xs xl:text-sm">
                We are committed to neutrality. Our platform provides
                information without political bias.
              </p>
            </div>
            <div className="lg:flex-1 lg:max-w-xs">
              <p className="font-bold text-xs mt-1 lg:text-sm xl:text-base">
                Open Access
              </p>
              <div className="text-blue-600 text-4xl lg:text-5xl xl:text-6xl">
                🔓
              </div>
              <p className="text-[10px] mt-1 lg:text-xs xl:text-sm">
                All information on our platform is freely available to everyone,
                promoting transparency in the electoral process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <div className="px-8 lg:px-6 xl:px-8">
        <section className="bg-[#F2D399] px-2 pt-2 pb-5  text-center text-xs mb-8 rounded-lg lg:max-w-2xl lg:mx-auto lg:px-6 lg:py-8 xl:max-w-3xl xl:px-8 xl:py-10">
          <div className="max-w-xs mx-auto text-left lg:max-w-none">
            <div className="flex items-center space-x-2 mb-2 lg:justify-center lg:mb-4 xl:mb-6">
              <img
                src="@/assets/4eb55c90-7741-4c05-b621-faabe722221d.png"
                alt="User"
                className="w-8 h-8 rounded-full lg:w-8 lg:h-8 xl:w-10 xl:h-10"
              />
              <span className="font-bold italic lg:text-sm xl:text-base">
                Anonymous User
              </span>
            </div>
            <p className="text-[11px] font-semibold lg:text-sm lg:text-center xl:text-base">
              Verivote has become my go-to source for reliable candidate
              information. I trust the data, and it has made me a more informed
              voter.
            </p>
            <p className="font-bold float-end italic lg:float-none lg:text-center lg:mt-2 lg:text-sm xl:text-base xl:mt-4">
              3rd April, 2025
            </p>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <div className="text-center mb-12 px-4 lg:mb-16 xl:mb-20">
        <button className="bg-blue-500 hover:bg-blue-600 w-70 text-white text-sm font-medium px-6 py-2 rounded-full lg:text-base lg:px-8 lg:py-3 xl:text-lg xl:px-10 xl:py-4 transition-colors">
          Explore Candidates Now
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default LandingPage;
