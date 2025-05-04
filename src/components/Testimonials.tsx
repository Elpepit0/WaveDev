import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Role',
    company: 'Your Company',
    text: 'Your testimonial text goes here. It should be a brief and impactful statement about your experience with the service.',
    avatar: 'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg',
    rating: 5,
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in delivering results that exceed expectations and forge lasting partnerships with our clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary-600 p-1">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-600 text-sm text-center">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < testimonials[activeIndex].rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-gray-700 italic relative">
                    <span className="text-4xl text-primary-200 absolute -top-2 -left-2">"</span>
                    <p className="z-10 relative pl-4">{testimonials[activeIndex].text}</p>
                    <span className="text-4xl text-primary-200 absolute -bottom-6 right-0">"</span>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow border border-gray-200 hover:bg-primary-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-primary-600" />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      activeIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow border border-gray-200 hover:bg-primary-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-primary-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;