import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Home,
    UtensilsCrossed,
    Plane,
    ShoppingBag,
    Sparkles,
    HeartPulse,
    GraduationCap,
    BriefcaseBusiness,
    Cpu,
    ShoppingCart,
    ChartColumn,
    Hammer,
    Music2,
    BadgeDollarSign,
    UserRound,
} from "lucide-react";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const leftTextRef = useRef(null);
    const cardsRef = useRef([]);

    // Helper to dynamically push elements to ref arrays
    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    const projects = [
        {
            id: 1,
            title: "Residential",
            industries: [
                {
                    name: "Real Estate",
                    icon: Home,
                },
                {
                    name: "Restaurants & Cafés",
                    icon: UtensilsCrossed,
                },
                {
                    name: "Travel & Tourism",
                    icon: Plane,
                },
                {
                    name: "Retail Shops",
                    icon: ShoppingBag,
                },
            ],
            img: "/portfolio/residential/cover.png",
            link: "/portfolio/residential",
        },

        {
            id: 2,
            title: "Commercial",
            industries: [
                {
                    name: "Fashion & Beauty",
                    icon: Sparkles,
                },
                {
                    name: "Clinics & Healthcare",
                    icon: HeartPulse,
                },
                {
                    name: "Education & Training",
                    icon: GraduationCap,
                },
                {
                    name: "Business Setup",
                    icon: BriefcaseBusiness,
                },
            ],
            img: "/portfolio/commercial/cover.png",
            link: "/portfolio/commercial",
        },

        {
            id: 3,
            title: "Interior",
            industries: [
                {
                    name: "Software & IT",
                    icon: Cpu,
                },
                {
                    name: "E-commerce",
                    icon: ShoppingCart,
                },
                {
                    name: "Trading Companies",
                    icon: ChartColumn,
                },
                {
                    name: "Construction",
                    icon: Hammer,
                },
            ],
            img: "/portfolio/interior/cover.png",
            link: "/portfolio/interior",
        },

        {
            id: 4,
            title: "Hospitality",
            industries: [
                {
                    name: "Events & Entertainment",
                    icon: Music2,
                },
                {
                    name: "Financial Services",
                    icon: BadgeDollarSign,
                },
                {
                    name: "Personal Brands",
                    icon: UserRound,
                },
            ],
            img: "/portfolio/hospitality/cover.png",
            link: "/portfolio/hospitality",
        },
    ];

    useEffect(() => {

        let ctx = gsap.context(() => {
            gsap.set(cardsRef.current, {
                xPercent: 100,
                opacity: 0,
                scale: 0.9
            });
            gsap.set(cardsRef.current[0], {
                xPercent: 0,
                opacity: 1,
                scale: 1
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${projects.length * 100}%`,
                    pin: true,
                    scrub: 1,
                }
            });

            cardsRef.current.forEach((card, index) => {
                if (index === 0) return;

                const label = `slide${index}`;

                tl.to(cardsRef.current[index - 1], {
                    xPercent: -30,
                    opacity: 0,
                    scale: 0.95,
                    duration: 1,
                    ease: "power2.inOut"
                }, label);

                tl.to(card, {
                    xPercent: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.inOut"
                }, label);
            });
        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [projects.length]);

    return (
        <section
            ref={sectionRef}
            className="w-full h-screen text-black overflow-hidden relative flex flex-col lg:flex-row bg-[#f5f5f3]"
        >
            <div
                ref={leftTextRef}
                className="w-full h-[30vh] lg:h-full lg:w-5/12 flex flex-col justify-center px-6 md:px-12 lg:px-24 z-20"
            >
                <p className="text-[#f59e0b] text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-6 md:mb-8">
                    Industries We Serve
                </p>
                <div className="flex flex-col gap-1 md:gap-2">
                    <div className="overflow-hidden pb-1">
                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter leading-[0.8] text-black">
                            Expertise <span className='text-[#f59e0b]'>Across Every</span> Sector
                        </h2>
                    </div>
                </div>
                <p className="hidden lg:block text-xl font-light leading-relaxed text-black/60 max-w-sm mt-8">
                    We bring tailored marketing strategies for 15+ industries across Dubai, UAE, and international markets.
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative w-full h-[70vh] lg:h-full lg:w-7/12 flex items-center justify-center perspective-1000"
            >
                <div className="relative w-full max-w-[90%] md:max-w-2xl lg:max-w-3xl h-[55vh] lg:h-[65vh]">

                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={addToRefs}
                            className="absolute inset-0 w-full h-full bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-[0_25px_60px_rgba(0,0,0,0.06)] flex flex-col"
                        >


                            {/* CONTENT */}
                            <div className="flex-1 flex flex-col justify-between p-6 md:p-8 bg-[#f8f8f6]">

                                {/* INDUSTRIES GRID */}
                                <div className="grid grid-cols-2 gap-4">
                                    {project.industries.map((industry, i) => {
                                        const Icon = industry.icon;

                                        return (
                                            <div
                                                key={i}
                                                className="
                                                group relative overflow-hidden
                                                rounded-[28px]
                                                border border-white/40
                                                bg-gradient-to-br from-white via-[#fafaf8] to-[#f1f1ed]
                                                p-6 md:p-7
                                                backdrop-blur-xl
                                                transition-all duration-500 ease-out
                                                hover:-translate-y-2
                                                hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
                                                hover:border-[#f59e0b]/20
                                                "
                                            >

                                                {/* Glow Effect */}
                                                <div className="
                                                    absolute -top-10 -right-10
                                                    w-32 h-32
                                                    rounded-full
                                                    bg-[#f59e0b]/10
                                                    blur-3xl
                                                    opacity-0
                                                    transition-all duration-700
                                                    group-hover:opacity-100
                                                " />

                                                {/* Top Row */}
                                                <div className="flex items-start justify-between mb-2 relative z-10">

                                                    {/* Icon */}
                                                    <div className="
                                                        relative
                                                        w-16 h-16
                                                        rounded-2xl
                                                        bg-gradient-to-br from-[#ffffff] to-[#f3f4f6]
                                                        border border-black/5
                                                        flex items-center justify-center
                                                        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                                                        transition-all duration-500
                                                        group-hover:scale-110
                                                        group-hover:rotate-3
                                                    ">
                                                        <Icon
                                                            className="w-7 h-7 text-[#111827]"
                                                            strokeWidth={1.7}
                                                        />

                                                        {/* Icon Glow */}
                                                        <div className="
                                                        absolute inset-0 rounded-2xl
                                                        bg-[#f59e0b]/10
                                                        blur-xl opacity-0
                                                        group-hover:opacity-100
                                                        transition-all duration-500
                                                    " />
                                                    </div>

                                                    {/* Number */}
                                                    <span className="
                                                        text-[11px]
                                                        font-semibold
                                                        tracking-[0.25em]
                                                        text-black/30
                                                        uppercase
                                                    ">
                                                        0{i + 1}
                                                    </span>
                                                </div>

                                                {/* Content */}
                                                <div className="relative z-10">

                                                    <h3 className="
                                                        text-[18px] md:text-[20px]
                                                        font-semibold
                                                        tracking-tight
                                                        text-[#111827]
                                                        leading-tight
                                                    ">
                                                        {industry.name}
                                                    </h3>



                                                </div>

                                                {/* Bottom Line */}
                                                <div className="
                                                    mt-8
                                                    flex items-center justify-between
                                                    relative z-10
                                                ">

                                                    <div className="
                                                        w-12 h-[2px]
                                                        bg-gradient-to-r
                                                        from-[#f59e0b]
                                                        to-transparent
                                                        transition-all duration-500
                                                        group-hover:w-20
                                                    " />

                                                </div>

                                                {/* Noise Overlay */}
                                                <div className="
                                                    absolute inset-0 opacity-[0.03]
                                                    bg-[radial-gradient(#000_1px,transparent_1px)]
                                                    [background-size:16px_16px]
                                                    pointer-events-none
                                                " />
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* BUTTON */}
                                {/* <div className="mt-8 flex justify-end">
                                    <a
                                        href={project.link}
                                        className="group flex items-center gap-3 text-[#111827] text-xs font-semibold tracking-[0.25em] uppercase"
                                    >
                                        Explore

                                        <span className="w-11 h-11 rounded-full border border-[#111827] flex items-center justify-center transition-all duration-300 group-hover:bg-[#111827] group-hover:text-white group-hover:translate-x-1">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Industries;