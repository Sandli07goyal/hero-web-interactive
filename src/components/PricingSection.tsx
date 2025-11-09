import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "FREE",
    price: "0",
    description: "Organize across all apps by hand",
    features: [
      "Unlimited product updates",
      "1GB Cloud storage",
      "Email and community support"
    ]
  },
  {
    name: "STANDARD",
    price: "10",
    description: "Organize across all apps by hand",
    features: [
      "Unlimited product updates",
      "5GB Cloud storage",
      "Email and community support",
      "Priority support"
    ],
    featured: true
  },
  {
    name: "BUSINESS",
    price: "99",
    description: "Organize across all apps by hand",
    features: [
      "Unlimited product updates",
      "Unlimited Cloud storage",
      "Email and community support",
      "Priority support",
      "Dedicated account manager"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-primary-dark text-primary-dark-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-lg p-8 ${
                  plan.featured 
                    ? 'bg-primary text-white shadow-2xl scale-105' 
                    : 'bg-white text-foreground'
                }`}
              >
                <h3 className="text-xl font-bold mb-4 uppercase">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-xl ml-2">$</span>
                  <p className={`text-sm mt-2 ${plan.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
                    Per Month
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.featured 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : ''
                  }`}
                  size="lg"
                >
                  Try for free
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
