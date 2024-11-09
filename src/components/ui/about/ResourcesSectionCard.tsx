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
      <Card className="flex h-full hover:border-[#01748D] overflow-hidden border-[#F18A00] rounded-md shadow-lg ">
        {/* Left Side: Image */}
        <div className="w-1/3 h-full">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full p-3 rounded-md"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-between w-2/3">
          {/* Title and Description */}
          <div className="flex flex-col justify-center h-full">
            <CardHeader>
              <CardTitle className="relative text-lg group">
                {/* Smaller title */}
                <span className="line-clamp-1 underline-offset-4 font-medium cursor-pointer transition-colors duration-200 group-hover:underline group-hover:text-[#F18A00]">
                  {title}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-600 line-clamp-1">
                {description}
              </p>
              {/* Smaller description */}
            </CardContent>
          </div>

          {/* Right Arrow Icon */}
          <CardFooter className="flex items-center justify-end">
            <button className="px-3 py-1 text-xs font-medium flex transition-all duration-300 transform rounded-md items-center gap-2 text-white bg-[#F18A00] hover:scale-105 hover:bg-[#01748D]">
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
