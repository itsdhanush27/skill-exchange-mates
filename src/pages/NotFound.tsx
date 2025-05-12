
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-purple-50 p-4 text-center">
      <h1 className="mb-2 text-9xl font-bold text-purple-600">404</h1>
      <h2 className="mb-6 text-2xl font-semibold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button className="bg-purple-600 hover:bg-purple-700">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
