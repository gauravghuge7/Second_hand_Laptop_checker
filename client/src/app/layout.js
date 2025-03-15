
"use client";

import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <header>
            <Navbar />
          </header>

          {children}


          <footer>

            <Footer />
          
          </footer>

        </Provider>

      </body>
    </html>
  );
}
