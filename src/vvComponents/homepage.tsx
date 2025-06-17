const LandingPage = () => {
  return (
    <main className="pt-20 w-full overflow-x-hidden text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[360px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl font-bold leading-tight">
            Know your candidates.
            <br />
            Vote Informed.
          </h1>
          <p className="mt-2 text-sm">
            Explore upcoming campaign stops and hear directly from the people
            seeking your vote.
          </p>
        </div>
      </section>

      {/* CTA - Find Candidates */}
      <div className="text-center my-6 px-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
          Find Candidates Near You
        </button>
      </div>

      {/* Info Grid */}
      <section className="text-center px-4">
        <h2 className="text-lg font-bold mb-2">
          Your Source for Informed Voting
        </h2>
        <p className="text-sm mb-6">
          VeriVote empowers you to make informed choices by providing easy
          access to reliable candidate information.
        </p>
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          <div>
            <div className="text-blue-600 text-3xl">🔍</div>
            <h3 className="font-semibold text-sm mt-2">Search & Filter</h3>
            <p className="text-xs mt-1">
              Quickly find candidates by name, location, or issue.
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl">📄</div>
            <h3 className="font-semibold text-sm mt-2">Candidate Profiles</h3>
            <p className="text-xs mt-1">
              Get detailed information on experience, priorities, and
              background.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Start Research */}
      <div className="text-center my-6 px-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
          Start Your Research
        </button>
      </div>

      {/* Candidates to Watch */}
      <section className="px-4 mb-8">
        <h2 className="font-bold text-sm mb-2">Candidates to Watch</h2>
        <p className="text-xs mb-4">
          Election candidates at a glance. See where they stand on the issues
          that matter to you.
        </p>
        <div className="grid grid-cols-2 gap-4">
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
            <p className="text-xs">
              Professor | Former Member of National Oversight
            </p>
          </div>
        </div>
      </section>

      {/* Compare Candidates */}
      <section className="px-4 mb-6">
        <h2 className="font-bold text-sm mb-2">
          Compare policy positions, experience, and more.
        </h2>
        <div className="w-full border border-gray-300">
          <div className="grid grid-cols-2 bg-green-700 text-white text-xs text-center font-semibold">
            <div className="py-1">Candidate 1</div>
            <div className="py-1">Candidate 2</div>
          </div>
          <div className="grid grid-cols-2 text-center text-xs">
            <div className="py-2 border-t border-gray-300">
              2024 Finance Bill
            </div>
            <div className="py-2 border-t border-gray-300">✔️</div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
            Compare Candidates
          </button>
        </div>
      </section>

      {/* Get Election Ready */}
      <section className="px-4 mb-8 text-center">
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
              className="block w-full bg-blue-900 hover:bg-blue-800 text-white text-xs py-2 rounded"
            >
              {item}
            </button>
          ))}
          <button className="text-[10px] text-blue-700 mt-1">
            See more resources
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
            <div className="text-blue-600 text-4xl">✅</div>
            <p className="font-bold text-xs mt-1">Data Verified</p>
            <p className="text-[10px] mt-1">
              We go through a comprehensive verification process to ensure the
              accuracy of the information we present.
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl">⚖️</div>
            <p className="font-bold text-xs mt-1">Non-Partisan</p>
            <p className="text-[10px] mt-1">
              We are committed to neutrality. Our platform provides information
              without political bias.
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl">🔓</div>
            <p className="font-bold text-xs mt-1">Open Access</p>
            <p className="text-[10px] mt-1">
              All information on our platform is freely available to everyone,
              promoting transparency in the electoral process.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-yellow-100 px-4 py-6 text-center text-xs mb-8">
        <div className="max-w-xs mx-auto">
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-2">
              <img
                src="/user.jpg"
                alt="User"
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold">Anonymous User</span>
            </div>
            <p className="text-[11px]">
              VeriVote helped me feel prepared for the polls! It made comparing
              candidates simple, clear, and informative. I appreciate the
              transparent info.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center mb-12 px-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full">
          Explore Candidates Now
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-xs px-4 py-8 text-center">
        <div className="mb-2 font-bold">VeriVote</div>
        <p className="mb-2">Your Voice. Your Vote. Verified.</p>
        <div className="space-x-4 mb-4">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            FAQs
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <img src="/icon-facebook.svg" alt="Facebook" className="w-4 h-4" />
          <img src="/icon-twitter.svg" alt="Twitter" className="w-4 h-4" />
          <img src="/icon-instagram.svg" alt="Instagram" className="w-4 h-4" />
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
