import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Industries",
    link: "#industries",
  },
  {
    name: "Why Us",
    link: "#whyus",
  },
  {
    name: "Process",
    link: "#process",
  },
  {
    name: "About Us",
    link: "#about",
  },
  {
    name: "Contact Us",
    link: "#contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f5f5f3] border-b border-black/5">
        <div className="h-24 px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4 cursor-pointer">
            {/* LOGO */}
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <span className="text-white text-xl font-semibold">M</span>
            </div>

            {/* NAME */}
            <div>
              <h1 className="text-[28px] font-bold text-black leading-none">
                Al Manzar
              </h1>

              <p className="uppercase tracking-[4px] text-[11px] text-[#f59e0b] mt-1">
                Digital Marketing
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            {/* BUTTON */}
            <button className="hidden md:flex px-10 py-4 rounded-full border border-black text-black text-lg font-medium hover:bg-[#f59e0b] hover:border-[#f59e0b] hover:text-white transition-all duration-300">
              Get Started
            </button>

            {/* MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="w-14 h-14 flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu size={42} strokeWidth={1.5} className="text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[100] bg-[#f5f5f3] flex flex-col"
          >
            {/* TOP */}
            <div className="h-24 border-b border-black/5 px-6 md:px-12 lg:px-20 flex items-center justify-between">
              {/* LOGO */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">M</span>
                </div>

                <div>
                  <h1 className="text-[28px] font-bold text-black leading-none">
                    Al Manzar
                  </h1>

                  <p className="uppercase tracking-[4px] text-[11px] text-[#f59e0b] mt-1">
                    Digital Marketing
                  </p>
                </div>
              </div>

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="w-14 h-14 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={42} strokeWidth={1.5} className="text-black" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="flex flex-col justify-center px-6 sm:px-8 md:px-20 lg:px-32 py-10 md:py-20">
                <div className="space-y-4 md:space-y-6">
                  {navLinks.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="block text-[2.2rem] sm:text-[2.8rem] md:text-[4rem] lg:text-[3rem] font-semibold text-black hover:text-[#f59e0b] transition-all duration-300 leading-none"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex border-t lg:border-t-0 lg:border-l border-black/5 relative overflow-hidden min-h-[260px] sm:min-h-[280px] lg:min-h-full">
                {/* VERTICAL TEXT */}
                <div className="absolute right-[-35px] sm:right-[-30px] md:right-[-20px] top-1/2 -translate-y-1/2 rotate-90 pointer-events-none">
                  <h1 className="text-[2.8rem] sm:text-[3.5rem] md:text-[5rem] font-bold text-black/[0.04] tracking-[10px]">
                    MARKETING
                  </h1>
                </div>

                {/* CONTACT */}
                <div className="relative z-10 flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-20 w-full">
                  <p className="uppercase tracking-[5px] text-[10px] md:text-sm text-[#6b7280] mb-5 md:mb-6">
                    Let's Connect
                  </p>

                  <div className="space-y-2 sm:space-y-3 md:space-y-5">
                    <p className="text-[1rem] sm:text-[1.1rem] md:text-[2rem] text-black break-all">
                      support@almanzar.com
                    </p>

                    <p className="text-[1rem] sm:text-[1.1rem] md:text-[2rem] text-black">
                      +971 00 000 0000
                    </p>
                  </div>

                  {/* SOCIAL ICONS */}
                  <div className="flex gap-4 md:gap-6 mt-6 md:mt-10">
                    {[
                      { icon: <FaLinkedinIn size={18} /> },
                      { icon: <FaInstagram size={18} /> },
                      { icon: <FaFacebookF size={18} /> },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-[#f59e0b] hover:border-[#f59e0b] hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;