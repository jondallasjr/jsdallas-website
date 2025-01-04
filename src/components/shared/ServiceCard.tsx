import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Ruler,
  Compass,
  Map,
  MapPin,
  FileText,
  Mountain,
  Home,
  Scale,
} from "lucide-react";

interface ServiceIconMap {
  [key: string]: React.ReactElement;
}

const iconMap: ServiceIconMap = {
  "As-Built Surveys": <Ruler className="w-6 h-6 text-blue-600" />,
  "GPS Surveys": <Compass className="w-6 h-6 text-blue-600" />,
  "Boundary Surveys": <Map className="w-6 h-6 text-blue-600" />,
  "Location Surveys": <MapPin className="w-6 h-6 text-blue-600" />,
  "FEMA Elevation Certifications": <FileText className="w-6 h-6 text-blue-600" />,
  "Topographic Surveys": <Mountain className="w-6 h-6 text-blue-600" />,
  "Lot Surveys": <Home className="w-6 h-6 text-blue-600" />,
  "Expert Witness Services": <Scale className="w-6 h-6 text-blue-600" />,
};

interface ServiceCardProps {
  title: string;
  description?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  const icon = iconMap[title] || <MapPin className="w-6 h-6 text-blue-600" />;

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 hover:border-blue-200">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-lg font-medium text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      )}
    </Card>
  );
};

export default ServiceCard;