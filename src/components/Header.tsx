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
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark text-primary-dark-foreground">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Figma Land" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button onClick={() => scrollToSection("hero")} className="hover:text-primary transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("features")} className="hover:text-primary transition-colors">
                Product
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">
                Pricing
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                Contact
              </button>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-primary-dark-foreground"></span>
            <span className="block w-6 h-0.5 bg-primary-dark-foreground"></span>
            <span className="block w-6 h-0.5 bg-primary-dark-foreground"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <button onClick={() => scrollToSection("hero")} className="hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="hover:text-primary transition-colors">
                  Product
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
