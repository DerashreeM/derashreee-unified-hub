import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, DollarSign, GraduationCap, ArrowRight, FileText, Briefcase, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Derashree Online Works",
      subtitle: "Digital Services & CSC Center",
      description: "Complete digital service solutions including CSC center services, government job applications, and online documentation assistance.",
      features: [
        "CSC Center Services",
        "Government Job Applications",
        "Online Documentation",
        "Digital Assistance"
      ],
      gradient: "from-primary to-primary-light"
    },
    {
      icon: DollarSign,
      title: "Derashreee Finance",
      subtitle: "Home Loan Solutions",
      description: "Trusted financial partner offering comprehensive home loan solutions with competitive rates and personalized service.",
      features: [
        "Home Loan Services",
        "Competitive Interest Rates",
        "Quick Processing",
        "Expert Consultation"
      ],
      gradient: "from-accent to-accent-light"
    },
    {
      icon: GraduationCap,
      title: "Derashreee Education",
      subtitle: "Coming Soon",
      description: "Preparing to launch comprehensive educational services to empower learners with quality education and skill development.",
      features: [
        "Quality Education Programs",
        "Skill Development",
        "Career Guidance",
        "Learning Resources"
      ],
      gradient: "from-primary-light to-accent"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Our Business Verticals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across digital services, finance, and education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-card border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-8 space-y-6">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Decorative gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
