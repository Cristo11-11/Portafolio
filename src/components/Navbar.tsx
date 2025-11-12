import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
            <span className="text-xl">{"<Dev />"}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="hover:text-gray-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-gray-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-gray-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-gray-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left hover:text-gray-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="block w-full text-left hover:text-gray-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="block w-full text-left hover:text-gray-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left hover:text-gray-600 transition-colors">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
