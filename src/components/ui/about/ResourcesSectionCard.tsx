import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ResourcesSectionCardProps {
  customStyle: number; // Index for style selection
}

const ResourcesSectionCard: React.FC<ResourcesSectionCardProps> = ({
  customStyle,
}) => {
  // Custom styles for each card, indexed for variety
  const styles = [
    "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
    "bg-gradient-to-r from-green-500 to-teal-500 text-white",
    "bg-gradient-to-r from-red-500 to-orange-500 text-white",
    "bg-gradient-to-r from-indigo-500 to-blue-500 text-white",
    "bg-gradient-to-r from-yellow-500 to-red-500 text-white",
    "bg-gradient-to-r from-teal-500 to-green-500 text-white",
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    "bg-gradient-to-r from-pink-500 to-red-500 text-white",
    "bg-gradient-to-r from-gray-700 to-gray-900 text-white",
  ];

  return (
    <Card className={`p-4 rounded-lg shadow-lg ${styles[customStyle]}`}>
      <CardHeader>
        <CardTitle>Resource Title {customStyle + 1}</CardTitle>
        <CardDescription>
          Brief description for resource {customStyle + 1}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Content for resource {customStyle + 1} goes here. It can be brief or
          detailed as needed.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-sm">More details or link</p>
      </CardFooter>
    </Card>
  );
};

export default ResourcesSectionCard;
