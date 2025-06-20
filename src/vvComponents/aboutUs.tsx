import SearchBar from "./searchbar";
import Footer from "./footer";

// Importing images
import bannerImage from "../assets/joshua-wann-W98TziahI18-unsplash.png";
import ourStoryImage from "../assets/image (1).png";
import shieldCheckmark from "../assets/famicons_shield-checkmark.png";
import scaleBalance from "../assets/mdi_scale-balance.png";
import lockOpen from "../assets/material-symbols_lock-open-rounded.png";
import teamMember from "../assets/a3a6d374-f804-413c-b661-991cf2ca83b7.png";

const AboutUs = () => {
  return (
    <div className="bg-white text-black font-sans">
      <p className="text-sm mb-2 lg:text-base lg:mb-4 px-4 lg:px-6 xl:px-8">
        Home &gt; Issues
      </p>
      <div className="px-4 py-6 max-w-md mx-auto lg:max-w-4xl xl:max-w-6xl">
        <SearchBar />
      </div>

      {/* Banner */}
      <div
        className="relative h-96 lg:h-[28rem] xl:h-[32rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6 lg:px-12 xl:px-16">
          <h1 className="text-3xl font-extrabold text-white max-w-md lg:text-4xl lg:max-w-2xl xl:text-5xl xl:max-w-3xl">
            Empowering Every Voter with Clarity, Truth, and Choice
          </h1>
        </div>
      </div>

      {/* Our Story */}
      <section className="px-6 py-10 lg:px-12 lg:py-16 xl:px-16">
        <h2 className="text-center text-xl font-bold mb-4 lg:text-2xl lg:mb-6 xl:text-3xl xl:mb-8">
          Our Story
        </h2>
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-8 xl:gap-12 lg:max-w-4xl xl:max-w-6xl lg:mx-auto">
          <img
            src={ourStoryImage}
            alt="Our story"
            className="rounded-md mb-4 w-full max-w-md lg:mb-0 lg:w-1/2 lg:max-w-none xl:w-2/5"
          />
          <div className="lg:w-1/2 xl:w-3/5 lg:flex lg:flex-col lg:justify-center">
            <p className="text-sm max-w-md lg:text-base lg:max-w-none xl:text-lg">
              Verivote was born out of a simple yet powerful idea — that
              democracy thrives when voters are informed...
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="px-6 space-y-3 lg:px-12 lg:space-y-4 xl:px-16 lg:max-w-4xl xl:max-w-6xl lg:mx-auto">
        {["Mission", "Vision", "Core Values"].map((title) => (
          <details key={title} className="border rounded-md">
            <summary className="px-4 py-2 font-semibold bg-[#003366] text-white cursor-pointer lg:px-6 lg:py-3 lg:text-lg">
              {title.toUpperCase()}
            </summary>
            <p className="px-4 py-2 text-sm lg:px-6 lg:py-4 lg:text-base xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. {title}{" "}
              content goes here.
            </p>
          </details>
        ))}
      </section>

      {/* What We Stand For */}
      <section className="px-6 py-10 space-y-6 text-center lg:px-12 lg:py-16 xl:px-16">
        <h2 className="text-xl font-bold lg:text-2xl xl:text-3xl">
          What We Stand For
        </h2>
        <div className="lg:flex lg:justify-center lg:gap-8 xl:gap-12 lg:max-w-6xl lg:mx-auto lg:space-y-0 space-y-6">
          <div className="lg:flex-1 lg:max-w-xs">
            <h3 className="font-semibold text-sm mb-2 lg:text-base xl:text-lg">
              Data Verified
            </h3>
            <img
              src={shieldCheckmark}
              alt="Check icon"
              className="mx-auto mb-2 w-20 h-20 lg:w-30 lg:h-30 xl:w-40 xl:h-40"
            />
            <p className="text-xs text-gray-700 max-w-xs mx-auto lg:text-sm xl:text-base">
              We go through a comprehensive verification process...
            </p>
          </div>
          <div className="lg:flex-1 lg:max-w-xs">
            <h3 className="font-semibold text-sm mb-2 lg:text-base xl:text-lg">
              Non-Partisan
            </h3>
            <img
              src={scaleBalance}
              alt="Scales icon"
              className="mx-auto mb-2 w-20 h-20 lg:w-30 lg:h-30 xl:w-40 xl:h-40"
            />
            <p className="text-xs text-gray-700 max-w-xs mx-auto lg:text-sm xl:text-base">
              We are committed to neutrality...
            </p>
          </div>
          <div className="lg:flex-1 lg:max-w-xs">
            <h3 className="font-semibold text-sm mb-2 lg:text-base xl:text-lg">
              Open Access
            </h3>
            <img
              src={lockOpen}
              alt="Lock icon"
              className="mx-auto mb-2 w-20 h-20 lg:w-30 lg:h-30 xl:w-40 xl:h-40"
            />
            <p className="text-xs text-gray-700 max-w-xs mx-auto lg:text-sm xl:text-base">
              All information on our platform is freely available...
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 py-10 text-center lg:px-12 lg:py-16 xl:px-16">
        <h2 className="text-xl font-bold mb-2 lg:text-2xl lg:mb-4 xl:text-3xl xl:mb-6">
          Who we are
        </h2>
        <p className="text-sm mb-6 max-w-xl mx-auto lg:text-base lg:mb-8 xl:text-lg xl:max-w-3xl">
          We're a team of developers, designers, civic educators...
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:grid-cols-3 lg:max-w-2xl lg:gap-6 xl:grid-cols-6 xl:max-w-6xl xl:gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <img
              key={n}
              src={teamMember}
              alt={`Team member ${n}`}
              className="w-full rounded-md h-32 object-cover lg:h-36 xl:h-40"
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-8 text-center lg:px-12 lg:py-12 xl:px-16">
        <p className="text-sm mb-4 font-bold lg:text-base lg:mb-6 xl:text-lg xl:mb-8 max-w-2xl mx-auto">
          Join us in creating a more transparent electoral process.
        </p>
        <button className="bg-[#0077CC] mb-16 mt-8 w-60 text-[1rem] italic text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 lg:w-96 lg:text-lg lg:py-3 xl:w-[28rem] xl:text-xl xl:py-4 transition-colors">
          Explore Candidates Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
