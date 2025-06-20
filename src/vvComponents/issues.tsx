import { useState, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import type { ReactNode } from "react";
import type { LinkProps } from "react-router-dom";
import SearchBar from "./searchbar";
import Footer from "./footer";

// Strongly typed custom link
interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const CustomLink = ({ to, children, className, ...props }: CustomLinkProps) => (
  <RouterLink to={to} className={className} {...props}>
    {children}
  </RouterLink>
);

const Issues = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      id: "infrastructure",
      title: "Infrastructure",
      description: "Building roads, bridges, and networks",
    },
    {
      id: "climate-policy",
      title: "Climate Policy",
      description: "Protecting our environment",
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
      content: "What policies address environmental concerns?",
    },
    {
      id: "digital-privacy",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      alt: "Digital Privacy",
      category: "Technology",
      title: "Digital Privacy Rights",
      content: "What are leaders doing to protect your data?",
    },
  ];

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = 300;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      const newScrollPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(maxScroll, scrollPosition + scrollAmount);

      carousel.scrollTo({ left: newScrollPosition, behavior: "smooth" });
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
        <p className="text-sm mb-2 lg:text-base lg:mb-4">Home &gt; Issues</p>

        <div className="mb-4 lg:mb-6 max-w-lg mx-auto lg:mx-0">
          <SearchBar />
        </div>

        <div className="mb-6 lg:mb-10 lg:text-center xl:max-w-4xl xl:mx-auto">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-4">
            Where Do Candidates Stand on the Issues?
          </h1>
          <p className="text-sm lg:text-lg xl:text-xl mb-6 lg:mb-8">
            Explore topics that matter to you and compare candidates' positions.
          </p>
        </div>

        {/* Issues List */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12 lg:p-20">
          <div className="lg:col-span-3">
            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              {issues.map((issue) => (
                <CustomLink
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
                </CustomLink>
              ))}
            </div>
            <p className="text-red-600 italic text-right text-sm lg:text-base mt-4 lg:mt-6 cursor-pointer hover:underline transition-all">
              Load more Issues
            </p>
          </div>
        </div>

        {/* Hot Topics Carousel (Mobile) */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Hot Topics</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                disabled={scrollPosition <= 0}
                className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
              >
                ←
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="p-2 bg-gray-200 rounded-full"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-4"
          >
            {hotTopics.map((topic) => (
              <div key={topic.id} className="flex-shrink-0 w-72 group">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={topic.image}
                    alt={topic.alt}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-xs italic text-gray-600">
                  {topic.category}
                </p>
                <p className="font-semibold text-base group-hover:text-blue-900">
                  {topic.title}
                </p>
                <p className="text-sm text-gray-700">{topic.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Issues;
