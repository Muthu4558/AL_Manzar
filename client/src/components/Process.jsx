import React from "react";
import {
  MessageSquareText,
  Map,
  PencilLine,
  Rocket,
  ChartNoAxesCombined,
  FileText,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Business Understanding",
    desc: "We learn about your business, audience, competitors, and marketing goals.",
    icon: MessageSquareText,
  },
  {
    step: "02",
    title: "Strategy Planning",
    desc: "Custom digital marketing plans aligned with your growth objectives.",
    icon: Map,
  },
  {
    step: "03",
    title: "Content Creation",
    desc: "Premium creatives, videos, captions, and campaign assets for your brand.",
    icon: PencilLine,
  },
  {
    step: "04",
    title: "Campaign Launch",
    desc: "Strategic launch across Meta, Google, social media, and digital channels.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Monitoring & Optimization",
    desc: "Daily optimization and performance improvements for stronger ROI.",
    icon: ChartNoAxesCombined,
  },
  {
    step: "06",
    title: "Reporting",
    desc: "Transparent reports and measurable business growth tracking.",
    icon: FileText,
  },
];

const Process = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f3] py-10 md:py-15">
      
      {/* LIGHT GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7.5xl mx-auto px-6 md:px-12 lg:px-20">

        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">

          <p className="text-[#f59e0b] text-xs md:text-sm tracking-[0.35em] uppercase font-semibold mb-5">
            How We Work
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-[#111827]">
            Our Proven{" "}
            <span className="text-[#f59e0b]">
              6-Step Process
            </span>
          </h2>

          <p className="mt-6 text-base md:text-xl leading-8 text-black/60 max-w-3xl mx-auto">
            A structured, result-driven approach to transform your brand and grow your business online.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                group relative overflow-hidden
                rounded-[32px]
                border border-black/5
                bg-white/80
                backdrop-blur-xl
                p-7 md:p-8
                min-h-[280px]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                "
              >

                {/* TOP */}
                <div className="flex items-start justify-between mb-10">

                  {/* ICON */}
                  <div className="
                    w-16 h-16 rounded-2xl
                    bg-[#f8f8f8]
                    border border-black/5
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:bg-[#f59e0b]
                    group-hover:text-white
                    group-hover:scale-110
                  ">
                    <Icon
                      className="w-7 h-7 text-[#111827] group-hover:text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* NUMBER */}
                  <span className="
                    text-6xl md:text-7xl
                    font-semibold
                    tracking-tight
                    text-black/[0.04]
                    leading-none
                    select-none
                  ">
                    {item.step}
                  </span>

                </div>

                {/* CONTENT */}
                <div>

                  <p className="
                    text-[11px]
                    tracking-[0.35em]
                    uppercase
                    text-[#f59e0b]
                    font-semibold
                    mb-4
                  ">
                    Step {item.step}
                  </p>

                  <h3 className="
                    text-2xl md:text-[30px]
                    leading-tight
                    font-semibold
                    tracking-tight
                    text-[#111827]
                    mb-5
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-black/60
                    text-[15px]
                    md:text-base
                    leading-8
                  ">
                    {item.desc}
                  </p>

                </div>

                {/* BOTTOM LINE */}
                <div className="
                  absolute bottom-0 left-0
                  h-[3px] w-0
                  bg-[#f59e0b]
                  transition-all duration-500
                  group-hover:w-full
                " />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Process;