import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg" // Ensure this image exists in the public folder
          alt="Land surveyor at work"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                <span className="block">Professional Land Surveying</span>
                <span className="block text-blue-400">Since 1985</span>
              </h2>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Trusted by homeowners, businesses, and government agencies for accurate and
                reliable surveying services.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button className="rounded-md shadow">
                  <a href="#services">Explore Services</a>
                </Button>
                <Button variant="outline" className="mt-3 sm:mt-0 sm:ml-3 bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;