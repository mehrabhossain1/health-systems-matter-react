import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NewsletterCard = ({ title, description, href }) => {
  return (
    <Card className="p-4 text-white rounded-lg shadow-md bg-gradient-to-r from-teal-500 to-blue-500">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Stay updated with the latest issues and news.</p>
      </CardContent>
      <CardFooter>
        <a href={href} className="text-sm underline hover:text-gray-200">
          Learn More
        </a>
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;
