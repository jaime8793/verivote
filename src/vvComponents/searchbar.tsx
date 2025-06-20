export default function SearchBar() {
  return (
    <div className="flex items-center border-black border-2 rounded-full px-3 py-2 mb-4 lg:mb-6 max-w-lg mx-auto lg:mx-0">
      <svg
        className="w-5 h-5 text-gray-500 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search by name, office, or district..."
        className="ml-2 w-full outline-none text-sm placeholder-gray-500"
      />
      <button className="ml-2 flex-shrink-0">
        <img
          src="@/assets/basil_location-solid.png"
          alt="Logo"
          className="h-8"
        />
      </button>
    </div>
  );
}
