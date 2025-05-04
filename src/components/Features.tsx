import React from 'react';
import { Code, LineChart, Globe, Smartphone, Palette, Clock } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Code size={24} className="text-primary-600" />,
    title: 'Clean Code',
    description: 'Our development follows best practices ensuring maintainable and scalable applications.',
  },
  {
    icon: <Palette size={24} className="text-primary-600" />,
    title: 'Modern Design',
    description: 'Beautiful, intuitive interfaces that engage users and reflect your brand identity.',
  },
  {
    icon: <Globe size={24} className="text-primary-600" />,
    title: 'SEO Optimized',
    description: 'Built with search engines in mind to help your business get discovered online.',
  },
  {
    icon: <Smartphone size={24} className="text-primary-600" />,
    title: 'Responsive',
    description: 'Looks and works perfectly on all devices, from desktops to mobile phones.',
  },
  {
    icon: <LineChart size={24} className="text-primary-600" />,
    title: 'Performance',
    description: 'Lightning-fast load times and smooth interactions for the best user experience.',
  },
  {
    icon: <Clock size={24} className="text-primary-600" />,
    title: 'On Time',
    description: 'We deliver on schedule, keeping your project on track from start to finish.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive digital solutions tailored to meet the unique needs of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 p-3 rounded-full bg-primary-50 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;