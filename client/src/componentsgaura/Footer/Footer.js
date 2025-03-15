import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/gauravghuge7", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.19.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.24v3.33c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" },
    { name: "LeetCode", url: "https://leetcode.com/gauravghuge7/", icon: "M16.1 3.87c-.3-.96-1.16-1.7-2.18-1.7H6.87C5.5 2.17 4.5 3.5 4.5 5v14c0 1.5 1 2.83 2.37 2.83h7.05c1.02 0 1.88-.74 2.18-1.7l2.9-9.06c.3-.96-.1-2-.98-2.5-.88-.5-1.97-.17-2.5.67l-2.42 3.8-2.5-7.96c-.3-.96-1.16-1.7-2.18-1.7s-1.88.74-2.18 1.7L6.5 12l2.42-7.96c.3-.96 1.16-1.7 2.18-1.7s1.88.74 2.18 1.7l2.5 7.96-2.42-3.8c-.53-.83-.3-1.9.58-2.4.88-.5 2-.2 2.5.67l2.9 9.06z" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gaurav-ghuge-530651226/", icon: "M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V7.6h3.4v1.57h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.4v7.73zM5.68 6.03c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1.73 14.42H3.95V7.6h3.46v12.85zM22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0z" },
    { name: "HashNode", url: "https://hashnode.com/@gauravghuge", icon: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.5 18.75h-3v-3h3v3zm4.5 0h-3v-3h3v3zm-4.5-4.5h-3v-3h3v3zm4.5 0h-3v-3h3v3zm-4.5-4.5h-3v-3h3v3zm4.5 0h-3v-3h3v3z" },
    { name: "Medium", url: "https://medium.com/@gauravghuge737", icon: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm2.67 18.67c-.2 0-.4-.07-.53-.2l-2.8-2.8-2.8 2.8c-.13.13-.33.2-.53.2s-.4-.07-.53-.2l-.67-.67c-.13-.13-.2-.33-.2-.53s.07-.4.2-.53l3.33-3.33-3.33-3.33c-.13-.13-.2-.33-.2-.53s.07-.4.2-.53l.67-.67c.13-.13.33-.2.53-.2s.4.07.53.2l2.8 2.8 2.8-2.8c.13-.13.33-.2.53-.2s.4.07.53.2l.67.67c.13.13.2.33.2.53s-.07.4-.2.53l-3.33 3.33 3.33 3.33c.13.13.2.33.2.53s-.07.4-.2.53l-.67.67c-.13.13-.33.2-.53.2z" },
    { name: "Instagram", url: "https://instagram.com/garry_7038?igshid=OGY3MTU3OGY1MW==", icon: "M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.85.33 4.03.6c-.83.27-1.54.64-2.24 1.34S.72 3.25.45 4.03C.18 4.85-.02 5.78.04 7.05.1 8.33.1 8.74.1 12s0 3.67-.06 4.95c-.06 1.27.14 2.2.41 3.02.27.83.64 1.54 1.34 2.24s1.41 1.07 2.24 1.34c.82.27 1.75.47 3.02.41 1.28-.06 1.69-.07 4.95-.07s3.67 0 4.95.06c1.27.06 2.2-.14 3.02-.41.83-.27 1.54-.64 2.24-1.34s1.07-1.41 1.34-2.24c.27-.82.47-1.75.41-3.02-.06-1.28-.07-1.69-.07-4.95s0-3.67.07-4.95c.06-1.27-.14-2.2-.41-3.02-.27-.83-.64-1.54-1.34-2.24S20.1.72 19.28.45c-.82-.27-1.75-.47-3.02-.41C15.67.1 15.26.1 12 .1zm0 2.18c3.25 0 3.63.01 4.91.07 1.18.06 1.82.25 2.24.41.56.22 1.06.52 1.54 1s.78.98 1 1.54c.16.42.35 1.06.41 2.24.06 1.28.07 1.66.07 4.91s-.01 3.63-.07 4.91c-.06 1.18-.25 1.82-.41 2.24-.22.56-.52 1.06-1 1.54s-.98.78-1.54 1c-.42.16-1.06.35-2.24.41-1.28.06-1.66.07-4.91.07s-3.63-.01-4.91-.07c-1.18-.06-1.82-.25-2.24-.41-.56-.22-1.06-.52-1.54-1s-.78-.98-1-1.54c-.16-.42-.35-1.06-.41-2.24-.06-1.28-.07-1.66-.07-4.91s.01-3.63.07-4.91c.06-1.18.25-1.82.41-2.24.22-.56.52-1.06 1-1.54s.98-.78 1.54-1c.42-.16 1.06-.35 2.24-.41 1.28-.06 1.66-.07 4.91-.07zm0 3.82c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm4.5-10.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" },
    { name: "Twitter", url: "https://twitter.com/gauravghuge737", icon: "M22.46 6.03a8.19 8.19 0 0 1-2.35.65 4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7.2 3.74 11.64 11.64 0 0 1-8.44-4.28 4.1 4.1 0 0 0 1.27 5.48 4.08 4.08 0 0 1-1.85-.51v.05a4.1 4.1 0 0 0 3.28 4 4.09 4.09 0 0 1-1.84.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.59a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68v-.53a8.38 8.38 0 0 0 2.06-2.13z" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCNrGaENOoOUfkhCqRMxvTAw", icon: "M23.5 6.19c-.27-1.03-1.08-1.84-2.11-2.11C19.93 3.5 12 3.5 12 3.5s-7.93 0-9.39.58c-1.03.27-1.84 1.08-2.11 2.11C0 7.65 0 12 0 12s0 4.35.58 5.81c.27 1.03 1.08 1.84 2.11 2.11C4.07 20.5 12 20.5 12 20.5s7.93 0 9.39-.58c1.03-.27 1.84-1.08 2.11-2.11C24 16.35 24 12 24 12s0-4.35-.5-5.81zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" },
  ];

  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start mb-10">
          {/* Branding */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-white">Mpute</span>
              <span className="text-gold">Test</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              Cross-platform diagnostics for your computer. Test, optimize, and thrive—anywhere, anytime.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 text-sm font-medium">
            <Link href="/about">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">About</button>
            </Link>
            <Link href="/features">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">Features</button>
            </Link>
            <Link href="/contact">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">Contact</button>
            </Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center flex-wrap gap-6 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-all duration-200 transform hover:scale-110"
              title={link.name}
            >
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d={link.icon} />
              </svg>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs border-t border-gray-900 pt-6">
          © {new Date().getFullYear()} MputeTest.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}