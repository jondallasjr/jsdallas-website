import React from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Ruler, 
  Compass, 
  Map, 
  MapPin, 
  FileText, 
  Mountain, 
  Home,
  Scale,
  LucideIcon
} from "lucide-react";

interface ServiceIconMap {
  [key: string]: React.ReactElement;
}

const iconMap: ServiceIconMap = {
  "AS-BUILT SURVEYS": <Ruler className="w-8 h-8" />,
  "GPS SURVEYS": <Compass className="w-8 h-8" />,
  "BOUNDARY SURVEYS": <Map className="w-8 h-8" />,
  "LOCATION SURVEYS": <MapPin className="w-8 h-8" />,
  "FEMA ELEVATION CERTIFICATIONS": <FileText className="w-8 h-8" />,
  "TOPOGRAPHIC SURVEYS": <Mountain className="w-8 h-8" />,
  "LOT SURVEYS": <Home className="w-8 h-8" />,
  "EXPERT WITNESS SERVICES": <Scale className="w-8 h-8" />
};

interface ServiceCardProps {
  title: string;
  description?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  const icon = iconMap[title] || <MapPin className="w-8 h-8" />;
  
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 hover:border-blue-200">
      <CardHeader>
        <div className="text-blue-600 mb-4">{icon}</div>
        <CardTitle className="text-lg font-medium text-gray-900">
          {title}
        </CardTitle>
        {description && (
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        )}
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;