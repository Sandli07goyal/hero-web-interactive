import { Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-dark text-primary-dark-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Pages */}
          <div>
            <h4 className="font-bold text-lg mb-4">Pages</h4>
            <ul className="space-y-2">
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

          {/* Tomothy */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tomothy</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Eleanor Edwards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ted Robertson</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Annette Russell</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jennie Mckinney</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gloria Richards</a></li>
            </ul>
          </div>

          {/* Jane Black */}
          <div>
            <h4 className="font-bold text-lg mb-4">Jane Black</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Philip Jones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Product Help</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Offices</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Company</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
            </ul>
          </div>

          {/* Address & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <address className="not-italic text-sm mb-6">
              7480 Mockingbird Hill undefined<br />
              Mumbai, Maharashtra, India
            </address>
            <div className="flex gap-4">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © 2024 Figma Land. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
