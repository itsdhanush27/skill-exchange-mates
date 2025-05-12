
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("skills");

  const categories = [
    { label: "All Categories", value: "all" },
    { label: "Art & Design", value: "art" },
    { label: "Music", value: "music" },
    { label: "Technology", value: "technology" },
    { label: "Cooking", value: "cooking" },
    { label: "Language", value: "language" },
    { label: "Fitness", value: "fitness" },
  ];

  // Sample data
  const skills = [
    {
      id: 1,
      title: "Digital Photography",
      category: "Art & Design",
      teachersCount: 18,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Piano Lessons",
      category: "Music",
      teachersCount: 24,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "React Development",
      category: "Technology",
      teachersCount: 31,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Italian Cuisine",
      category: "Cooking",
      teachersCount: 15,
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Spanish Conversation",
      category: "Language",
      teachersCount: 27,
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Yoga for Beginners",
      category: "Fitness",
      teachersCount: 22,
      image: "/placeholder.svg",
    },
    {
      id: 7,
      title: "Graphic Design",
      category: "Art & Design",
      teachersCount: 19,
      image: "/placeholder.svg",
    },
    {
      id: 8,
      title: "Guitar Basics",
      category: "Music",
      teachersCount: 33,
      image: "/placeholder.svg",
    },
  ];

  const users = [
    {
      id: 1,
      name: "Jessica Chen",
      location: "New York, NY",
      teaches: ["Photography", "Graphic Design"],
      learns: ["Spanish", "Piano"],
      image: "/placeholder.svg",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Marcus Johnson",
      location: "Chicago, IL",
      teaches: ["JavaScript", "React"],
      learns: ["Guitar", "French"],
      image: "/placeholder.svg",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      location: "Los Angeles, CA",
      teaches: ["Spanish", "Yoga"],
      learns: ["Photography", "Piano"],
      image: "/placeholder.svg",
      rating: 4.7,
    },
    {
      id: 4,
      name: "David Kim",
      location: "Seattle, WA",
      teaches: ["Piano", "Korean"],
      learns: ["Cooking", "Photography"],
      image: "/placeholder.svg",
      rating: 4.5,
    },
  ];

  // Filter skills based on search and category
  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      category === "all" ||
      skill.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Filter users based on search
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.teaches.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      user.learns.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Search Header */}
      <div className="bg-purple-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            Find Skills & People
          </h1>

          <div className="mx-auto max-w-2xl">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex flex-1 items-center">
                <Search className="absolute left-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for skills or people..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-0"
                />
              </div>

              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-[200px] bg-white border-0">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs
          defaultValue="skills"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mx-auto mb-8 grid w-[400px] max-w-full grid-cols-2">
            <TabsTrigger value="skills">Browse Skills</TabsTrigger>
            <TabsTrigger value="people">Browse People</TabsTrigger>
          </TabsList>

          <TabsContent value="skills">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredSkills.map((skill) => (
                <Link
                  key={skill.id}
                  to={`/skills/${skill.id}`}
                  className="transition-transform hover:scale-105"
                >
                  <Card className="overflow-hidden border-none shadow-md h-full">
                    <div className="aspect-video w-full overflow-hidden bg-gray-100">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-semibold">{skill.title}</h3>
                        <Badge variant="outline" className="bg-purple-100 text-purple-600">
                          {skill.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">
                        {skill.teachersCount} teachers available
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredSkills.length === 0 && (
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-500">
                  No skills found matching your search criteria.
                </p>
                <Button
                  variant="link"
                  className="mt-2 text-purple-600"
                  onClick={() => {
                    setSearchQuery("");
                    setCategory("all");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="people">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredUsers.map((user) => (
                <Link
                  key={user.id}
                  to={`/users/${user.id}`}
                  className="transition-transform hover:scale-105"
                >
                  <Card className="border-none shadow-md h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
                          <img
                            src={user.image}
                            alt={user.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="text-lg font-semibold">{user.name}</h3>
                          <p className="text-sm text-gray-500">{user.location}</p>
                          <div className="mt-1 flex items-center">
                            <span className="text-yellow-400">★</span>
                            <span className="ml-1 text-sm">{user.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="mb-2">
                          <span className="text-sm font-medium text-gray-700">Teaches:</span>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {user.teaches.map((skill) => (
                              <Badge key={skill} className="bg-purple-100 text-purple-600 hover:bg-purple-200">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Wants to learn:</span>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {user.learns.map((skill) => (
                              <Badge key={skill} variant="outline" className="hover:bg-gray-100">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredUsers.length === 0 && (
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-500">
                  No users found matching your search criteria.
                </p>
                <Button
                  variant="link"
                  className="mt-2 text-purple-600"
                  onClick={() => {
                    setSearchQuery("");
                  }}
                >
                  Clear search
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Explore;
