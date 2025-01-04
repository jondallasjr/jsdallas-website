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
  Scale
} from "lucide-react";

interface ServiceIconMap {
  [key: string]: React.ReactElement;
}

const iconMap: ServiceIconMap = {
  "As-Built Surveys": <Ruler className="w-6 h-6" />,
  "GPS Surveys": <Compass className="w-6 h-6" />,
  "Boundary Surveys": <Map className="w-6 h-6" />,
  "Location Surveys": <MapPin className="w-6 h-6" />,
  "FEMA Elevation Certifications": <FileText className="w-6 h-6" />,
  "Topographic Surveys": <Mountain className="w-6 h-6" />,
  "Lot Surveys": <Home className="w-6 h-6" />,
  "Expert Witness Services": <Scale className="w-6 h-6" />
};

interface ServiceCardProps {
  title: string;
  description?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  const icon = iconMap[title] || <MapPin className="w-6 h-6" />;
  
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 hover:border-blue-200">
      <CardHeader>
        <div className="text-blue-600 mb-2">{icon}</div>
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