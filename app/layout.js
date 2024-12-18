import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });
<script src="https://cdn.lordicon.com/lordicon.js"></script>

export const metadata = {
  title: "Get Me A Chai - Fund your projects with Chai",
  description: "A platform where people do crowdfunding for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
        <SessionWrapper>

          <Navbar />

          <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
            {children}
          </div>

          <Footer />
    
        </SessionWrapper>
      </body>
    </html>
  );
}

// min-h-screen on line no.24