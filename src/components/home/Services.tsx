"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Ruler,
  Compass,
  Map,
  MapPin,
  FileText,
  Mountain,
  Home,
  Scale
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const services: Service[] = [
  {
    title: "As-Built Surveys",
    description: "Detailed documentation of completed construction projects",
    icon: <Ruler className="w-5 h-5 text-blue-600" />
  },
  {
    title: "GPS Surveys",
    description: "Precise positioning using advanced satellite technology",
    icon: <Compass className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Boundary Surveys",
    description: "Establishing and verifying property lines",
    icon: <Map className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Location Surveys",
    description: "Identifying and mapping specific site features",
    icon: <MapPin className="w-5 h-5 text-blue-600" />
  },
  {
    title: "FEMA Elevation Certificates",
    description: "Flood zone compliance documentation",
    icon: <FileText className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Topographic Surveys",
    description: "Mapping terrain and elevation changes",
    icon: <Mountain className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Lot Surveys",
    description: "Detailed property lot documentation",
    icon: <Home className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Expert Witness Services",
    description: "Professional testimony for legal matters",
    icon: <Scale className="w-5 h-5 text-blue-600" />
  }
];

export const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <section id="services" className="py-12 bg-section-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Professional surveying solutions for all your needs
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-full lg:w-2/3">
            <Card>
              <CardContent className="p-6 pt-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <li
                      key={service.title}
                      className="flex flex-col items-start p-3 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                      onClick={() => toggleExpand(service.title)}
                    >
                      <div className="flex items-center space-x-4">
                        {service.icon}
                        <h3 className="font-semibold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      {expandedService === service.title && (
                        <p className="mt-2 text-sm text-gray-600">
                          {service.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;