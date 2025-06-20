import { useState } from "react";
import Footer from "./footer";

const faqs = [
  {
    question: "How often is data updated?",
    answer:
      "Simply enter your ward, constituency, or use your location to search. Verivote will show you a list of candidates running for various positions in your region, along with their profiles, stances, and any available documents. You can also filter by role, party, or age to narrow your results.",
  },
  {
    question: "Is Verivote affiliated with any political party?",
    answer:
      "No, Verivote is a non-partisan platform that does not align with any political party.",
  },
  { question: "How often is data updated?" },
  { question: "Is Verivote affiliated with any political party? " },
  { question: "How often is data updated?" },
  { question: "Is Verivote affiliated with any political party?" },
  { question: "How often is data updated?" },
  { question: "Is Verivote affiliated with any political party?" },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-20 px-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-700 mb-6">
        We’re here to help you navigate Verivote with confidence.
      </p>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`border rounded p-4 ${
              openIndex === idx
                ? "bg-green-50 border-green-700"
                : "border-green-700"
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <p className="font-semibold text-sm">{faq.question}</p>
              <span className="text-green-700 text-xl">
                {openIndex === idx ? "−" : "+"}
              </span>
            </div>
            {openIndex === idx && (
              <p className="text-sm text-gray-800 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-20 mb-40">
        <h2 className="text-xl font-bold">
          Still have a question? Reach out to us!
        </h2>
        <p className="text-sm mt-6">
          In case you didn’t find the answers to your questions you can contact
          our
          <a href="/contact" className="text-red-600 underline">
            {" "}
            Support team
          </a>{" "}
          or access our
          <a href="/resources" className="text-red-600 underline">
            {" "}
            additional resources
          </a>
          .
        </p>
          </div>
          <Footer/>
    </div>
  );
}
