import ServiceCard from "@/components/shared/ServiceCard";
import { MapPin, Compass, FileText, Map } from "lucide-react";

const services = [
  { title: "AS-BUILT SURVEYS", icon: <MapPin /> },
  { title: "GPS SURVEYS", icon: <Compass /> },
  { title: "BOUNDARY SURVEYS", icon: <Map /> },
  { title: "LOCATION SURVEYS", icon: <MapPin /> },
  { title: "FEMA ELEVATION CERTIFICATIONS", icon: <FileText /> },
  { title: "TOPOGRAPHIC SURVEYS", icon: <Map /> },
  { title: "LOT SURVEYS", icon: <MapPin /> },
  { title: "EXPERT WITNESS SERVICES", icon: <FileText /> },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Professional surveying solutions for all your needs
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;