import Footer from "./footer";

export default function ContactUsPage() {
  return (
    <>
      <div className="mt-4  max-w-xl mx-auto font-helvetica">
        {/* Breadcrumb */}
        <p className="text-xs lg:text-sm mb-3 mr-4 lg:mb-4">
          Home {">"}Contact Us
        </p>
        <h1 className="text-[20px]  font-extrabold text-center mb-2">
          We’d love to hear from you.
        </h1>
        <p className="text-center px-2 mt-6 font-bold text-[14px] text-black mb-6 font-sans">
          Questions, suggestions, or feedback? Reach out and our team will
          respond as soon as possible.
        </p>
        <div className="px-4">
          <form className="space-y-4 bg-white border shadow-xl p-6 rounded">
            <div>
              <label className="text-sm font-semibold block">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border-[2px] border-black  px-4 py-2 rounded mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-[2px] border-black px-4 py-2 rounded mt-1"
              />
            </div>
            <div>
              <label className="text-sm  font-semibold block">Subject</label>
              <select className="w-full border-black border px-4 py-2 rounded mt-1">
                <option>General Inquiry</option>
                <option>Feedback</option>
                <option>Support</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold block">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full h-194px border-black border px-4 py-2 rounded mt-1"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-20 mb-20">
          <h2 className="text-[1.25rem] font-extrabold mb-1">
            Get in Touch with Us
          </h2>
          <div className="w-80 text-center m-auto">
            <p className="text-sm flex-row">
              <p>
                <strong>Email:</strong>
              </p>{" "}
              <p>support@verivote.org</p>
            </p>
            <p className="text-sm flex-row">
              <p>
                <strong>Phone:</strong>
              </p>
              <p>+254 712 345 678 (Monday–Friday, 9am–5pm)</p>
            </p>
            <p className="text-sm flex-row">
              <p>
                <strong>Physical Address:</strong>
              </p>
              5th Floor, iHub Building, Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
