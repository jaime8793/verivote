import React from "react";
import { Link } from "react-router-dom";

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
];

const Issues = () => {
  return (
    <div className="font-['Helvetica'] bg-white text-black px-4 py-6 max-w-md lg:max-w-4xl mx-auto">
      <p className="text-sm mb-2">Home &gt; Issues</p>

      <h1 className="text-2xl font-bold mb-2">
        Where Do Candidates Stand on the Issues?
      </h1>
      <p className="text-sm mb-6">
        Explore topics that matter to you and compare candidates’ positions.
      </p>

      <div className="space-y-4">
        {issues.map((issue) => (
          <Link
            to={`/issues/${issue.id}`}
            key={issue.id}
            className="bg-[#002f5f] rounded-md p-4 flex justify-between items-center hover:bg-[#004080] transition"
          >
            <div>
              <p className="text-white font-bold text-base">{issue.title}</p>
              <p className="text-white text-sm">{issue.description}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h5m0 0v5m0-5l-8 8"
              />
            </svg>
          </Link>
        ))}
      </div>

      <div className="text-right mt-4">
        <button className="text-sm italic text-red-600">
          Load more Issues
        </button>
      </div>

      {/* Hot Topics */}
      <h2 className="text-xl font-bold mt-10 mb-4">
        Hot Topics: Trending National Conversations
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <img
            src="/assets/cost-of-living.png"
            alt="Cost of Living"
            className="rounded"
          />
          <p className="italic text-sm mt-2">Trending Nationally</p>
          <p className="font-bold text-sm">Cost of Living Crisis</p>
        </div>
        <div>
          <img
            src="/assets/youth-ballot.png"
            alt="Youth and Ballot"
            className="rounded"
          />
          <p className="italic text-sm mt-2">Youth focused</p>
          <p className="font-bold text-sm">Gen Z and the Ballot</p>
        </div>
      </div>
    </div>
  );
};

export default Issues;
