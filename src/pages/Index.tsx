
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import FeaturedSkills from "@/components/FeaturedSkills";
import HowItWorks from "@/components/HowItWorks";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center md:pt-32 md:pb-24">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-purple-600">Skill</span>
          <span>Swap</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
          Teach what you know, learn what you don't. Connect with others and exchange skills without spending money.
        </p>
        
        {/* Search Bar */}
        <div className="mx-auto mb-8 flex max-w-md items-center rounded-full bg-white px-4 py-2 shadow-md">
          <Search className="mr-2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a skill to learn..."
            className="w-full bg-transparent py-2 px-2 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="ml-2 rounded-full bg-purple-600 hover:bg-purple-700">
            Search
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/register">
            <Button className="w-full bg-purple-600 px-8 py-6 text-lg hover:bg-purple-700 sm:w-auto">
              Join SkillSwap
            </Button>
          </Link>
          <Link to="/explore">
            <Button variant="outline" className="w-full border-purple-600 px-8 py-6 text-lg text-purple-600 hover:bg-purple-50 sm:w-auto">
              Explore Skills
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Featured Skills */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold">Featured Skills</h2>
          <p className="mb-12 text-center text-gray-600">Discover popular skills being shared in our community</p>
          <FeaturedSkills />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Community Says</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Chen",
                skill: "Photography",
                quote: "I taught photography basics and learned how to play guitar. This platform is amazing!",
                avatar: "/placeholder.svg",
              },
              {
                name: "Sarah Johnson",
                skill: "Web Design",
                quote: "SkillSwap helped me find someone to teach me Spanish while I shared my web design skills.",
                avatar: "/placeholder.svg",
              },
              {
                name: "Marcus Williams",
                skill: "Cooking",
                quote: "Trading my cooking lessons for yoga instruction was the best decision. Highly recommend!",
                avatar: "/placeholder.svg",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                      <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.skill}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Community */}
      <section className="bg-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Start Swapping Skills?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join our community today and start exchanging knowledge with others who share your passion for learning.
          </p>
          <Link to="/register">
            <Button className="px-8 py-6 text-lg bg-white text-purple-600 hover:bg-gray-100">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
