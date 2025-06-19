



export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white text-xs px-4 py-8 text-center">
      <div className="mb-2 font-bold">VeriVote</div>
      <p className="mb-2">
        <strong>Your Voice. Your Vote. Verified.</strong>
      </p>
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
        <img
          src="../src/assets/twitter.svg"
          alt="Facebook"
          className="w-4 h-4"
        />
        <img
          src="../src/assets/instagram.svg"
          alt="Twitter"
          className="w-4 h-4"
        />
        <img
          src="../src/assets/facebook.svg"
          alt="Instagram"
          className="w-4 h-4"
        />
      </div>
    </footer>
  );
}
