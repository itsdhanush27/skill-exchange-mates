
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, User, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Profile",
      description:
        "Sign up and list the skills you can teach and the ones you want to learn.",
      icon: User,
    },
    {
      title: "Find Your Match",
      description:
        "Search for users who want to learn what you teach and can teach what you want to learn.",
      icon: Users,
    },
    {
      title: "Connect & Learn",
      description:
        "Arrange meetings online or in-person and start swapping skills!",
      icon: MapPin,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold">How SkillSwap Works</h2>
        <p className="mb-12 text-center text-gray-600">
          Three simple steps to start your skill-swapping journey
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <step.icon size={28} />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
