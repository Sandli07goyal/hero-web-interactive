import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Very intuitive and feature rich. Ease of use is exceptional. I was able to set up my workflow within minutes and didn't need any technical knowledge. The support team has been amazing too!",
    author: "Sarah Johnson",
    role: "Product Designer"
  },
  {
    id: 2,
    rating: 5,
    text: "This platform has transformed how we work. The collaboration features are outstanding and have significantly improved our team's productivity. Highly recommended!",
    author: "Michael Chen",
    role: "CEO, Tech Startup"
  },
  {
    id: 3,
    rating: 5,
    text: "Best investment we've made this year. The automation features save us hours every week. Customer support is responsive and helpful. Can't imagine working without it now.",
    author: "Emily Rodriguez",
    role: "Marketing Manager"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8 min-h-[300px] flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
              {testimonials[currentIndex].text}
            </p>
            <div>
              <p className="font-semibold text-foreground">{testimonials[currentIndex].author}</p>
              <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-primary'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
