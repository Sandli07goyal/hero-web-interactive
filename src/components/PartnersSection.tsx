import { Button } from "@/components/ui/button";

const partners = [
  { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
  { name: "Dropbox", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg" },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Partners</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Repeated row for more partners */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 items-center">
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <Button size="lg">
            Try For Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
