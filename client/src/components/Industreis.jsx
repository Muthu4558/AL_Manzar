import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Building2,
    Home,
    LampDesk,
    Cpu,
    Store,
    UtensilsCrossed,
    Hotel,
    Trees,
    Landmark,
    Users,
    BriefcaseBusiness,
    Sparkles,
    MonitorSmartphone,
    Coffee,
    Wine,
    LayoutGrid,
    Building,
    Palette,
    Globe,
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
                    name: "Luxury Villas",
                    icon: Home,
                },
                {
                    name: "Apartments",
                    icon: Building2,
                },
                {
                    name: "Townhouses",
                    icon: LayoutGrid,
                },
                {
                    name: "Smart Homes",
                    icon: LampDesk,
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
                    name: "Corporate Offices",
                    icon: BriefcaseBusiness,
                },
                {
                    name: "Retail Stores",
                    icon: Store,
                },
                {
                    name: "Restaurants",
                    icon: UtensilsCrossed,
                },
                {
                    name: "Showrooms",
                    icon: Sparkles,
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
                    name: "Living Spaces",
                    icon: Home,
                },
                {
                    name: "Workspaces",
                    icon: MonitorSmartphone,
                },
                {
                    name: "Hospitality",
                    icon: Hotel,
                },
                {
                    name: "Luxury Interiors",
                    icon: Palette,
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
                    name: "Hotels",
                    icon: Hotel,
                },
                {
                    name: "Resorts",
                    icon: Globe,
                },
                {
                    name: "Cafés",
                    icon: Coffee,
                },
                {
                    name: "Fine Dining",
                    icon: Wine,
                },
            ],
            img: "/portfolio/hospitality/cover.png",
            link: "/portfolio/hospitality",
        },

        {
            id: 5,
            title: "Public Spaces",
            industries: [
                {
                    name: "Parks",
                    icon: Trees,
                },
                {
                    name: "Museums",
                    icon: Landmark,
                },
                {
                    name: "Community Spaces",
                    icon: Users,
                },
                {
                    name: "Urban Landscapes",
                    icon: Building,
                },
            ],
            img: "/portfolio/public/cover.png",
            link: "/portfolio/public-space",
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
                                                className="group bg-white rounded-2xl border border-black/5 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                            >
                                                <div className="w-14 h-14 rounded-2xl bg-[#f1f1ef] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                                                    <Icon
                                                        className="w-7 h-7 text-[#111827]"
                                                        strokeWidth={1.8}
                                                    />
                                                </div>

                                                <p className="text-sm md:text-base font-medium text-[#111827] leading-snug">
                                                    {industry.name}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* BUTTON */}
                                <div className="mt-8 flex justify-end">
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
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Industries;