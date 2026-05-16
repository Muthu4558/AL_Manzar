import React from "react";
import {
    FiHome,
    FiCoffee,
    FiMapPin,
    FiShoppingBag,
    FiHeart,
    FiBookOpen,
    FiBriefcase,
    FiCode,
    FiBox,
    FiBarChart2,
    FiTool,
    FiMusic,
    FiDollarSign,
    FiUser,
    // FiSparkles,
    FiArrowUpRight,
} from "react-icons/fi";

const industries = [
    {
        title: "Real Estate",
        icon: FiHome,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        title: "Restaurants & Cafés",
        icon: FiCoffee,
        color: "text-orange-500",
        bg: "bg-orange-50",
    },
    {
        title: "Travel & Tourism",
        icon: FiMapPin,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
    },
    {
        title: "Retail Shops",
        icon: FiShoppingBag,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
    },
    {
        title: "Fashion & Beauty",
        icon: FiShoppingBag,
        color: "text-pink-500",
        bg: "bg-pink-50",
    },
    {
        title: "Clinics & Healthcare",
        icon: FiHeart,
        color: "text-red-500",
        bg: "bg-red-50",
    },
    {
        title: "Education & Training",
        icon: FiBookOpen,
        color: "text-violet-500",
        bg: "bg-violet-50",
    },
    {
        title: "Business Setup",
        icon: FiBriefcase,
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
    {
        title: "Software & IT",
        icon: FiCode,
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        title: "E-commerce",
        icon: FiBox,
        color: "text-teal-500",
        bg: "bg-teal-50",
    },
    {
        title: "Trading Companies",
        icon: FiBarChart2,
        color: "text-slate-600",
        bg: "bg-slate-100",
    },
    {
        title: "Construction",
        icon: FiTool,
        color: "text-yellow-700",
        bg: "bg-yellow-50",
    },
    {
        title: "Events & Entertainment",
        icon: FiMusic,
        color: "text-rose-500",
        bg: "bg-rose-50",
    },
    {
        title: "Financial Services",
        icon: FiDollarSign,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        title: "Personal Brands",
        icon: FiUser,
        color: "text-purple-500",
        bg: "bg-purple-50",
    },
];

const Industries = () => {
    return (
        <section className="relative py-28 md:py-36 bg-[#f5f5f3] overflow-hidden">

            {/* TOP BLUR */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#f59e0b]/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20">

                {/* TOP SECTION */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

                    {/* LEFT */}
                    <div className="max-w-[780px]">

                        {/* BADGE */}
                        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-black/5 shadow-sm">

                            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />

                            <p className="text-[#f59e0b] text-sm font-medium tracking-wide">
                                Industries We Serve
                            </p>

                        </div>

                        {/* TITLE */}
                        <h2 className="mt-8 leading-[0.9] tracking-[-4px] font-semibold">

                            <span className="block text-black text-[3.3rem] sm:text-[4.5rem] md:text-[5.8rem] lg:text-[6.5rem]">
                                Expertise Across
                            </span>

                            <span className="block text-[#f59e0b] text-[3.3rem] sm:text-[4.5rem] md:text-[5.8rem] lg:text-[6.5rem]">
                                Every Sector
                            </span>

                        </h2>

                    </div>

                    {/* RIGHT */}
                    <div className="max-w-[500px]">

                        <p className="text-[#6b7280] text-lg md:text-xl leading-relaxed font-light">
                            We bring tailored marketing strategies for 15+ industries
                            across Dubai, UAE, and international markets with
                            performance-focused branding, advertising, and scalable
                            digital growth solutions.
                        </p>

                    </div>

                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-7 mt-24">

                    {industries.map((industry, index) => {

                        const Icon = industry.icon;

                        return (
                            <div
                                key={index}
                                className="
                                    group relative overflow-hidden
                                    bg-white border border-black/[0.04]
                                    rounded-[32px]
                                    p-7 md:p-8
                                    min-h-[220px]
                                    flex flex-col justify-between
                                    hover:-translate-y-2
                                    hover:shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                                    transition-all duration-500
                                "
                            >

                                {/* TOP RIGHT ICON */}
                                <div className="absolute top-6 right-6 opacity-0 translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">

                                    <div className="w-10 h-10 rounded-full bg-[#f5f5f3] flex items-center justify-center">

                                        <FiArrowUpRight
                                            className="text-black"
                                            size={18}
                                        />

                                    </div>

                                </div>

                                {/* ICON */}
                                <div
                                    className={`
                                        w-20 h-20 rounded-[26px]
                                        flex items-center justify-center
                                        ${industry.bg}
                                        transition-all duration-500
                                        group-hover:scale-110
                                    `}
                                >

                                    <Icon
                                        size={34}
                                        className={`${industry.color}`}
                                    />

                                </div>

                                {/* CONTENT */}
                                <div className="mt-10">

                                    <p className="text-black text-lg md:text-[1.35rem] leading-snug font-medium">
                                        {industry.title}
                                    </p>

                                </div>

                                {/* HOVER LINE */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#f59e0b] group-hover:w-full transition-all duration-500" />

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default Industries;