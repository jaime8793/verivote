export default function ContactUsPage() {
  return (
    <div className="mt-20 px-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-2">
        We’d love to hear from you.
      </h1>
      <p className="text-center text-sm text-gray-700 mb-6">
        Questions, suggestions, or feedback? Reach out and our team will respond
        as soon as possible.
      </p>
      <form className="space-y-4 bg-white shadow p-6 rounded">
        <div>
          <label className="text-sm font-semibold block">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border px-4 py-2 rounded mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-semibold block">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border px-4 py-2 rounded mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-semibold block">Subject</label>
          <select className="w-full border px-4 py-2 rounded mt-1">
            <option>General Inquiry</option>
            <option>Feedback</option>
            <option>Support</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold block">Message</label>
          <textarea
            rows= "4"
            placeholder="Type your message here..."
            className="w-full border px-4 py-2 rounded mt-1"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-10">
        <h2 className="text-xl font-bold mb-1">Get in Touch with Us</h2>
        <p className="text-sm">
          <strong>Email:</strong> support@verivote.org
        </p>
        <p className="text-sm">
          <strong>Phone:</strong> +254 712 345 678 (Monday–Friday, 9am–5pm)
        </p>
        <p className="text-sm">
          <strong>Physical Address:</strong> 5th Floor, iHub Building, Nairobi,
          Kenya
        </p>
      </div>
    </div>
  );
}
