import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- NAV CONFIG ---------------- */

const navLinks = [
  { name: "Home", type: "scroll", path: "home" },
  { name: "About", type: "scroll", path: "about" },
  { name: "Problem Statements", type: "route", path: "/problems" },
  { name: "Contribute", type: "scroll", path: "contribute" },
  { name: "Guidelines", type: "scroll", path: "guidelines" },
  { name: "Timeline", type: "scroll", path: "timeline" },
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
      ${mobile ? "px-4 py-3 rounded-xl" : "px-4 h-full"}
      text-base font-medium text-white/70
      hover:text-white
      transition-colors duration-200
      flex items-center w-full text-left
    `}
  >
    {link.name}

    {/* Underline — center out */}
    {!mobile && (
      <span
        className="
          pointer-events-none
          absolute left-1/2 bottom-[2px]
          h-[1.5px] w-0
          bg-white/80
          transition-all duration-300 ease-out
          group-hover:w-full
          group-hover:left-0
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
          bg-[#020817]/10 backdrop-blur-md

          transition-all duration-500
          ${scrolled ? "bg-[#020817]/10" : "bg-[#020817]/10"}
        `}
      >
        {/* CENTERED CONTENT */}
        <nav className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          {/* LEFT — LOGO */}
          <Link to="/" className="flex items-center gap-2 text-white">
            <GraduationCap className="w-8 h-8 text-yellow-400" />
            <span className="hidden sm:block font-semibold tracking-wide">
              Hackathon
            </span>
          </Link>

          {/* CENTER — DESKTOP NAV */}
          <div className="hidden md:flex items-center h-full gap-6">
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
              className="p-2 rounded-full text-white/80 hover:bg-white/10 transition"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 rounded-full text-white/80 hover:bg-white/10 transition"
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

      {/* MOBILE MENU — SAME FULL-WIDTH GLASS */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              md:hidden
              w-full
              bg-white/10 backdrop-blur-md
              border-b border-white/10
            "
          >
            <div className="mx-auto max-w-7xl px-6 py-4">
              <div className="flex flex-col gap-2">
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
