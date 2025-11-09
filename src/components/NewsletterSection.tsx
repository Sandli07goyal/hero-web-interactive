import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import newsletterIllustration from "@/assets/newsletter-illustration.png";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <div className="flex justify-center">
              <img 
                src={newsletterIllustration} 
                alt="Newsletter subscription" 
                className="w-full max-w-md"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">At your fingertips</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lightning fast prototyping
              </h2>
              <p className="text-xl font-semibold mb-2">Subscribe to our Newsletter</p>
              <p className="text-muted-foreground mb-6">Available exclusively on Figmaland</p>
              
              <form onSubmit={handleSubscribe} className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
