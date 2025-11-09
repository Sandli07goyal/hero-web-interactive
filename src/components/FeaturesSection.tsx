import { Wrench, Target, Pen } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Easy to use",
    description: "Things on a very small that you have any direct",
  },
  {
    icon: Target,
    title: "At your fingertips",
    description: "Keep your work flowing with a simple interface",
  },
  {
    icon: Pen,
    title: "Customizable",
    description: "Tailor your experience with flexible settings",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
