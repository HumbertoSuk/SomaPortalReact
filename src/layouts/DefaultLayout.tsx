import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => (
  <div className="min-h-screen flex flex-col bg-grid-light dark:bg-grid-dark font-pixel text-gray-900 dark:text-gray-200">
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
