export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-2xl mb-2">SkillSwap</h3>
          <p className="opacity-80 text-sm leading-relaxed">
            Empowering communities through skill sharing. Learn, teach, and grow
            together — one swap at a time.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <ul className="space-y-1 text-sm opacity-90">
            <li>Email: hello@skillswap.local</li>
            <li>Phone: +880 1700-000000</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/color/48/facebook.png"
                  alt="facebook"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/color/48/instagram-new--v1.png"
                  alt="instagram-new"
                />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
                  alt="twitterx"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-base-300 mt-6 py-4 text-center text-xs sm:text-sm opacity-70">
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
}
