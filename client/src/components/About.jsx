import React from "react";
import {
    CheckCircle2,
    ArrowUpRight,
} from "lucide-react";

const About = () => {

    const points = [
        "Dubai & UAE market expertise",
        "Strong brand identity building",
        "Professional content creation",
        "Creative & result-driven campaigns",
        "Quality lead generation",
        "Transparent reporting & communication",
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#f5f5f3] py-14 md:py-20">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start min-h-screen">

                    {/* LEFT SIDE */}
                    <div className="relative">

                        {/* MAIN IMAGE */}
                        <div className="overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
                            <img
                                src="/images/about/about-1.jpg"
                                alt="About Al Manzar"
                                className="w-full h-[320px] lg:h-[360px] object-cover"
                            />
                        </div>

                        {/* SMALL IMAGES */}
                        <div className="grid grid-cols-2 gap-5 mt-5">

                            {/* IMAGE 2 */}
                            <div className="overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                                <img
                                    src="/images/about/about-2.jpg"
                                    alt="Team"
                                    className="w-full h-[170px] lg:h-[190px] object-cover"
                                />
                            </div>

                            {/* IMAGE 3 */}
                            <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

                                <img
                                    src="/images/about/about-3.jpg"
                                    alt="Meeting"
                                    className="w-full h-[170px] lg:h-[190px] object-cover"
                                />

                                {/* EXPERIENCE CARD */}
                                <div className="
                  absolute bottom-4 right-4
                  bg-[#f59e0b]
                  rounded-[24px]
                  px-6 py-5
                  shadow-[0_20px_50px_rgba(245,158,11,0.35)]
                ">

                                    <h3 className="
                    text-4xl md:text-5xl
                    font-bold
                    text-white
                    leading-none
                  ">
                                        5+
                                    </h3>

                                    <p className="
                    mt-2
                    text-white/90
                    uppercase
                    tracking-[0.12em]
                    text-[10px]
                    md:text-xs
                    font-semibold
                  ">
                                        Years in Dubai
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col justify-center h-full">

                        {/* LABEL */}
                        <p className="
              text-[#f59e0b]
              text-xs md:text-sm
              tracking-[0.35em]
              uppercase
              font-semibold
              mb-5
            ">
                            About Us
                        </p>

                        {/* TITLE */}
                        <h2 className="
              text-4xl md:text-5xl lg:text-6xl
              font-semibold
              tracking-tight
              leading-[0.95]
              text-[#111827]
              max-w-[700px]
            ">
                            Your Growth is{" "}
                            <span className="
                text-[#f59e0b]
              ">
                                Our Mission
                            </span>
                        </h2>

                        {/* DESCRIPTION */}
                        <div className="mt-6 space-y-5 max-w-[700px]">

                            <p className="
                text-black/65
                text-[13px]
                md:text-[15px]
                leading-8
              ">
                                Al Manzar Digital Marketing Agency is a professional digital
                                marketing and brand promotion company based in Dubai, UAE.
                                We work with businesses of all sizes — from startups to
                                established corporations — to improve their online presence
                                and grow their customer base.
                            </p>

                            <p className="
                text-black/65
                text-[13px]
                md:text-[15px]
                leading-8
              ">
                                At Al Manzar, we believe that every brand has a story.
                                Our mission is to present your brand story in a powerful,
                                professional, and profitable way — making your brand
                                visible, trusted, and profitable.
                            </p>

                        </div>

                        {/* FEATURES */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8 max-w-[760px]">

                            {points.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >

                                    <div className="
                    w-6 h-6 rounded-full
                    border border-[#4361ee]/20
                    bg-[#4361ee]/5
                    flex items-center justify-center
                    shrink-0
                  ">
                                        <CheckCircle2
                                            className="w-3.5 h-3.5 text-[#4361ee]"
                                            strokeWidth={2.5}
                                        />
                                    </div>

                                    <p className="
                    text-[#111827]
                    text-[10px]
                    md:text-[12px]
                    font-medium
                  ">
                                        {point}
                                    </p>

                                </div>
                            ))}

                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap items-center gap-4 mt-8">

                            {/* PRIMARY BUTTON */}
                            <button className="
                group relative overflow-hidden
                px-7 md:px-9
                h-[58px]
                rounded-2xl
                bg-[#111827]
                text-white
                font-semibold
                text-base
                transition-all duration-500
                hover:scale-[1.03]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              ">

                                <span className="relative z-10 flex items-center gap-3">
                                    Work With Us

                                    <ArrowUpRight
                                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </span>

                                <div className="
                  absolute inset-0
                  
                  group-hover:opacity-100
                  transition-all duration-500
                " />

                            </button>

                            {/* SECONDARY BUTTON */}
                            <button className="
                px-7 md:px-9
                h-[58px]
                rounded-2xl
                border border-black/10
                bg-white/70
                backdrop-blur-xl
                text-[#111827]
                font-semibold
                text-base
                transition-all duration-500
                hover:border-[#f59e0b]
                hover:bg-[#f59e0b]
                hover:text-white
                hover:scale-[1.03]
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
              ">
                                Our Services
                            </button>

                        </div>

                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

                    {/* MISSION CARD */}
                    <div className="
    group relative overflow-hidden
    rounded-[32px]
    border border-black/5
    bg-white/70
    backdrop-blur-xl
    p-7 md:p-8
    transition-all duration-500
    hover:-translate-y-1
    hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
  ">

                        {/* GRADIENT GLOW */}
                        <div className="
      absolute -top-16 -right-16
      w-40 h-40
      rounded-full
      bg-[#4361ee]/10
      blur-3xl
      opacity-0
      group-hover:opacity-100
      transition-all duration-700
    " />

                        {/* LABEL */}
                        <div className="
      relative z-10
      flex items-center gap-3
      mb-6
    ">

                            <div className="
        w-12 h-12 rounded-2xl
        bg-[#f59e0b]/10
        border border-[#f59e0b]/10
        flex items-center justify-center
      ">
                                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                            </div>

                            <div>
                                <p className="
                                text-[#f59e0b]
                                text-[11px]
                                tracking-[0.35em]
                                uppercase
                                font-semibold
                                ">
                                    Our Mission
                                </p>

                                <div className="
                                w-16 h-[2px]
                                bg-gradient-to-r
                                from-[#f59e0b]
                                to-transparent
                                mt-2
                                " />
                            </div>

                        </div>

                        {/* CONTENT */}
                        <p className="
                        relative z-10
                        text-black/65
                        text-[15px]
                        md:text-[16px]
                        leading-8
                        ">
                            To help businesses grow through creative digital marketing,
                            professional branding, and result-focused advertising strategies
                            that deliver measurable impact.
                        </p>

                    </div>

                    {/* VISION CARD */}
                    <div className="
                        group relative overflow-hidden
                        rounded-[32px]
                        border border-black/5
                        bg-white/70
                        backdrop-blur-xl
                        p-7 md:p-8
                        transition-all duration-500
                        hover:-translate-y-1
                        hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                    ">

                        {/* GRADIENT GLOW */}
                        <div className="
                        absolute -top-16 -right-16
                        w-40 h-40
                        rounded-full
                        bg-[#f59e0b]/10
                        blur-3xl
                        opacity-0
                        group-hover:opacity-100
                        transition-all duration-700
                        " />

                        {/* LABEL */}
                        <div className="
                        relative z-10
                        flex items-center gap-3
                        mb-6
                        ">

                            <div className="
                                w-12 h-12 rounded-2xl
                                bg-[#f59e0b]/10
                                border border-[#f59e0b]/10
                                flex items-center justify-center
                            ">
                                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                            </div>

                            <div>
                                <p className="
                                text-[#f59e0b]
                                text-[11px]
                                tracking-[0.35em]
                                uppercase
                                font-semibold
                                ">
                                    Our Vision
                                </p>

                                <div className="
                                w-16 h-[2px]
                                bg-gradient-to-r
                                from-[#f59e0b]
                                to-transparent
                                mt-2
                                " />
                            </div>

                        </div>

                        {/* CONTENT */}
                        <p className="
                        relative z-10
                        text-black/65
                        text-[15px]
                        md:text-[16px]
                        leading-8
                        ">
                            To become one of Dubai's most trusted digital marketing agencies
                            for social media growth, brand promotion, lead generation,
                            and business development.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;