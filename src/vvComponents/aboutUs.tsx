import React from "react";

const AboutUs = () => {
  return (
    <div className="pt-20 bg-white text-black font-sans">
      {/* Banner */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/vote-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6">
          <h1 className="text-3xl font-extrabold text-white max-w-md">
            Empowering Every Voter with Clarity, Truth, and Choice
          </h1>
        </div>
      </div>

      {/* Our Story */}
      <section className="px-6 py-10">
        <h2 className="text-center text-xl font-bold mb-4">Our Story</h2>
        <div className="flex flex-col items-center">
          <img
            src="/images/story.jpg"
            alt="Our story"
            className="rounded-md mb-4 w-full max-w-md"
          />
          <p className="text-sm max-w-md text-center">
            VeriVote was born out of a simple yet powerful idea — that democracy
            thrives when voters are informed. In a digital age swarming with
            misinformation, we built VeriVote to serve as a non-partisan,
            fact-verified, and user-friendly platform that puts candidate
            information in the hands of citizens.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="px-6 space-y-3">
        {["Mission", "Vision", "Core Values"].map((title) => (
          <details key={title} className="border rounded-md">
            <summary className="px-4 py-2 font-semibold bg-gray-200 cursor-pointer">
              {title.toUpperCase()}
            </summary>
            <p className="px-4 py-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. {title}{" "}
              content goes here.
            </p>
          </details>
        ))}
      </section>

      {/* What We Stand For */}
      <section className="px-6 py-10 space-y-6 text-center">
        <h2 className="text-xl font-bold">What We Stand For</h2>
        <div>
          <h3 className="font-semibold text-sm mb-2">Data Verified</h3>
          <img
            src="/icons/check.svg"
            alt="Check icon"
            className="mx-auto mb-2 w-10 h-10"
          />
          <p className="text-xs text-gray-700 max-w-xs mx-auto">
            We go through a comprehensive verification process to ensure the
            accuracy of the information you see.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-2">Non-Partisan</h3>
          <img
            src="/icons/scales.svg"
            alt="Scales icon"
            className="mx-auto mb-2 w-10 h-10"
          />
          <p className="text-xs text-gray-700 max-w-xs mx-auto">
            We are committed to neutrality. Our platform provides information
            without political bias.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-2">Open Access</h3>
          <img
            src="/icons/lock.svg"
            alt="Lock icon"
            className="mx-auto mb-2 w-10 h-10"
          />
          <p className="text-xs text-gray-700 max-w-xs mx-auto">
            All information on our platform is freely available to everyone,
            promoting transparency in the electoral process.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 py-10 text-center">
        <h2 className="text-xl font-bold mb-2">Who we are</h2>
        <p className="text-sm mb-6 max-w-xl mx-auto">
          We’re a team of developers, designers, civic educators, and
          researchers committed to strengthening electoral integrity through
          digital tools.
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <img
              key={n}
              src={`/images/person${n}.jpg`}
              alt={`Team member ${n}`}
              className="w-full rounded-md h-32 object-cover"
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-8 text-center">
        <p className="text-sm mb-4">
          Join us in creating a more transparent electoral process. Whether
          you’re voting, volunteering, or sharing, your action matters.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700">
          Explore Candidates Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white px-6 py-10 text-center">
        <img src="/logo-white.svg" alt="Logo" className="mx-auto mb-2 h-6" />
        <p className="text-xs">Your Vote. Your Voice. Verified.</p>
        <nav className="flex flex-wrap justify-center gap-4 text-xs mt-4">
          <a href="#">About Us</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </nav>
        <div className="mt-4 flex justify-center space-x-4">
          <img src="/icons/facebook.svg" alt="Facebook" className="h-4" />
          <img src="/icons/twitter.svg" alt="Twitter" className="h-4" />
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-4" />
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
