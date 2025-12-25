import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  GraduationCap,
  Home,
  Info,
  FileQuestion,
  GitBranch,
  BookOpen,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- NAV CONFIG ---------------- */

const navLinks = [
  { name: "Home", type: "scroll", path: "home", icon: <Home size={18} /> },
  { name: "About", type: "scroll", path: "about", icon: <Info size={18} /> },
  { name: "Problem Statements", type: "route", path: "/problems", icon: <FileQuestion size={18} /> },
  { name: "Contribute", type: "scroll", path: "contribute", icon: <GitBranch size={18} /> },
  { name: "Guidelines", type: "scroll", path: "guidelines", icon: <BookOpen size={18} /> },
  { name: "Timeline", type: "scroll", path: "timeline", icon: <Calendar size={18} /> },
];

/* ---------------- COMPONENT ---------------- */

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* ---------------- SCROLL DETECT ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- HELPERS ---------------- */

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (link) => {
    setMenuOpen(false);

    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(link.path), 120);
    } else {
      scrollToSection(link.path);
    }
  };

  /* ---------------- NAV ITEM ---------------- */

  const NavItem = ({ link, mobile = false }) => (
    <button
      onClick={() => handleNavigation(link)}
      className={`
        relative group
        ${mobile ? "px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5" : "px-4 h-full"}
        
        /* FIX: Dynamic text colors for Light/Dark mode */
        text-base font-medium 
        text-slate-600 dark:text-white/70
        
        hover:text-black dark:hover:text-white
        transition-colors duration-200
        flex items-center gap-2 w-full text-left
      `}
    >
      {/* Icon */}
      <span className="text-yellow-500 dark:text-yellow-400/80 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
        {link.icon}
      </span>
      
      {link.name}

      {/* Underline — center out (Desktop only) */}
      {!mobile && (
        <span
          className="
            pointer-events-none
            absolute left-1/2 bottom-[18px]
            h-[1.5px] w-0
            
            /* FIX: Underline color adaptation */
            bg-black/80 dark:bg-white/80
            
            transition-all duration-300 ease-out
            group-hover:w-[80%]
            group-hover:left-[10%]
          "
        />
      )}
    </button>
  );

  /* ---------------- JSX ---------------- */

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <div
        className={`
          w-full
          backdrop-blur-md
          transition-all duration-500
          
          /* FIX: Dynamic Border */
          border-b border-black/5 dark:border-white/5
          
          ${
            scrolled 
              /* FIX: Dynamic Backgrounds */
              ? "bg-white/80 dark:bg-[#020817]/80 shadow-lg" 
              : "bg-white/60 dark:bg-[#020817]/60"
          }
        `}
      >
        {/* CENTERED CONTENT */}
        <nav className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          {/* LEFT — LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <GraduationCap className="w-8 h-8 text-yellow-500 dark:text-yellow-400 transition-transform group-hover:scale-110" />
            <span className="hidden sm:block font-semibold tracking-wide text-slate-900 dark:text-white">
              Hackathon
            </span>
          </Link>

          {/* CENTER — DESKTOP NAV */}
          <div className="hidden md:flex items-center h-full gap-2">
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

          {/* RIGHT — ACTIONS */}
          <div className="flex items-center gap-2">
            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 rounded-full text-slate-600 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10 transition"
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
            className="
              md:hidden
              w-full
              
              /* FIX: Dynamic Mobile Background */
              bg-white/30 dark:bg-[#020817]/30
              
              backdrop-blur-xl
              border-b border-black/5 dark:border-white/10
              overflow-hidden
            "
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