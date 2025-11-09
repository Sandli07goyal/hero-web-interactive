import { Button } from "@/components/ui/button";
import laptopMockup from "@/assets/laptop-mockup.jpg";

const OrganizeSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Area */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fastest way to organize
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
              </p>
              <Button size="lg">
                Try For Free
              </Button>
            </div>

            {/* Image Area */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={laptopMockup} 
                  alt="Laptop showing dashboard interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizeSection;
