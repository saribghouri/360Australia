"use client";

import { Facebook, Linkedin, MapPin, Mail, Instagram } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/about-us");
  };

  return (
    <footer className="bg-black text-white py-8 md:py-12 relative">
      <div className="bg-[#10d4c4] h-[2px] mb-6 md:mb-[20px]"></div>
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-12 lg:gap-24 mb-4 lg:mb-6 justify-center items-start ml-4 md:ml-8 lg:ml-12">
          {/* Company Info Section */}
          <div className="flex flex-col items-center justify-center text-center lg:text-center space-y-4 lg:space-y-8">
            <div className="flex items-center justify-center mr-[100px] md:justify-start">
              <Image
                src="/IMG-20250710-WA0015-removebg-preview.png"
                alt="360 Australia Ventures Logo"
                width={124}
                height={86}
                className="h-20 w-24 lg:h-[86px] lg:w-[124px]"
              />
              <h1 className="text-white text-2xl font-bold ml-2">AUSTRALIA</h1>
            </div>
            <p className="text-gray-300 text-sm md:text-base text-start lg:text-lg leading-relaxed max-w-lg">
              360 Australia is your trusted digital partner, helping businesses
              grow, succeed, and stand out online.{" "}
              <button
                onClick={handleContactClick}
                className="rounded-[10px] cursor-pointer !text-teal-500 py-[1px] text-[15px]"
              >
                Read More..
              </button>
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center justify-center text-center lg:text-center space-y-4 ">
            <h4 className="text-lg md:text-xl lg:text-[24px] font-bold">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
              >
                Home
              </a>
              <a
                href="/about-us"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
              >
                About Us
              </a>
              <a
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
              >
                Portfolio
              </a>
              <a
                href="/contactsection"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h4 className="text-lg md:text-xl lg:text-[24px] font-bold">
              Legal
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
              >
                Privacy Policy
              </a>
              <a
                href="/about-us"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
              >
                Cookies Policy
              </a>
              <a
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
              >
                Terms & Conditions
              </a>
              <a
                href="/contactsection"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base lg:text-lg"
              >
                Return Policy
              </a>
            </nav>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h4 className="text-lg md:text-xl lg:text-[24px] font-bold">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#10d4c4] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm md:text-base lg:text-lg text-left">
                  Belmore, Sydney, Australia
                </p>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#10d4c4] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm md:text-base lg:text-lg text-left">
                  hello@360-australia.com.au
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-[40px] justify-center md:justify-start">
              <a
                href="#"
                className="text-teal-400 hover:text-white transition-colors"
                aria-label="Facebook link"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="group text-teal-400 flex items-center hover:text-white transition-colors"
                aria-label="WhatsApp link"
              >
                <Image
                  className="w-10 h-10 transition group-hover:brightness-0 group-hover:invert"
                  src="/lCrxIY-removebg-preview.png"
                  alt="WhatsApp icon"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-white transition-colors"
                aria-label="LinkedIn link"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-teal-400 hover:text-white transition-colors"
                aria-label="Instagram link"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* NDIS Logo Section */}
          <div className="flex justify-center md:justify-start items-center md:items-start">
            <Image
              src="/NDIS-Logo-on-pink-removebg-preview.png"
              alt="NDIS Logo"
              width={200}
              height={100}
            />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-center items-center text-center space-y-4 md:space-y-0">
          <p className="text-gray-100 text-sm md:text-base lg:text-lg">
            © {new Date().getFullYear()} Creative sol tech. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
