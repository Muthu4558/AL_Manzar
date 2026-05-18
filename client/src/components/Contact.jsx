import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f3] py-10 md:py-15">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7.5xl mx-auto px-6 md:px-12 lg:px-20">

        {/* TOP CONTENT */}
        <div className="text-center max-w-4xl mx-auto mb-14">

          <p className="
            text-[#f59e0b]
            text-xs md:text-sm
            tracking-[0.35em]
            uppercase
            font-semibold
            mb-5
          ">
            Get In Touch
          </p>

          <h2 className="
            text-3xl md:text-5xl lg:text-6xl
            font-semibold
            tracking-tight
            leading-[0.95]
            text-[#111827]
          ">
            Start Your{" "}
            <span className="
              text-[#f59e0b]
            ">
              Digital Growth
            </span>
          </h2>

          <p className="
            mt-6
            text-black/60
            text-[15px]
            md:text-[18px]
            leading-8
            max-w-2xl
            mx-auto
          ">
            Ready to grow your brand online? Contact Al Manzar today and
            start your digital growth journey.
          </p>

        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-6 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* CONTACT CARD */}
            <div className="
              rounded-[36px]
              border border-black/5
              bg-white/70
              backdrop-blur-xl
              p-7 md:p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.04)]
            ">

              <h3 className="
                text-2xl md:text-3xl
                font-semibold
                tracking-tight
                text-[#111827]
                mb-8
              ">
                Contact Information
              </h3>

              <div className="space-y-7">

                {/* PHONE */}
                <div className="flex items-start gap-5">

                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-[#4361ee]/8
                    border border-[#4361ee]/10
                    flex items-center justify-center
                    shrink-0
                  ">
                    <Phone
                      className="w-5 h-5 text-[#4361ee]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="
                      text-[11px]
                      uppercase
                      tracking-[0.25em]
                      text-black/35
                      font-semibold
                      mb-2
                    ">
                      Phone
                    </p>

                    <p className="
                      text-[#111827]
                      text-lg
                      font-semibold
                    ">
                      +971 56 142 4235
                    </p>
                  </div>

                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5">

                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-[#f59e0b]/8
                    border border-[#f59e0b]/10
                    flex items-center justify-center
                    shrink-0
                  ">
                    <Mail
                      className="w-5 h-5 text-[#f59e0b]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="
                      text-[11px]
                      uppercase
                      tracking-[0.25em]
                      text-black/35
                      font-semibold
                      mb-2
                    ">
                      Email
                    </p>

                    <p className="
                      text-[#111827]
                      text-lg
                      font-semibold
                    ">
                      Support@almanzar.digital
                    </p>
                  </div>

                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-5">

                  <div className="
                    w-14 h-14 rounded-2xl
                    bg-[#22c55e]/8
                    border border-[#22c55e]/10
                    flex items-center justify-center
                    shrink-0
                  ">
                    <MapPin
                      className="w-5 h-5 text-[#22c55e]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="
                      text-[11px]
                      uppercase
                      tracking-[0.25em]
                      text-black/35
                      font-semibold
                      mb-2
                    ">
                      Location
                    </p>

                    <p className="
                      text-[#111827]
                      text-lg
                      font-semibold
                    ">
                      No 321, 1st floor,
                      BURJ NAHAR MALL
                      AL Muteena Street
                      Deria - Dubai
                    </p>
                  </div>

                </div>


              </div>

            </div>

            {/* PROMO CARD */}
            <div className="
              relative overflow-hidden
              rounded-[36px]
              bg-gradient-to-br
from-[#f59e0b]
via-[#f59e0b]
to-[#d97706]
              p-7 md:p-8
            ">

              <div className="
                absolute top-0 right-0
                w-60 h-60
                rounded-full
                bg-white/10
                blur-3xl
              " />

              <div className="relative z-10">

                <h3 className="
                  text-3xl
                  md:text-[34px]
                  leading-tight
                  font-semibold
                  tracking-tight
                  text-white
                ">
                  Promote Your Brand.
                  Generate Leads.
                  Grow Business.
                </h3>

                <p className="
                  mt-5
                  text-white/75
                  text-[15px]
                  md:text-base
                  leading-8
                ">
                  Get Social Media Marketing, Brand Promotion,
                  Lead Generation, and Complete Digital Marketing
                  Services in Dubai.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="
            rounded-[36px]
            border border-black/5
            bg-white/70
            backdrop-blur-xl
            p-7 md:p-10
            shadow-[0_20px_60px_rgba(0,0,0,0.04)]
          ">

            <h3 className="
              text-2xl md:text-3xl
              font-semibold
              tracking-tight
              text-[#111827]
              mb-8
            ">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              {/* NAME + PHONE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="
                    block
                    text-sm
                    font-medium
                    text-[#111827]
                    mb-3
                  ">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="
                      w-full h-[58px]
                      rounded-2xl
                      border border-black/10
                      bg-white/80
                      px-5
                      text-[#111827]
                      outline-none
                      transition-all duration-300
                      focus:border-[#f59e0b]
                      focus:ring-4
                      focus:ring-[#f59e0b]/10
                    "
                  />
                </div>

                <div>
                  <label className="
                    block
                    text-sm
                    font-medium
                    text-[#111827]
                    mb-3
                  ">
                    Phone Number *
                  </label>

                  <input
                    type="text"
                    placeholder="+971 XX XXX XXXX"
                    className="
                      w-full h-[58px]
                      rounded-2xl
                      border border-black/10
                      bg-white/80
                      px-5
                      text-[#111827]
                      outline-none
                      transition-all duration-300
                      focus:border-[#f59e0b]
                      focus:ring-4
                      focus:ring-[#f59e0b]/10
                    "
                  />
                </div>

              </div>

              {/* EMAIL */}
              <div>
                <label className="
                  block
                  text-sm
                  font-medium
                  text-[#111827]
                  mb-3
                ">
                  Email Address *
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="
                    w-full h-[58px]
                    rounded-2xl
                    border border-black/10
                    bg-white/80
                    px-5
                    text-[#111827]
                    outline-none
                    transition-all duration-300
                    focus:border-[#f59e0b]
                    focus:ring-4
                    focus:ring-[#f59e0b]/10
                  "
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="
                  block
                  text-sm
                  font-medium
                  text-[#111827]
                  mb-3
                ">
                  Service Required
                </label>

                <select
                  className="
                    w-full h-[58px]
                    rounded-2xl
                    border border-black/10
                    bg-white/80
                    px-5
                    text-[#111827]
                    outline-none
                    transition-all duration-300
                    focus:border-[#f59e0b]
                    focus:ring-4
                    focus:ring-[#f59e0b]/10
                  "
                >
                  <option>Select a service</option>
                  <option>Social Media Marketing</option>
                  <option>Brand Promotion</option>
                  <option>Lead Generation</option>
                  <option>SEO Services</option>
                  <option>Website Design</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="
                  block
                  text-sm
                  font-medium
                  text-[#111827]
                  mb-3
                ">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your business and goals..."
                  className="
                    w-full
                    rounded-2xl
                    border border-black/10
                    bg-white/80
                    p-5
                    text-[#111827]
                    outline-none
                    resize-none
                    transition-all duration-300
                    focus:border-[#f59e0b]
                    focus:ring-4
                    focus:ring-[#f59e0b]/10
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  group relative overflow-hidden
                  w-full h-[62px]
                  rounded-2xl
                  bg-[#111827]
                  text-white
                  font-semibold
                  text-lg
                  transition-all duration-500
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                "
              >

                <span className="
                  relative z-10
                  flex items-center justify-center gap-3
                ">
                  <Send
                    className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    strokeWidth={2}
                  />

                  Send Message
                </span>

                <div className="
                  absolute inset-0
                  group-hover:opacity-100
                  transition-all duration-500
                " />

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;