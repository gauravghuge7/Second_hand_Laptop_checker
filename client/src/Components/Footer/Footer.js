import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top section with links */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Laptop Check</h2>
            <p className="text-gray-400">Your go-to app for checking and evaluating laptops.</p>
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/about">
              <button className="hover:text-white transition-colors">About</button>
            </Link>
            <Link href="/features">
              <button className="hover:text-white transition-colors">Features</button>
            </Link>
            <Link href="/contact">
              <button className="hover:text-white transition-colors">Contact</button>
            </Link>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* Twitter SVG icon */}
              <path d="M22.46 6.03a8.19 8.19 0 0 1-2.35.65 4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7.2 3.74 11.64 11.64 0 0 1-8.44-4.28 4.1 4.1 0 0 0 1.27 5.48 4.08 4.08 0 0 1-1.85-.51v.05a4.1 4.1 0 0 0 3.28 4 4.09 4.09 0 0 1-1.84.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.59a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68v-.53a8.38 8.38 0 0 0 2.06-2.13z" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* Facebook SVG icon */}
              <path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24H12v-9.33H9.33V12H12V9.67c0-2.64 1.6-4.1 4.03-4.1 1.14 0 2.12.08 2.4.12v2.78h-1.64c-1.28 0-1.53.6-1.53 1.5V12h3l-.4 2.67H15.26V24h7.41c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Laptop Check. All rights reserved.
        </div>
      </div>
    </footer>
  );
}