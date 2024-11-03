import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ResourcesSectionCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ResourcesSectionCard: React.FC<ResourcesSectionCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Scale effect on hover
      whileTap={{ scale: 0.95 }} // Scale effect on click
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden bg-gray-100 rounded-none shadow-lg">
        <img src={imageUrl} alt={title} className="object-cover w-full h-40" />
        <CardHeader>
          <CardTitle className="relative group">
            <span className="cursor-pointer transition-colors duration-200 group-hover:underline group-hover:text-[#003161]">
              {title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-[#003161] hover:bg-[#003161] transition">
            More Details
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ResourcesSectionCard;
