"use client";
import React from "react";
import ShootingStars from "@/components/ui/ShootingStars";
import StarsBackground from "@/components/ui/StarsBg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-white flex flex-col justify-between p-6 relative w-full">
      <div className="flex justify-between items-start pt-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/dct_logo.svg"
              alt="DCT Logo"
              width={100}
              height={100}
            />
            <p className="text-3xl font-bold mb-2">
              Pioneering Innovation <br /> with Smart Technology Solutions
            </p>{" "}
          </div>

          <div className="flex items-center gap-2">
            <p className="text-md">
              FIND US ON
              <br />
            </p>
            <a href="https://www.linkedin.com/company/data-culture-technolgies/">
              <Image src="/linked.svg" alt="LinkedIn" width={20} height={20} />
            </a>
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-3xl font-semibold mb-2">Our Services</h3>
          <ul className="text-xl">
            <li>AI In Health</li>
            <li>Fintech</li>
            <li>Digital Marketing</li>
            <li>AI & ML Ops</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between text-xs mt-4 border-t-2 border-white ">
        <p className="mt-3">&copy; 2024 DCT All rights reserved.</p>
        <p className="mt-3">Made with ❤️ In India</p>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default Footer;
