import { useState, useRef } from "react";
import SearchBar from "./searchbar";
import Footer from "./footer";

const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

const Issues = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const issues = [
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Affordable access for all",
    },
    {
      id: "youth-employment",
      title: "Youth Employment",
      description: "Creating jobs for a growing workforce",
    },
    {
      id: "education",
      title: "Education",
      description: "Improving the quality of schools",
    },
    {
      id: "youth-employment",
      title: "Youth Employment",
      description: "Creating jobs for a growing workforce",
    },
    {
      id: "education",
      title: "Education",
      description: "Improving the quality of schools",
    },
  ];

  const hotTopics = [
    {
      id: "cost-living",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      alt: "Cost of Living",
      category: "Trending Nationally",
      title: "Cost of Living Crisis",
      content:
        "Prices are rising. What are candidates doing about inflation and wages?",
    },
    {
      id: "genz-ballot",
      image:
        "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=400&h=300&fit=crop",
      alt: "Gen Z and the Ballot",
      category: "Youth focused",
      title: "Gen Z and the Ballot",
      content: "Youth are demanding representation. Are candidates listening?",
    },
    {
      id: "climate-change",
      image:
        "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop",
      alt: "Climate Action",
      category: "Environmental",
      title: "Climate Action Now",
      content:
        "Prices are rising. What are candidates doing about inflation and wages?",
    },
    {
      id: "digital-privacy",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      alt: "Digital Privacy",
      category: "Technology",
      title: "Digital Privacy Rights",
      content: "Youth are demanding representation. Are candidates listening?",
    },
  ];

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = 300;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      let newScrollPosition;
      if (direction === "left") {
        newScrollPosition = Math.max(0, scrollPosition - scrollAmount);
      } else {
        newScrollPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
      }

      carousel.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  return (
    <div className="font-sans bg-white text-black min-h-screen">
      <div className="px-4 py-6 max-w-md lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-sm mb-2 lg:text-base lg:mb-4">Home &gt; Issues</p>

        {/* Search Bar */}
        <div className="mb-4 lg:mb-6 max-w-lg mx-auto lg:mx-0">
          <SearchBar />
        </div>

        {/* Header Section */}
        <div className="mb-6 lg:mb-10 lg:text-center xl:max-w-4xl xl:mx-auto">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-4">
            Where Do Candidates Stand on the Issues?
          </h1>
          <p className="text-sm lg:text-lg xl:text-xl mb-6 lg:mb-8">
            Explore topics that matter to you and compare candidates' positions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {/* Left Column - Issues List */}
          <div className="lg:col-span-2">
            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              {issues.map((issue) => (
                <Link
                  to={`/issues/${issue.id}`}
                  key={issue.id}
                  className="bg-blue-900 rounded-md p-4 lg:p-6 flex justify-between items-center hover:bg-blue-800 transition-colors shadow-sm hover:shadow-md block"
                >
                  <div className="flex-1">
                    <p className="text-white font-bold text-base lg:text-xl xl:text-2xl mb-1">
                      {issue.title}
                    </p>
                    <p className="text-white text-sm lg:text-base xl:text-lg opacity-90">
                      {issue.description}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 lg:h-6 lg:w-6 text-white flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              ))}
            </div>

            <p className="text-red-600 italic text-right text-sm lg:text-base mt-4 lg:mt-6 cursor-pointer hover:underline transition-all">
              Load more Issues
            </p>
          </div>

          {/* Right Column - Hot Topics (Desktop) */}
          <div className="hidden lg:block mt-8 lg:mt-0">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-4 lg:mb-6">
              Hot Topics: Trending National Conversations
            </h2>
            <p className="text-sm lg:text-base mb-4 lg:mb-6">
              Tap into what's happening today and find out who's talking about
              it.
            </p>

            <div className="space-y-6 lg:space-y-8">
              {hotTopics.slice(0, 2).map((topic) => (
                <div key={topic.id} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={topic.image}
                      alt={topic.alt}
                      className="w-full h-48 lg:h-56 rounded-md object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs lg:text-sm italic mt-2 text-gray-600">
                    {topic.category}
                  </p>
                  <p className="font-semibold text-sm lg:text-base xl:text-lg mt-1 group-hover:text-blue-900 transition-colors">
                    {topic.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/All Screens Hot Topics Carousel */}
        <div className=" mt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold mb-2">
                Hot Topics: Trending National Conversations
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={scrollPosition <= 0}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
          >
            {hotTopics.map((topic) => (
              <div
                key={topic.id}
                className="group cursor-pointer flex-shrink-0 w-72"
              >
                <div className="overflow-hidden rounded-lg shadow-md mt-2">
                  <img
                    src={topic.image}
                    alt={topic.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mb-2">
                  <p className=" mt-2 font-semibold text-xs italic mb-1">
                    {topic.category}
                  </p>
                  <p className="font-bold text-[1rem] group-hover:text-blue-900 transition-colors">
                    {topic.title}
                  </p>
                  <p className=" text-sm group-hover:text-blue-900 transition-colors">
                    {topic.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="font-bold">
          Tap into what’s happening today and find out who’s talking about it.
        </p>
        <div className="hidden sm:block mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2">
                More Hot Topics
              </h2>
              <p className="text-sm lg:text-base text-gray-600">
                Discover trending conversations across the nation
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors disabled:opacity-50"
                disabled={scrollPosition <= 0}
              >
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4">
            {hotTopics.map((topic) => (
              <div
                key={`full-${topic.id}`}
                className="group cursor-pointer flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={topic.image}
                    alt={topic.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-2">
                    {topic.category}
                  </span>
                  <h3 className="font-bold text-lg group-hover:text-blue-900 transition-colors">
                    {topic.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="mb-20 lg:mb-16"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Issues;
