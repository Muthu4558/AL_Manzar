import React from "react";
import {
  MapPin,
  Layers3,
  Palette,
  Target,
  BadgeCheck,
  SlidersHorizontal,
  ArrowUpRight,
} from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: MapPin,
      title: "Dubai-Based Expertise",
      desc: "We understand the Dubai market, UAE audience behavior, and international customer expectations — giving your campaigns a local edge.",
    },
    {
      icon: Layers3,
      title: "Complete Digital Solution",
      desc: "From branding to advertising, content creation to lead generation — we provide end-to-end marketing support under one roof.",
    },
    {
      icon: Palette,
      title: "Creative Content",
      desc: "We create professional, modern, and eye-catching content that elevates your brand value and connects with your audience.",
    },
    {
      icon: Target,
      title: "Result-Focused Campaigns",
      desc: "Our marketing strategies are designed to deliver enquiries, leads, sales, and measurable business growth.",
    },
    {
      icon: BadgeCheck,
      title: "Professional Brand Image",
      desc: "We help your business look premium, trustworthy, and competitive in the market — across every touchpoint.",
    },
    {
      icon: SlidersHorizontal,
      title: "Customized Strategy",
      desc: "Every business is different. We build marketing plans tailored to your industry, target audience, and budget.",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f3] text-black px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-50 space-y-8">
          <div className="space-y-5">
            <p className="text-[#f59e0b] text-xs md:text-sm tracking-[0.35em] uppercase font-semibold">
              Why Al Manzar
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] max-w-xl">
              Dubai&apos;s {" "}
              <span className="block text-[#f59e0b]">
                Creative Digital
              </span>
              Partner
            </h2>

            <p className="text-base md:text-lg leading-8 text-black/65 max-w-xl">
              We combine deep market knowledge with creative excellence and
              data-driven strategy to help your brand stand out, connect with
              the right audience, and convert interest into real business
              results.
            </p>
          </div>

          {/* IMAGE CARD */}
          {/* <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-black/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
            
            <img
              src="/images/why-us.jpg"
              alt="Team working on strategy"
              className="w-full h-[310px] md:h-[360px] object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                From Visibility to Sales
              </h3>
              <p className="mt-2 text-white/90 text-sm md:text-base">
                We Grow Your Brand.
              </p>
            </div>
          </div> */}
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#f8fafc] via-white to-[#fff7ed]" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f7ff] flex items-center justify-center mb-5 ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-105">
                    <Icon className="w-6 h-6 text-[#0f1b39]" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold tracking-tight text-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm md:text-[15px] leading-7 text-black/60">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="h-px w-12 bg-gradient-to-r from-[#f59e0b] to-transparent transition-all duration-500 group-hover:w-20" />
                    <span className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-black/70 transition-all duration-300 group-hover:bg-[#0f1b39] group-hover:text-white group-hover:border-[#0f1b39] group-hover:translate-x-1">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;