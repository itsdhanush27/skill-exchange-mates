
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedSkills = () => {
  const featuredSkills = [
    {
      id: 1,
      title: "Photography Basics",
      category: "Photography",
      teachersCount: 24,
      learnersCount: 47,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Guitar for Beginners",
      category: "Music",
      teachersCount: 18,
      learnersCount: 63,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Intro to Coding",
      category: "Technology",
      teachersCount: 35,
      learnersCount: 82,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Yoga & Meditation",
      category: "Wellness",
      teachersCount: 29,
      learnersCount: 51,
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Cooking Essentials",
      category: "Culinary",
      teachersCount: 42,
      learnersCount: 68,
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Digital Marketing",
      category: "Business",
      teachersCount: 26,
      learnersCount: 59,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredSkills.map((skill) => (
        <Card key={skill.id} className="overflow-hidden border-none shadow-md">
          <div className="aspect-video w-full overflow-hidden bg-gray-100">
            <img
              src={skill.image}
              alt={skill.title}
              className="h-full w-full object-cover"
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle className="text-lg">{skill.title}</CardTitle>
              <Badge variant="outline" className="bg-purple-100 text-purple-600">
                {skill.category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pb-2 text-sm text-gray-500">
            <div className="flex justify-between">
              <span>{skill.teachersCount} teachers</span>
              <span>{skill.learnersCount} learners</span>
            </div>
          </CardContent>
          <CardFooter>
            <Link to={`/skills/${skill.id}`} className="w-full">
              <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedSkills;
