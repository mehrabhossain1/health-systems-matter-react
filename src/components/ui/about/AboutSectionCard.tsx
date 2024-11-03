import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import dummyImage from "../../../assets/hero4.webp";

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
      className={`h-full flex flex-col shadow-lg border-none ${bgColor} rounded-none transition-transform transform hover:scale-105`}
    >
      <CardHeader className="p-6">
        <CardTitle className="pt-5 text-2xl font-medium text-white transition-colors cursor-pointer decoration-[#55D5FE] hover:underline underline-offset-4">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 p-6">
        <CardDescription className="pl-8 text-lg text-slate-300">
          {description}
        </CardDescription>

        <hr className="my-4 border-gray-300" />

        <p className="pl-8 text-sm font-medium text-white underline-offset-4 transition-colors cursor-pointer decoration-[#55D5FE] hover:underline">
          Read More <span className="text-xl">→</span>
        </p>
      </CardContent>

      {/* <CardFooter className="flex justify-end p-0 mt-4">
        <img
          src={dummyImage}
          alt="Dummy"
          className="object-cover w-full pl-8 rounded-none h-60"
        />
      </CardFooter> */}
    </Card>
  );
};

export default AboutSectionCard;
