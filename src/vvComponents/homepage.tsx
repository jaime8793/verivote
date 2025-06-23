import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SearchBar from "./searchbar";
import Footer from "./footer";

// Sample hero carousel data
const heroSlides = [
  {
    image:
      "/west-kenya-union-conference-adventist-media-ds43iXMG8UQ-unsplash.png",
    headline: "Know your candidates.",
    subtext:
      "Explore upcoming campaign stops and hear directly from the people seeking your vote.",
  },
  {
    image: "/tito-texidor-iii-ZyniVuEhxVk-unsplash.png",
    headline: "Vote with confidence.",
    subtext: "Get the facts before you head to the polls.",
  },
  {
    image:
      "/west-kenya-union-conference-adventist-media-ds43iXMG8UQ-unsplash.png",
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <main
      className="w-full overflow-x-hidden text-gray-800"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      {/* Breadcrumb */}
      <div className="px-4 lg:px-8 xl:px-12 py-2">
        <p className="text-xs lg:text-sm text-gray-600">Home</p>
      </div>

      {/* Search Bar */}
      <div className="px-4 lg:px-8 xl:px-12 mb-6 lg:mb-12">
        <div className="max-w-lg mx-auto lg:mx-0 lg:max-w-3xl xl:max-w-4xl">
          <SearchBar />
        </div>
      </div>

      {/* Hero Carousel */}
      <section
        className="relative w-full max-w-[1960px] mx-auto aspect-[16/9] sm:aspect-[2/1] md:aspect-[5/2] lg:aspect-[3/1] xl:aspect-[7/2] bg-cover bg-center bg-no-repeat flex items-center justify-center transition-all duration-500 ease-in-out rounded-lg lg:rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4 lg:px-12 xl:px-16">
          <h1 className="text-3xl font-bold leading-tight lg:text-6xl xl:text-7xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            {heroSlides[currentSlide].headline}
          </h1>
          <p className="mt-2 text-sm lg:text-xl xl:text-2xl lg:mt-6 xl:mt-8 lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].subtext}
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-2 lg:p-3 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full hidden md:flex transition-all duration-200"
        >
          <ChevronLeft size={24} className="lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-2 lg:p-3 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full hidden md:flex transition-all duration-200"
        >
          <ChevronRight size={24} className="lg:w-6 lg:h-6" />
        </button>

        {/* Dots for mobile */}
        <div className="absolute bottom-4 lg:bottom-8 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 lg:h-3 lg:w-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* First CTA */}
      <div className="text-center mt-10 mb-6 px-4 lg:mt-16 lg:mb-12 xl:mt-20 xl:mb-16">
        <button className="bg-blue-500 w-60 hover:bg-blue-600 italic text-white text-sm font-medium px-6 py-2 rounded-full lg:w-80 lg:text-lg lg:py-4 xl:w-96 xl:text-xl xl:py-5 transition-all duration-200 hover:shadow-lg">
          Find Candidates Near You
        </button>
      </div>

      {/* Info Grid Section */}
      <section className="px-4 lg:px-8 xl:px-12">
        <div className="lg:max-w-6xl xl:max-w-7xl lg:mx-auto">
          <div className="text-center lg:mb-16 xl:mb-20">
            <h2 className="text-lg mt-20 font-bold mb-2 lg:text-4xl lg:mt-0 xl:text-5xl lg:mb-6">
              Your Source for Informed Voting
            </h2>
            <p className="text-sm mb-10 lg:text-xl lg:mb-0 xl:text-2xl lg:max-w-4xl lg:mx-auto leading-relaxed">
              VeriVote empowers you to make informed choices by providing easy
              access to reliable candidate information.
            </p>
          </div>

          {/* Small screen: Scrollable cards */}
          <div className="flex gap-6 px-2 max-w-md mx-auto overflow-x-auto scrollbar-hide lg:hidden">
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

          {/* Medium and up: Grid layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:max-w-4xl xl:max-w-5xl lg:mx-auto">
            {infoItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 xl:p-10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 text-5xl xl:text-6xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl xl:text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="text-base xl:text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <div className="text-center my-6 px-4 lg:my-16 xl:my-20">
        <button className="bg-blue-500 italic hover:bg-blue-600 w-60 text-white text-sm font-medium px-6 py-2 rounded-full lg:w-80 lg:text-lg lg:py-4 xl:w-96 xl:text-xl xl:py-5 transition-all duration-200 hover:shadow-lg">
          Start Your Research
        </button>
      </div>

      {/* Candidates to Watch */}
      <section className="px-4 mb-8 lg:px-8 xl:px-12">
        <div className="lg:max-w-6xl xl:max-w-7xl lg:mx-auto">
          <div className="text-center lg:mb-16 xl:mb-20">
            <p className="text-base font-bold mb-20 lg:text-xl lg:mb-8 xl:text-2xl xl:mb-10 lg:max-w-4xl lg:mx-auto">
              Explore the candidates and make your voice heard in the upcoming
              election.
            </p>
            <h2 className="font-bold text-2xl mb-2 lg:text-4xl lg:mb-0 xl:text-5xl">
              Candidates to Watch
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4 lg:gap-8 lg:mt-0 xl:gap-10">
            <div className="text-center">
              <img
                src="/602895d8-aa40-48ed-9178-2873e29a51da.png"
                alt="Candidate 1"
                className="h-56 w-56 m-auto rounded-lg lg:h-64 xl:h-72 object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <p className="text-xs mt-1 font-bold lg:text-base lg:mt-3 xl:text-lg">
                Peter Salley
              </p>
              <p className="text-xs lg:text-sm xl:text-base text-gray-600">
                Managing Court
              </p>
            </div>
            <div className="text-center">
              <img
                src="/777014c1-33f8-4b11-bbea-1d7eb49f8d4a.png"
                alt="Candidate 2"
                className="h-56 w-56 m-auto rounded-lg lg:h-64 xl:h-72 object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <p className="text-xs mt-1 font-bold lg:text-base lg:mt-3 xl:text-lg">
                Ben Cox
              </p>
              <p className="text-xs lg:text-sm xl:text-base text-gray-600">
                Professor | Member of National Oversight
              </p>
            </div>
            {/* Additional candidates for larger screens */}
            <div className="text-center hidden lg:block">
              <img
                src="/777014c1-33f8-4b11-bbea-1d7eb49f8d4a.png"
                alt="Candidate 3"
                className=" m-auto rounded-lg lg:h-64 xl:h-72 object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <p className="text-base mt-3 font-bold xl:text-lg">
                Sarah Johnson
              </p>
              <p className="text-sm xl:text-base text-gray-600">City Council</p>
            </div>
            <div className="text-center hidden lg:block">
              <img
                src="@/assets/candidate4.jpg"
                alt="Candidate 4"
                className="w-full rounded-lg lg:h-64 xl:h-72 object-cover shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <p className="text-base mt-3 font-bold xl:text-lg">Mike Davis</p>
              <p className="text-sm xl:text-base text-gray-600">
                State Representative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Candidates */}
      <section className="px-4 mb-6 lg:px-8 xl:px-12 lg:mb-16 xl:mb-20">
        <div className="lg:max-w-6xl xl:max-w-7xl lg:mx-auto">
          <h2 className="font-bold text-sm mb-2 lg:text-2xl lg:mb-8 xl:text-3xl xl:mb-10 lg:text-center">
            Compare policy positions, experience, and more.
          </h2>
          <div className="w-full border border-black lg:max-w-4xl lg:mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-2 bg-green-700 text-white text-xs text-center font-semibold lg:text-lg xl:text-xl">
              <div className="py-1 border-r border-black lg:py-4">
                Candidate 1
              </div>
              <div className="py-1 border-black lg:py-4">Candidate 2</div>
            </div>
            <div className="grid grid-cols-1 bg-green-700 text-white text-xs text-center font-semibold lg:text-lg xl:text-xl">
              <div className="py-1 border-black border-t lg:py-4">
                2024 Finance Bill
              </div>
            </div>
            <div className="grid grid-cols-2 text-center text-xs lg:text-base xl:text-lg">
              <div className="py-2 border-t border-black lg:py-4">
                ✔️ voted yes
              </div>
              <div className="py-2 border-t border-l border-black lg:py-4">
                ❌ voted No
              </div>
            </div>
            <div className="grid grid-cols-1 bg-green-700 text-white text-xs text-center font-semibold lg:text-lg xl:text-xl">
              <div className="py-1 lg:py-4"></div>
            </div>
            <div className="grid grid-cols-2 text-center text-xs lg:text-base xl:text-lg">
              <div className="py-2 border-t border-black lg:py-4"> </div>
              <div className="py-2 border-t border-l border-black lg:py-4"></div>
            </div>
            <div className="grid grid-cols-1 bg-green-700 text-white text-xs text-center font-semibold lg:text-lg xl:text-xl">
              <div className="py-1 lg:py-4"> </div>
            </div>
            <div className="grid grid-cols-2 text-center text-xs lg:text-base xl:text-lg">
              <div className="py-2 border-t border-black lg:py-4"> </div>
              <div className="py-2 border-t border-l border-black lg:py-4"></div>
            </div>
          </div>
          <div className="text-center mt-4 lg:mt-8 xl:mt-10">
            <button className="bg-blue-500 italic w-60 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full lg:w-80 lg:text-lg lg:py-4 xl:w-96 xl:text-xl xl:py-5 transition-all duration-200 hover:shadow-lg">
              Compare Candidates
            </button>
          </div>
        </div>
      </section>

      {/* Get Election Ready */}
      <section className="px-4 mb-20 lg:px-8 xl:px-12 lg:mb-24 xl:mb-32">
        <div className="lg:max-w-3xl xl:max-w-4xl lg:mx-auto lg:text-center">
          <h2 className="font-bold text-sm mb-2 lg:text-2xl lg:mb-6 xl:text-3xl xl:mb-8">
            Get Election Ready
          </h2>
          <p className="text-xs mb-4 lg:text-lg lg:mb-8 xl:text-xl xl:mb-10">
            Everything You Need to Know to Vote
          </p>
          <div className="space-y-2 lg:space-y-4 xl:space-y-5">
            {[
              "The Voting Process",
              "Polling Locations",
              "Key Election Issues",
            ].map((item) => (
              <button
                key={item}
                className="block w-full bg-[#003366] hover:bg-blue-800 text-white text-xs py-2 rounded lg:text-base lg:py-4 xl:text-lg xl:py-5 transition-all duration-200 hover:shadow-md"
              >
                {item}
              </button>
            ))}
            <div className="text-right lg:text-center lg:mt-6">
              <button className="text-[10px] text-[#C21C1F] mt-1 underline lg:text-sm xl:text-base hover:text-red-700 transition-colors">
                View more resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="px-4 mb-8 text-center lg:px-8 xl:px-12 lg:mb-16 xl:mb-20">
        <div className="lg:max-w-6xl xl:max-w-7xl lg:mx-auto">
          <h2 className="font-bold text-sm mb-2 lg:text-2xl lg:mb-6 xl:text-3xl xl:mb-8">
            Our Commitment to You
          </h2>
          <p className="text-xs mb-4 lg:text-lg lg:mb-12 xl:text-xl xl:mb-16 lg:max-w-3xl lg:mx-auto">
            Your trust is important to us. Here's how we ensure the integrity of
            our platform
          </p>
          <div className="space-y-6 lg:flex lg:justify-center lg:gap-12 lg:space-y-0 xl:gap-16">
            <div className="lg:flex-1 lg:max-w-sm xl:max-w-md">
              <div className="text-blue-600 text-4xl lg:text-6xl xl:text-7xl mb-3 lg:mb-4">
                ✅
              </div>
              <p className="font-bold text-xs mt-1 lg:text-lg lg:mb-3 xl:text-xl xl:mb-4">
                Data Verified
              </p>
              <p className="text-[10px] mt-1 lg:text-sm xl:text-base leading-relaxed">
                We go through a comprehensive verification process to ensure the
                accuracy of the information we present.
              </p>
            </div>
            <div className="lg:flex-1 lg:max-w-sm xl:max-w-md">
              <div className="text-blue-600 text-4xl lg:text-6xl xl:text-7xl mb-3 lg:mb-4">
                ⚖️
              </div>
              <p className="font-bold text-xs mt-1 lg:text-lg lg:mb-3 xl:text-xl xl:mb-4">
                Non-Partisan
              </p>
              <p className="text-[10px] mt-1 lg:text-sm xl:text-base leading-relaxed">
                We are committed to neutrality. Our platform provides
                information without political bias.
              </p>
            </div>
            <div className="lg:flex-1 lg:max-w-sm xl:max-w-md">
              <div className="text-blue-600 text-4xl lg:text-6xl xl:text-7xl mb-3 lg:mb-4">
                🔓
              </div>
              <p className="font-bold text-xs mt-1 lg:text-lg lg:mb-3 xl:text-xl xl:mb-4">
                Open Access
              </p>
              <p className="text-[10px] mt-1 lg:text-sm xl:text-base leading-relaxed">
                All information on our platform is freely available to everyone,
                promoting transparency in the electoral process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <div className="px-8 lg:px-8 xl:px-12">
        <section className="bg-[#F2D399] px-2 pt-2 pb-5 text-center text-xs mb-8 rounded-lg lg:max-w-3xl lg:mx-auto lg:px-8 lg:py-10 xl:max-w-4xl xl:px-10 xl:py-12 lg:mb-16 xl:mb-20">
          <div className="max-w-xs mx-auto text-left lg:max-w-none lg:text-center">
            <div className="flex items-center space-x-2 mb-2 lg:justify-center lg:mb-6 xl:mb-8">
              <img
                src="/4eb55c90-7741-4c05-b621-faabe722221d.png"
                alt="User"
                className="w-8 h-8 rounded-full lg:w-12 lg:h-12 xl:w-14 xl:h-14"
              />
              <span className="font-bold italic lg:text-lg xl:text-xl">
                Anonymous User
              </span>
            </div>
            <p className="text-[11px] font-semibold lg:text-lg lg:mb-4 xl:text-xl xl:mb-6 leading-relaxed">
              Verivote has become my go-to source for reliable candidate
              information. I trust the data, and it has made me a more informed
              voter.
            </p>
            <p className="font-bold float-end italic lg:float-none lg:text-base xl:text-lg">
              3rd April, 2025
            </p>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <div className="text-center  mb-12 px-4 lg:mb-20 xl:mb-24">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full lg:text-lg lg:px-10 lg:py-4 xl:text-xl xl:px-12 xl:py-5 transition-all duration-200 hover:shadow-lg">
          Explore Candidates Now
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default LandingPage;
