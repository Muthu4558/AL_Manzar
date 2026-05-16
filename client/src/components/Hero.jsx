import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {

    // TYPEWRITER TEXTS
    const texts = [
        "Your Brand.",
        "Our Strategy.",
        "Digital Growth."
    ];

    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {

        const currentText = texts[textIndex];

        let timeout;

        // TYPE TEXT
        if (charIndex < currentText.length) {

            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, 70);

        }

        // NEXT TEXT
        else {

            timeout = setTimeout(() => {

                setDisplayText("");
                setCharIndex(0);

                setTextIndex((prev) =>
                    prev === texts.length - 1 ? 0 : prev + 1
                );

            }, 1500);

        }

        return () => clearTimeout(timeout);

    }, [charIndex, textIndex]);

    return (
        <section className="relative bg-[#f5f5f3] min-h-screen flex items-center overflow-hidden pt-28 md:pt-32">

            {/* BACKGROUND TEXT */}
            <div className="hidden lg:block absolute right-[350px] top-1/2 -translate-y-1/2 rotate-90 pointer-events-none">
                <h1 className="text-[6rem] xl:text-[8rem] font-bold text-black/[0.03] tracking-[10px] whitespace-nowrap">
                    DIGITAL
                </h1>
            </div>

            {/* MAIN CONTAINER */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">

                <div className="max-w-[1400px] mx-auto">

                    {/* BADGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 border border-[#3b82f6]/20 rounded-full px-4 md:px-6 py-3 bg-white mb-8"
                    >
                        <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>

                        <p className="text-[#f59e0b] text-xs sm:text-sm md:text-base font-medium">
                            Dubai-Based Digital Marketing Agency
                        </p>
                    </motion.div>

                    {/* HERO GRID */}
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">

                        {/* LEFT */}
                        <div>

                            {/* TITLE */}
                            <motion.h1
                                initial={{ opacity: 0, y: 35 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="leading-[0.92] tracking-[-2px]"
                            >

                                <span
                                    className={`
                                        block font-semibold min-h-[1.2em]
                                        text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.5rem]
                                        ${textIndex === 1 ? "text-[#f59e0b]" : "text-black"}
                                    `}
                                >
                                    {displayText}

                                    <span className="inline-block w-[2px] h-[0.9em] ml-2 bg-current animate-pulse align-middle" />
                                </span>

                            </motion.h1>

                            {/* DESCRIPTION */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.7 }}
                                className="mt-7 max-w-[720px] text-[#6b7280] leading-relaxed text-base sm:text-lg md:text-xl font-light"
                            >
                                Al Manzar helps businesses across Dubai and international
                                markets grow through social media marketing, branding,
                                lead generation, and complete digital solutions.
                            </motion.p>

                            {/* BUTTONS */}
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.7 }}
                                className="flex flex-wrap gap-4 mt-10"
                            >
                                <button className="px-7 md:px-10 py-3 md:py-4 rounded-full bg-[#f59e0b] text-white text-base md:text-lg font-medium hover:scale-105 transition-all duration-300">
                                    Get Started
                                </button>

                                <button className="px-7 md:px-10 py-3 md:py-4 rounded-full border border-black/10 text-black text-base md:text-lg font-medium hover:bg-black hover:text-white transition-all duration-300">
                                    View Services
                                </button>
                            </motion.div>
                        </div>

                        {/* RIGHT SIDE CARD */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="relative"
                        >
                            <div className="bg-white border border-black/5 rounded-[40px] p-8 md:p-10 shadow-sm">

                                <div className="space-y-8">

                                    <div>
                                        <p className="uppercase tracking-[4px] text-[11px] text-[#6b7280] mb-3">
                                            Campaigns Launched
                                        </p>

                                        <h2 className="text-4xl md:text-5xl font-semibold text-black">
                                            500+
                                        </h2>
                                    </div>

                                    <div className="border-t border-black/5 pt-8">
                                        <p className="uppercase tracking-[4px] text-[11px] text-[#6b7280] mb-3">
                                            Happy Clients
                                        </p>

                                        <h2 className="text-4xl md:text-5xl font-semibold text-black">
                                            200+
                                        </h2>
                                    </div>

                                    <div className="border-t border-black/5 pt-8">
                                        <p className="uppercase tracking-[4px] text-[11px] text-[#6b7280] mb-3">
                                            Years of Experience
                                        </p>

                                        <h2 className="text-4xl md:text-5xl font-semibold text-black">
                                            5+ Years
                                        </h2>
                                    </div>

                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;