import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Arbab Pack Ltd",
  description: "Innovative packaging solutions for a sustainable future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="">
          {" "}
          {/* Add padding-top to account for fixed navbar */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
