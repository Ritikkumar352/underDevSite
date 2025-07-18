import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../components/ThemeProvider";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/#experience" },
    { name: "Contact", path: "/#contact" },
    {
      name: "Resume",
      external: true,
      url: "https://drive.google.com/uc?export=download&id=1kWFDBeO7uOcDuoTilK76H56jFQvStSvb",
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="retro-container flex justify-between items-center py-4">
        <Link to="/" className="font-press-start text-xl">
          <span className="text-primary">&lt;</span>
          <span>Portfolio</span>
          <span className="text-primary">/&gt;</span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-foreground"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-vt323 text-xl hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`font-vt323 text-xl hover:text-primary transition-colors ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            )
          )}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-vt323 text-xl hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-vt323 text-xl hover:text-primary transition-colors ${
                      isActive(item.path) ? "text-primary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 font-vt323 text-xl hover:text-primary transition-colors"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
