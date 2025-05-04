import React from 'react';
import { ArrowRight } from 'lucide-react';
import myImage from '../assets/image1.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary-600">Create</span> Amazing
              <br /> Digital Experiences
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg">
              We help businesses transform their ideas into powerful digital solutions
              that drive growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-md bg-primary-600 text-white font-medium text-base hover:bg-primary-700 transition-colors shadow-md flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium text-base hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01]">
            <img
              src={myImage}
              alt="Designer working on a website"
              className="w-full h-auto object-cover"
            />

            </div>
            <div className="absolute -right-6 -bottom-6 w-64 h-64 rounded-full bg-accent-400 -z-10"></div>
            <div className="absolute -left-6 -top-6 w-40 h-40 rounded-full bg-primary-600/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;