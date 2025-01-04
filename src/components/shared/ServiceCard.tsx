import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, icon }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        {icon && <div className="w-8 h-8 text-blue-600 mb-2">{icon}</div>}
        <CardTitle className="text-lg font-medium text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;