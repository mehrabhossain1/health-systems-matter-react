import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutSectionCard = ({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor?: string;
}) => {
  return (
    <Card
      className={`h-full p-4 flex flex-col shadow-lg border-none ${bgColor} rounded-md transition-transform transform hover:scale-105`} // Apply margin-bottom for spacing between cards
    >
      <CardHeader className="p-3">
        <CardTitle className="text-xl underline font-medium text-gray-800 transition-colors cursor-pointer decoration-[#01748D] hover:underline hover:text-[#01748D] underline-offset-4">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-3">
        <CardDescription className="text-sm text-slate-600">
          {description}
        </CardDescription>

        <p className="text-sm font-medium flex items-center justify-end mt-4 text-gray-800 underline-offset-8 transition-colors cursor-pointer decoration-[#01748D]">
          <span className="px-4 text-lg border rounded-sm hover:bg-[#01748D] hover:text-white">
            →
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutSectionCard;
