import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const AboutSectionCard = ({
  title,
  description,
  href,
  imageUrl, // Accept image URL as a prop
}: {
  title: string;
  description: string;
  href: string;
  imageUrl: string; // Add imageUrl to props
}) => {
  return (
    <Card
      className={`relative h-full border-white p-4 flex flex-col shadow-lg rounded-md transition-transform transform hover:scale-105`}
      style={{
        backgroundImage: `url(${imageUrl})`, // Apply image as background
        backgroundSize: "cover", // Ensure the image covers the whole area
        backgroundPosition: "center", // Ensure the image is centered
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black rounded-md opacity-70"></div>

      <CardHeader className="relative z-10 p-2">
        <Link to={href}>
          <CardTitle className="text-lg underline font-medium text-white transition-colors cursor-pointer hover:text-[#F18A00] hover:decoration-[#F18A00] underline-offset-4">
            {title}
          </CardTitle>
        </Link>
      </CardHeader>

      <CardContent className="relative z-10 p-3">
        <CardDescription className="text-xs text-gray-200 line-clamp-1">
          {description}
        </CardDescription>

        <Link to={href}>
          <p className="flex items-center justify-end mt-4 text-white transition-colors cursor-pointer">
            <span className="px-4 text-lg border border-[#F18A00] text-[#F18A00] rounded-sm hover:bg-[#F18A00] hover:text-white hover:border-[#F18A00]">
              →
            </span>
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AboutSectionCard;
