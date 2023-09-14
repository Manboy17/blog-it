import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import MostPopular from "@/components/MostPopular";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Blog IT",
  description: "Dive into It sphere deeply",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="max-w-[1200px] mx-auto px-4">
          <Navbar />
          <Categories />
          <div className="mt-12 flex flex-col md:flex-row gap-2">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
