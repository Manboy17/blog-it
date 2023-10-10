import type { Metadata } from "next";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import AuthProvider from "@/providers/AuthProvider";

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
      <AuthProvider>
        <body
          className={clsx(
            poppins.className,
            "min-h-screen max-w-[1200px] mx-auto px-4 flex flex-col"
          )}
        >
          <Navbar />
          <Categories />
          <div className="mt-12 flex flex-col md:flex-row gap-2 flex-grow">
            {children}
          </div>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
