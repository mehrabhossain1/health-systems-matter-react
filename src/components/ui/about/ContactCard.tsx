import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContactCardProps {
  title: string;
  description: string;
  href: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <Card className="p-4 bg-white rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Connect with us for more information and updates.</p>
      </CardContent>
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
