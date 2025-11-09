import { useState } from "react";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative">
        <nav className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <ul className="hidden md:flex items-center space-x-8 flex-1">
            <li>
              <button onClick={() => scrollToSection("hero")} className="text-white hover:text-primary transition-colors text-sm font-medium">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("features")} className="text-white hover:text-primary transition-colors text-sm font-medium">
                Product
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("pricing")} className="text-white hover:text-primary transition-colors text-sm font-medium">
                Pricing
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-primary transition-colors text-sm font-medium">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="text-white hover:text-primary transition-colors text-sm font-medium">
                Contact
              </button>
            </li>
          </ul>

          {/* Center Logo */}
          <div className="flex items-center cursor-pointer absolute left-1/2 transform -translate-x-1/2" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Figma Land" className="h-10 md:h-12" style={{ mixBlendMode: 'lighten' }} />
          </div>

          {/* Right Social Icons */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button and Logo */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              className="flex flex-col space-y-1.5 z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-black/80 rounded-lg mt-2 backdrop-blur-md">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <button onClick={() => scrollToSection("hero")} className="text-white hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="text-white hover:text-primary transition-colors">
                  Product
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="text-white hover:text-primary transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-white hover:text-primary transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-white hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
              <li className="flex gap-4 pt-4 border-t border-white/20">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
