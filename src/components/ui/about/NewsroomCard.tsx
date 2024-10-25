import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NewsroomCardProps {
  title: string;
  description: string;
  href: string;
}

const NewsroomCard: React.FC<NewsroomCardProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <Card className="p-4 text-white rounded-lg shadow-md bg-gradient-to-r from-indigo-500 to-purple-500">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Stay updated on the latest newsroom events and insights.</p>
      </CardContent>
      <CardFooter>
        <a href={href} className="text-sm underline hover:text-gray-200">
          Learn More
        </a>
      </CardFooter>
    </Card>
  );
};

export default NewsroomCard;
