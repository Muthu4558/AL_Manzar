import React from "react";
import {
    FiLinkedin,
    FiInstagram,
    FiFacebook,
    FiTwitter,
    FiPhone,
    FiMail,
    FiMapPin,
    FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-black text-white">

            {/* BACKGROUND IMAGE */}
            <div
                className="
          absolute inset-0
          bg-[url('/images/footer-bg.jpg')]
          bg-cover bg-center
          opacity-[0.10]
        "
            />

            {/* TOP WHITE FADE */}
            <div className="
        absolute top-0 left-0 w-full h-[280px] bg-gradient-to-b from-[#f5f5f3] via-[#f5f5f3]/60
        to-transparent
        z-[1]
      " />

            {/* DARK OVERLAY */}
            <div className="
        absolute inset-0
        bg-gradient-to-b
        from-black/40
        via-black/75
        to-black
      " />

            {/* BIG TEXT */}
            <div className="
        absolute top-10 left-1/2 -translate-x-1/2
        text-[60px] md:text-[180px] lg:text-[230px]
        font-semibold
        tracking-tight
        text-white/[0.2]
        leading-none
        select-none
        whitespace-nowrap
        pointer-events-none
        z-[2]
      ">
                AL MANZAR
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-52 md:pt-64 pb-12">

                {/* TOP LINE */}
                <div className="w-full h-px bg-white/10 mb-10" />

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

                    {/* LEFT */}
                    <div>

                        {/* LOGO */}
                        <div className="flex items-center gap-4">

                            <div className="
                w-16 h-16 rounded-2xl
                bg-[#f59e0b]
                flex items-center justify-center
                text-white
                text-3xl
                font-bold
                shadow-[0_10px_30px_rgba(245,158,11,0.35)]
              ">
                                M
                            </div>

                            <div>
                                <h2 className="
                  text-3xl
                  font-semibold
                  tracking-tight
                ">
                                    Al Manzar
                                </h2>

                                <p className="
                  text-[#f59e0b]
                  uppercase
                  tracking-[0.28em]
                  text-xs
                  font-semibold
                  mt-1
                ">
                                    Digital Marketing
                                </p>
                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="
              mt-8
              text-white/65
              text-[15px]
              leading-8
              max-w-[320px]
            ">
                            Dubai&apos;s creative digital marketing partner helping brands
                            grow online through social media, brand promotion,
                            lead generation, and complete digital solutions.
                        </p>

                        <p
                            className="
        text-white
        text-[13px] sm:text-[14px] md:text-[15px]
        font-semibold
        leading-relaxed
        text-center md:text-left
        break-words mt-5
      "
                        >
                            “Your Brand. Our Strategy. Digital Growth.”
                        </p>

                    </div>

                    {/* SERVICES */}
                    <div>

                        <p className="
              text-white/40
              uppercase
              tracking-[0.35em]
              text-xs
              font-semibold
              mb-8
            ">
                            Our Services
                        </p>

                        <div className="space-y-5">

                            {[
                                "Social Media Marketing",
                                "Brand Promotion",
                                "Google Ads",
                                "Meta Ads",
                                "Lead Generation",
                                "SEO Services",
                                "Website Design",
                                "Content Creation",
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="
                    block
                    text-white/85
                    text-[14px]
                    transition-all duration-300
                    hover:text-[#f59e0b]
                    hover:translate-x-1
                  "
                                >
                                    {item}
                                </a>
                            ))}

                        </div>

                    </div>

                    {/* INDUSTRIES */}
                    <div>

                        <p className="
              text-white/40
              uppercase
              tracking-[0.35em]
              text-xs
              font-semibold
              mb-8
            ">
                            Industries
                        </p>

                        <div className="space-y-5">

                            {[
                                "Real Estate",
                                "Restaurants & Cafés",
                                "Travel & Tourism",
                                "Fashion & Beauty",
                                "Healthcare",
                                "Education",
                                "Business Setup",
                                "E-commerce",
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="
                    block
                    text-white/85
                    text-[14px]
                    transition-all duration-300
                    hover:text-[#f59e0b]
                    hover:translate-x-1
                  "
                                >
                                    {item}
                                </a>
                            ))}

                        </div>

                    </div>

                    {/* CONTACT */}
                    <div className="w-full">

                        <p
                            className="
      text-white/40
      uppercase
      tracking-[0.35em]
      text-xs
      font-semibold
      mb-8
    "
                        >
                            Connect
                        </p>

                        {/* CONTACT ITEMS */}
                        <div className="space-y-5">

                            {[
                                {
                                    icon: FiPhone,
                                    text: "+971 56 142 4235",
                                },
                                {
                                    icon: FiMail,
                                    text: "Support@almanzar.digital",
                                },
                                {
                                    icon: FiMapPin,
                                    text: (
                                        <>
                                            No 321, 1st Floor,
                                            <br />
                                            Burj Nahar Mall,
                                            <br />
                                            Al Muteena Street,
                                            <br />
                                            Deira - Dubai
                                        </>
                                    ),
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="
            flex items-start gap-4
            backdrop-blur-xl
            px-4
            min-h-[0px]
          "
                                    >

                                        {/* ICON */}
                                        <div
                                            className="
              w-11 h-11
              rounded-xl
              bg-white/[0.04]
              border border-white/10
              flex items-center justify-center
              shrink-0
            "
                                        >
                                            <Icon className="w-4 h-4 text-[#f59e0b]" />
                                        </div>

                                        {/* TEXT */}
                                        <div className="flex-1 flex items-center min-h-[44px]">

                                            <p
                                                className="
                text-white/85
                text-[14px] md:text-[15px]
                leading-7
                break-words
              "
                                            >
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>
                                );
                            })}
                        </div>

                        {/* SOCIAL */}
                        <div className="flex items-center gap-4 mt-10">

                            {[
                                FiLinkedin,
                                FiInstagram,
                                FiFacebook,
                                FiTwitter,
                            ].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="
          w-10 h-10 rounded-2xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          flex items-center justify-center
          transition-all duration-300
          hover:bg-[#f59e0b]
          hover:border-[#f59e0b]
          hover:-translate-y-1
        "
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </a>
                            ))}

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="
          mt-16 pt-8
          border-t border-white/10
          flex flex-col md:flex-row
          items-center justify-between
          gap-5
        ">

                    <p className="
                text-white/45
                text-sm
              ">
                        © 2026 Al Manzar Digital Marketing Agency. All rights reserved.
                    </p>

                    <div>
                        <p className="
            text-white/40
            text-sm
          ">
                            Dubai, UAE | Social Media Marketing | Brand Promotion | Lead Generation
                        </p>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;