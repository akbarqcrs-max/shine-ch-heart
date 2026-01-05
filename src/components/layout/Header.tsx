import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Who We Are",
    href: "/who-we-are",
    children: [
      { name: "Mission & Vision", href: "/who-we-are#mission" },
      { name: "Leadership", href: "/who-we-are#leadership" },
      { name: "Members", href: "/members" },
      { name: "Team", href: "/who-we-are#team" },
      { name: "Our Journey", href: "/who-we-are#journey" },
    ]
  },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Events", href: "/events" },
  { name: "All About Cancer", href: "/about-cancer" },
  { name: "Stories of Hope", href: "/stories-of-hope" },
  { name: "News & Updates", href: "/news-updates" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo - IVOS Style */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.children ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors outline-none ${location.pathname.startsWith(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}>
                    {link.name} <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 bg-background/95 backdrop-blur-md">
                    <DropdownMenuItem asChild>
                      <Link to={link.href} className="w-full cursor-pointer font-medium">
                        Overview
                      </Link>
                    </DropdownMenuItem>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        {child.href.startsWith("#") || child.href.includes("#") ? (
                          <a href={child.href} className="w-full cursor-pointer">
                            {child.name}
                          </a>
                        ) : (
                          <Link to={child.href} className="w-full cursor-pointer">
                            {child.name}
                          </Link>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="default" className="gap-2">
              <Heart className="w-4 h-4" />
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 border-t border-border overflow-hidden bg-background/95 backdrop-blur-md rounded-b-2xl"
            >
              <div className="flex flex-col gap-2 pt-4 px-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.children ? (
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <Link
                            to={link.href}
                            className={`flex-1 py-3 text-sm font-medium transition-colors ${location.pathname === link.href
                                ? "text-primary"
                                : "text-foreground hover:text-primary"
                              }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleDropdown(link.name);
                            }}
                            className="p-2"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`} />
                          </button>
                        </div>
                        <AnimatePresence>
                          {openDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-4 border-l-2 border-primary/20 ml-2 overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <div key={child.name} className="py-2">
                                  {child.href.startsWith("#") || child.href.includes("#") ? (
                                    <a
                                      href={child.href}
                                      className="block text-sm text-muted-foreground hover:text-primary"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {child.name}
                                    </a>
                                  ) : (
                                    <Link
                                      to={child.href}
                                      className="block text-sm text-muted-foreground hover:text-primary"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {child.name}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className={`block py-3 text-sm font-medium transition-colors ${location.pathname === link.href
                            ? "text-primary bg-primary/10 px-4 rounded-lg"
                            : "text-foreground hover:text-primary"
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4"
                >
                  <Button variant="default" className="w-full gap-2">
                    <Heart className="w-4 h-4" />
                    Donate
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
