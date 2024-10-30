import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContactCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  href,
  icon,
}) => {
  return (
    <Card className="p-4 bg-gray-100 border-none">
      <CardHeader className="flex items-center space-x-3">
        <span className="text-gray-800">{icon}</span>
        <CardTitle className="text-lg font-semibold text-gray-800 transition-colors duration-200 cursor-pointer hover:underline hover:text-red-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardDescription className="mt-2 text-sm text-gray-600">
        {description}
      </CardDescription>

      <CardFooter>
        <a
          href={href}
          className="text-sm text-blue-500 underline hover:text-blue-700"
        >
          Learn More
        </a>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
