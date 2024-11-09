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
      <Card className="overflow-hidden bg-gray-100 border-none rounded-none shadow-lg h-[100px] flex">
        {/* Left Side: Image */}
        <div className="w-1/3 h-full">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-between w-2/3 p-2">
          {/* Title and Description */}
          <div className="flex flex-col justify-center h-full">
            <CardHeader>
              <CardTitle className="relative text-sm group">
                {" "}
                {/* Smaller title */}
                <span className="line-clamp-1 cursor-pointer transition-colors duration-200 group-hover:underline group-hover:text-[#003161]">
                  {title}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs line-clamp-1">{description}</p>{" "}
              {/* Smaller description */}
            </CardContent>
          </div>

          {/* Right Arrow Icon */}
          <CardFooter className="flex items-center justify-center">
            <button className="px-4 py-1 text-sm font-medium flex items-center justify-center gap-2 text-white bg-[#000B58] transition hover:bg-[#01748D]">
              {/* "Read More" text with arrow */}
              Read More <span className="text-xl">→</span>
            </button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

export default ResourcesSectionCard;
