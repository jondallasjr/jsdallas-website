import React from 'react';
import { ServiceCard } from '@/components/shared/ServiceCard';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  { 
    title: "AS-BUILT SURVEYS",
    description: "Detailed documentation of completed construction projects"
  },
  { 
    title: "GPS SURVEYS",
    description: "Precise positioning using advanced satellite technology"
  },
  { 
    title: "BOUNDARY SURVEYS",
    description: "Establishing and verifying property lines"
  },
  { 
    title: "LOCATION SURVEYS",
    description: "Identifying and mapping specific site features"
  },
  { 
    title: "FEMA ELEVATION CERTIFICATIONS",
    description: "Flood zone compliance documentation"
  },
  { 
    title: "TOPOGRAPHIC SURVEYS",
    description: "Mapping terrain and elevation changes"
  },
  { 
    title: "LOT SURVEYS",
    description: "Detailed property lot documentation"
  },
  { 
    title: "EXPERT WITNESS SERVICES",
    description: "Professional testimony for legal matters"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Professional surveying solutions for all your needs
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;