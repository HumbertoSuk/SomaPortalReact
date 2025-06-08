import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-purple-600 dark:from-gray-900 dark:to-black font-pixel text-black dark:text-white">
    <ThemeToggle />
    <Navbar />
    <main className="flex-grow p-6 flex items-center justify-center">
      <div className="bg-glass rounded-3xl shadow-xl p-8 w-full max-w-4xl animate-float">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default DefaultLayout;
