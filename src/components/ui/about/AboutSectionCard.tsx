import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dummyImage from "../../../assets/hero4.webp";

const AboutSectionCard = ({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
}) => {
  return (
    <Card
      className={`h-full flex flex-col shadow-lg pb-10 border-none ${bgColor} rounded-none transition-transform transform hover:scale-105`}
    >
      <CardHeader className="p-6">
        <CardTitle className="pt-5 text-4xl font-semibold text-gray-800 transition-colors hover:text-yellow-500 hover:underline underline-offset-4">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardDescription className="text-lg text-gray-800">
          {description}
        </CardDescription>
        <hr className="my-4 border-gray-300" />
        <p className="text-sm font-medium text-gray-800 transition-colors cursor-pointer hover:text-yellow-500 hover:underline">
          Read More <span className="text-xl">→</span>
        </p>
      </CardContent>
      <CardFooter className="p-0 mt-4">
        <img
          src={dummyImage}
          alt="Dummy"
          className="object-cover w-full rounded-none h-60"
        />
      </CardFooter>
    </Card>
  );
};

export default AboutSectionCard;
