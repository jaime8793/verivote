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
      {/* Breadcrumb with better spacing */}
      <div className="px-4 py-3 lg:px-8 xl:px-16 2xl:px-24">
        <p className="text-sm mb-2 lg:text-base lg:mb-4 text-gray-600">
          Home &gt; About Us
        </p>
      </div>

      {/* SearchBar container with improved max-width */}
      <div className="px-4 py-6 max-w-md mx-auto lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <SearchBar />
      </div>

      {/* Enhanced Banner with better text positioning */}
      <div
        className="relative h-96 lg:h-[32rem] xl:h-[40rem] 2xl:h-[48rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex flex-col justify-center">
          <div className="px-6 lg:px-12 xl:px-16 2xl:px-24 max-w-7xl mx-auto w-full">
            <h1 className="text-3xl font-extrabold text-white max-w-md lg:text-5xl lg:max-w-3xl xl:text-6xl xl:max-w-4xl 2xl:text-7xl 2xl:max-w-5xl leading-tight">
              Empowering Every Voter with Clarity, Truth, and Choice
            </h1>
            <p className="text-lg text-white/90 mt-4 max-w-2xl hidden lg:block xl:text-xl 2xl:text-2xl">
              Making democracy accessible through verified information and
              transparent processes.
            </p>
          </div>
        </div>
      </div>

      {/* Improved Our Story section with better layout */}
      <section className="px-6 py-16 lg:px-12 lg:py-24 xl:px-16 2xl:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-8 lg:text-3xl lg:mb-12 xl:text-4xl xl:mb-16 2xl:text-5xl">
            Our Story
          </h2>
          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-12 xl:gap-16 2xl:gap-20">
            <div className="lg:w-1/2 xl:w-2/5">
              <img
                src={ourStoryImage}
                alt="Our story"
                className="rounded-lg mb-8 w-full max-w-md lg:mb-0 lg:max-w-none shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 xl:w-3/5 space-y-6">
              <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-gray-700">
                Verivote was born out of a simple yet powerful idea — that
                democracy thrives when voters are informed, engaged, and
                empowered to make decisions based on facts rather than fiction.
              </p>
              <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-gray-700">
                Founded by a diverse team of civic advocates, technologists, and
                democracy enthusiasts, our platform bridges the gap between
                complex political information and everyday voters.
              </p>
              <div className="pt-4">
                <button className="bg-[#0077CC] text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors lg:px-10 lg:py-4 lg:text-lg xl:px-12 xl:py-5 xl:text-xl">
                  Learn Our Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission, Vision, Core Values with card layout */}
      <section className="px-6 py-16 bg-gray-50 lg:px-12 lg:py-24 xl:px-16 2xl:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-12 lg:text-3xl lg:mb-16 xl:text-4xl xl:mb-20 2xl:text-5xl">
            Our Foundation
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-12">
            {[
              {
                title: "Mission",
                content:
                  "To provide every voter with verified, non-partisan information that empowers informed decision-making in democratic processes.",
                icon: "🎯",
              },
              {
                title: "Vision",
                content:
                  "A world where democracy flourishes through transparency, accessibility, and citizen engagement in the electoral process.",
                icon: "🔮",
              },
              {
                title: "Core Values",
                content:
                  "Integrity, transparency, non-partisanship, accessibility, and unwavering commitment to democratic principles guide everything we do.",
                icon: "⭐",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#003366] text-white p-6 lg:p-8">
                  <div className="text-3xl mb-2 lg:text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-bold lg:text-2xl xl:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced What We Stand For section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24 xl:px-16 2xl:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-8 lg:text-3xl lg:mb-12 xl:text-4xl xl:mb-16 2xl:text-5xl">
            What We Stand For
          </h2>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 xl:gap-16">
            <div className="text-center group">
              <div className="bg-blue-50 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-100 transition-colors lg:w-40 lg:h-40 xl:w-48 xl:h-48">
                <img
                  src={shieldCheckmark}
                  alt="Data Verified"
                  className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                />
              </div>
              <h3 className="font-bold text-lg mb-4 lg:text-xl xl:text-2xl 2xl:text-3xl text-[#003366]">
                Data Verified
              </h3>
              <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed max-w-sm mx-auto">
                We go through a comprehensive verification process to ensure all
                information meets the highest standards of accuracy and
                reliability.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-green-50 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center group-hover:bg-green-100 transition-colors lg:w-40 lg:h-40 xl:w-48 xl:h-48">
                <img
                  src={scaleBalance}
                  alt="Non-Partisan"
                  className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                />
              </div>
              <h3 className="font-bold text-lg mb-4 lg:text-xl xl:text-2xl 2xl:text-3xl text-[#003366]">
                Non-Partisan
              </h3>
              <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed max-w-sm mx-auto">
                We are committed to neutrality, presenting facts without bias
                and letting voters make their own informed decisions.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-50 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center group-hover:bg-purple-100 transition-colors lg:w-40 lg:h-40 xl:w-48 xl:h-48">
                <img
                  src={lockOpen}
                  alt="Open Access"
                  className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                />
              </div>
              <h3 className="font-bold text-lg mb-4 lg:text-xl xl:text-2xl 2xl:text-3xl text-[#003366]">
                Open Access
              </h3>
              <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed max-w-sm mx-auto">
                All information on our platform is freely available to everyone,
                ensuring democracy remains accessible to all citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Who We Are section */}
      <section className="px-6 py-16 bg-gray-50 lg:px-12 lg:py-24 xl:px-16 2xl:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 lg:text-3xl lg:mb-8 xl:text-4xl xl:mb-12 2xl:text-5xl">
            Who We Are
          </h2>
          <p className="text-base mb-12 max-w-3xl mx-auto lg:text-lg lg:mb-16 xl:text-xl xl:mb-20 2xl:text-2xl text-gray-700 leading-relaxed">
            We're a diverse team of developers, designers, civic educators,
            policy experts, and democracy advocates united by a shared vision of
            transparent, accessible democracy for all.
          </p>
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto lg:grid-cols-3 lg:max-w-4xl lg:gap-6 xl:grid-cols-6 xl:max-w-7xl xl:gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="group">
                <img
                  src={teamMember}
                  alt={`Team member ${n}`}
                  className=" lg:w-48 m-auto rounded-lg h-32 object-cover lg:h-48 xl:h-48 shadow-md group-hover:shadow-lg transition-shadow"
                />
                <div className="mt-3 text-center">
                  <h4 className="font-semibold text-sm lg:text-base xl:text-lg text-gray-800">
                    Team Member {n}
                  </h4>
                  <p className="text-xs lg:text-sm xl:text-base text-gray-600">
                    Role Title
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
