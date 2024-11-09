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
      className={`h-full border-[#F18A00] p-4 flex flex-col shadow-lg ${bgColor} rounded-md transition-transform transform hover:scale-105`}
    >
      <CardHeader className="p-2">
        <CardTitle className="text-xl underline font-medium text-gray-800 transition-colors cursor-pointer decoration-[#F18A00] hover:text-[#F18A00] hover:decoration-[#F18A00] underline-offset-4">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-3">
        <CardDescription className="text-sm text-slate-600 line-clamp-1">
          {description}
        </CardDescription>

        <p className="flex items-center justify-end mt-4 text-sm text-gray-800 transition-colors cursor-pointer">
          <span className="px-4 text-lg border border-[#F18A00] text-[#F18A00] rounded-sm hover:bg-[#F18A00] hover:text-white hover:border-[#F18A00]">
            →
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutSectionCard;
