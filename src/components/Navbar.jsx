import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  GraduationCap,
  Home,
  Info,
  FileQuestion,
  GitBranch,
  BookOpen,
  Calendar
} from "lucide-react";
import hackathonLogo from '../assets/HackathonLogo.png';
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", type: "scroll", path: "home", icon: <Home size={18} /> },
  { name: "About", type: "scroll", path: "about", icon: <Info size={18} /> },
  { name: "Contribute", type: "scroll", path: "contribute", icon: <GitBranch size={18} /> },
  { name: "Problem Statements", type: "route", path: "/problems", icon: <FileQuestion size={18} /> },
  { name: "Guidelines", type: "scroll", path: "guidelines", icon: <BookOpen size={18} /> },
  { name: "Timeline", type: "scroll", path: "timeline", icon: <Calendar size={18} /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (link) => {
    // CRITICAL FIX: Close menu FIRST
    setMenuOpen(false);

    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation AND menu close animation to complete
      setTimeout(() => scrollToSection(link.path), 300);
    } else {
      // Small delay to let menu close animation start
      setTimeout(() => scrollToSection(link.path), 100);
    }
  };

  const NavItem = ({ link, mobile = false }) => (
    <button
      onClick={() => handleNavigation(link)}
      className={`
        relative group
        ${mobile ? "px-4 py-3 rounded-xl hover:bg-white/5" : "px-4 h-full"}
        text-base font-medium text-white/80 transition-colors duration-200 flex items-center gap-2 w-full text-left
      `}
    >
      <span className="text-white-100 transition-colors">{link.icon}</span>
      {link.name}
      {!mobile && (
        <span className="pointer-events-none absolute left-1/2 bottom-[18px] h-[1.5px] w-0 bg-white/80 transition-all duration-300 ease-out group-hover:w-[80%] group-hover:left-[10%]" />
      )}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`
          w-full
          backdrop-blur-xl
          transition-all duration-500
          border-b border-white/5
          relative z-20
          ${scrolled ? "bg-[#020817]/90 shadow-lg" : "bg-[#020817]/50"}
        `}
      >
        <nav className="mx-auto max-w-7xl px-0 h-20 flex items-center justify-between lg:justify-center gap-12 relative z-10">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={hackathonLogo}
              alt="Hackathon Logo"
              className="
                w-10 h-10
                sm:w-12 sm:h-12
                md:w-16 md:h-16
                object-contain
                transition-transform
                group-hover:scale-110
                ml-4
              "
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center h-full gap-4">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="h-full flex items-center"
              >
                <NavItem link={link} />
              </motion.div>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center md:hidden justify-between px-4 sm:px-6 md:px-8">
            <button
              className="p-2 rounded-full text-white/80 hover:bg-white/10 transition"
              onClick={() => setMenuOpen((p) => !p)}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden w-full bg-[#020817]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden relative z-30"
          >
            <div className="mx-auto max-w-7xl px-6 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavItem key={link.name} link={link} mobile />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}