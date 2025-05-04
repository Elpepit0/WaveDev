import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team working together"
                className="rounded-lg shadow-xl w-full max-w-lg h-auto"
              />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary-600/20 rounded-full -z-10"></div>
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent-500/20 rounded-full -z-10"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
            Hey! I'm Yohan, a high school student from France passionate about web development. I specialize in building modern, 
            responsive websites using React, Tailwind CSS, and Vite. I may be young, but I approach every project with professionalism, 
            creativity, and a strong desire to grow. I'm always learning and looking for real opportunities to help individuals and businesses 
            build their online presence with clean, efficient code.

            </p>
            <div className="space-y-3 mb-8">
              {
                [
                  "Young and passionate developer",
                  "Clear and friendly communication",
                  "Custom websites built with care",
                  "Always learning and improving"
                ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-primary-600 text-white font-medium text-base hover:bg-primary-700 transition-colors shadow-md inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;