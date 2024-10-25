import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BookMarksSectionCard = ({ title, description, href, customStyle }) => {
  const styles = [
    "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
    "bg-gradient-to-r from-green-500 to-teal-500 text-white",
    "bg-gradient-to-r from-red-500 to-orange-500 text-white",
    "bg-gradient-to-r from-indigo-500 to-blue-500 text-white",
    "bg-gradient-to-r from-yellow-500 to-red-500 text-white",
    "bg-gradient-to-r from-teal-500 to-green-500 text-white",
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    "bg-gradient-to-r from-pink-500 to-red-500 text-white",
    "bg-gradient-to-r from-gray-700 to-gray-900 text-white",
    "bg-gradient-to-r from-blue-600 to-green-600 text-white",
    "bg-gradient-to-r from-purple-600 to-yellow-600 text-white",
  ];

  return (
    <Card
      className={`p-4 border-none rounded-lg shadow-lg ${
        styles[customStyle % styles.length]
      }`}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Explore this bookmark for more details.</p>
      </CardContent>
      <CardFooter>
        <a
          href={href}
          className="text-sm text-white underline hover:text-gray-200"
        >
          Visit Link
        </a>
      </CardFooter>
    </Card>
  );
};

export default BookMarksSectionCard;
