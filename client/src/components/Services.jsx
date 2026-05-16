import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
    FiTrendingUp,
    FiTarget,
    FiBriefcase,
    FiBarChart2,
    FiUsers,
    FiFacebook,
    FiSearch,
    FiEdit3,
    FiVideo,
    FiMonitor,
    FiPieChart,
    FiMessageCircle,
    FiHome,
    FiShoppingBag,
    FiAward,
    FiArrowUpRight,
} from "react-icons/fi";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Social Media Marketing",
        desc: "Build a powerful online presence through strategic content creation, audience engagement, and platform growth tailored for modern brands.",
        icon: FiTrendingUp,
    },
    {
        title: "Brand Promotion",
        desc: "Increase visibility and trust with premium promotional campaigns designed to position your business in front of the right audience.",
        icon: FiTarget,
    },
    {
        title: "Brand Marketing",
        desc: "Create a strong brand identity with consistent messaging, visual storytelling, and long-term digital positioning strategies.",
        icon: FiBriefcase,
    },
    {
        title: "Digital Marketing",
        desc: "Complete digital marketing solutions focused on visibility, lead generation, customer retention, and business growth.",
        icon: FiBarChart2,
    },
    {
        title: "Lead Generation",
        desc: "Generate quality leads using targeted campaigns, optimized funnels, and conversion-focused marketing strategies.",
        icon: FiUsers,
    },
    {
        title: "Meta Ads Management",
        desc: "Run high-performing Facebook and Instagram ad campaigns with advanced audience targeting and ROI optimization.",
        icon: FiFacebook,
    },
    {
        title: "Google Ads Management",
        desc: "Capture high-intent customers through optimized search, display, and remarketing campaigns across Google platforms.",
        icon: FiSearch,
    },
    {
        title: "Content Creation",
        desc: "Premium visual and written content crafted to improve engagement, branding, and audience connection across digital channels.",
        icon: FiEdit3,
    },
    {
        title: "Video Marketing",
        desc: "Professional short-form and cinematic video marketing designed to increase reach, engagement, and conversions.",
        icon: FiVideo,
    },
    {
        title: "Website Design",
        desc: "Modern responsive websites with premium UI/UX focused on branding, performance, and high conversion rates.",
        icon: FiMonitor,
    },
    {
        title: "SEO Services",
        desc: "Improve search rankings and online visibility through strategic SEO, technical optimization, and content planning.",
        icon: FiPieChart,
    },
    {
        title: "WhatsApp Marketing",
        desc: "Connect directly with customers through personalized WhatsApp campaigns with high open and response rates.",
        icon: FiMessageCircle,
    },
    {
        title: "Corporate Branding",
        desc: "Professional corporate branding solutions that build trust, authority, and a strong business identity.",
        icon: FiAward,
    },
    {
        title: "Product Promotion",
        desc: "Launch and market products with creative digital campaigns that attract attention and increase sales performance.",
        icon: FiShoppingBag,
    },
    {
        title: "Real Estate Marketing",
        desc: "Premium real estate marketing strategies including property branding, lead campaigns, and digital promotion.",
        icon: FiHome,
    },
    {
        title: "Business Growth Strategy",
        desc: "Strategic consulting and scalable marketing systems designed to accelerate long-term business growth.",
        icon: FiTrendingUp,
    },
];

const Services = () => {
    const sectionRef = useRef(null);
    const overlineRef = useRef(null);
    const titleRefs = useRef([]);
    const infoRefs = useRef([]);
    const formRefs = useRef([]);
    const mapRef = useRef(null);

    // --- Form & UI States ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: '', // Mapped to backend's 'category' (formerly 'interest')
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // Helper to dynamically push elements to ref arrays
    const addToRefs = (refsArray) => (el) => {
        if (el && !refsArray.current.includes(el)) {
            refsArray.current.push(el);
        }
    };

    useEffect(() => {
        // --- GSAP Animations ---
        let ctx = gsap.context(() => {
            // 1. Top Overline Reveal
            gsap.fromTo(overlineRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 1.5, delay: 0.2, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
                }
            );

            // 2. Massive Intro Title Skew & Reveal
            titleRefs.current.forEach((el, index) => {
                gsap.fromTo(el,
                    { yPercent: 120, skewY: 3 },
                    {
                        yPercent: 0, skewY: 0, duration: 2.5, delay: 0.3 + (index * 0.15), ease: "expo.out",
                        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
                    }
                );
            });

            // 3. Sticky Sidebar Info Reveal
            infoRefs.current.forEach((el, index) => {
                gsap.fromTo(el,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1, x: 0, duration: 1.5, delay: 0.8 + (index * 0.1), ease: "power3.out",
                        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" }
                    }
                );
            });

            // 4. Minimalist Form Fields Reveal
            formRefs.current.forEach((el, index) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 1.8, delay: 0.8 + (index * 0.10), ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 90%" }
                    }
                );
            });

            // 5. Map Reveal (Scale & Fade)
            gsap.fromTo(mapRef.current,
                { opacity: 0, scale: 0.95, clipPath: "inset(10% 10% 10% 10%)" },
                {
                    opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 2, ease: "expo.out",
                    scrollTrigger: { trigger: mapRef.current, start: "top 85%" }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // --- Form Handlers ---
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required.";
        if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = "Valid contact number is required.";
        if (!formData.category) newErrors.category = "Please select an area of interest.";
        if (!formData.message.trim()) newErrors.message = "Please tell us about your space.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setIsSubmitting(true);
            try {
                const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
                const response = await fetch(`${API_BASE_URL}/api/leads`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (data.success) {
                    setShowToast(true);
                    setFormData({ name: '', email: '', phone: '', category: '', message: '' });
                    setErrors({});
                    setTimeout(() => setShowToast(false), 4000);
                } else {
                    console.error("Failed to submit inquiry");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <>
            {/* --- Success Toast Notification (Top Right) --- */}
            <div
                className={`fixed top-24 right-6 z-[100] transition-all duration-500 transform ${showToast ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'} bg-white border-l-4 border-[#0f1b39] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-lg p-5 flex items-center gap-4 min-w-[320px]`}
            >
                <div className="w-10 h-10 rounded-full bg-[#0f1b39]/10 flex items-center justify-center text-[#0f1b39] shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-black text-xs font-bold uppercase tracking-[0.2em] mb-1">Success</h4>
                    <p className="text-black/60 text-sm font-light">Your inquiry has been submitted.</p>
                </div>
                <button onClick={() => setShowToast(false)} className="ml-auto text-black/20 hover:text-black transition-colors focus:outline-none shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <section
                ref={sectionRef}
                className="w-full min-h-screen bg-[#f5f5f3] text-black pt-40 md:pt-48 lg:pt-56 pb-24 md:pb-32 lg:pb-48 px-6 md:px-12 lg:px-24"
            >
                <div className="max-w-7xl mx-auto flex flex-col">

                    {/* --- Section 2: Split Layout (Info + Form/Map) --- */}
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 relative">

                        {/* --- Left Column: Sticky Contact Info --- */}
                        <div className="lg:w-1/3 flex flex-col lg:sticky lg:top-40 h-fit">

                            <p className="text-[#f59e0b] text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-6 md:mb-8">
                                What We Do
                            </p>
                            <div className="flex flex-col gap-1 md:gap-2">
                                <div className="overflow-hidden pb-1">
                                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter leading-[0.8] text-black">
                                        Our Digital <span className='text-[#f59e0b]'>Marketing</span> Services
                                    </h2>
                                </div>
                            </div>
                            <p className="hidden lg:block text-xl font-light leading-relaxed text-black/60 max-w-sm mt-8">
                                From brand awareness to sales conversion — complete digital
                                marketing solutions tailored for Dubai businesses and beyond.
                            </p>

                        </div>

                        {/* --- Right Column: The Form & Map --- */}
                        <div className="lg:w-2/3 flex flex-col w-full gap-8">

                            {services.map((service, index) => {

                                const Icon = service.icon;

                                return (
                                    <div
                                        key={index}
                                        className="space-y-6 group bg-white border border-black/5 rounded-[36px] p-7 md:p-10 shadow-sm hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-500"
                                    >

                                        <div className="flex items-start justify-between gap-5">

                                            <div className="flex-1">

                                                {/* LABEL */}
                                                <div className="flex items-center gap-3">

                                                    <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center">
                                                        <Icon
                                                            size={18}
                                                            className="text-[#f59e0b]"
                                                        />
                                                    </div>

                                                    <p className="uppercase tracking-[7px] text-[11px] text-black/35">
                                                        Service {String(index + 1).padStart(2, "0")}
                                                    </p>

                                                </div>

                                                {/* TITLE */}
                                                <h3 className="mt-6 text-[2rem] md:text-[3rem] leading-[1] tracking-[-2px] font-semibold text-black">
                                                    {service.title}
                                                </h3>

                                                {/* CONTENT */}
                                                <p className="mt-6 text-black/60 text-lg leading-relaxed max-w-[720px]">
                                                    {service.desc}
                                                </p>

                                            </div>

                                            {/* RIGHT ICON */}
                                            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center bg-[#f5f5f3] group-hover:bg-[#f59e0b] group-hover:border-[#f59e0b] transition-all duration-500 shrink-0">

                                                <FiArrowUpRight
                                                    size={24}
                                                    className="text-black group-hover:text-white transition-all duration-500"
                                                />

                                            </div>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Services;