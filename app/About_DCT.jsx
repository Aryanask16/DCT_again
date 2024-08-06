"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils"; // Ensure this path is correct
import '../app/css/About.css'

export default function BackgroundBoxesDemo() {
  return (
    <div
      className="h-fit min-h-96 relative w-full mb-24 overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg"
      id="contact"
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="Title text-[5vh] text-white pt-4">
        About Us
      </h1>
      <p className="text-2xl text-white text-center p-8 px-16">
        DataCulture Technologies (DCT) is a innovator in custom AI and machine
        learning solutions. We transform industries like transportation,
        healthcare, agriculture, and automotive with cutting-edge technology
        designed to meet your unique needs. Our team delivers tailored solutions
        that drive efficiency and success, helping you stay ahead in a rapidly
        evolving world.
      </p>
    </div>
  );
}
