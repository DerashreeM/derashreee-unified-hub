import { Card } from "@/components/ui/card";
import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide comprehensive, reliable services that empower individuals and businesses to achieve their goals."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Building lasting relationships through trust, transparency, and exceptional service delivery."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining the highest standards across all our business verticals."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously evolving to meet changing needs with modern solutions and approaches."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              About Derashreee
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A trusted name in multiple business sectors, committed to delivering quality services 
              that make a difference in people's lives. From digital solutions to financial services 
              and future educational initiatives, we're building a comprehensive ecosystem of excellence.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-gradient-card border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                3+
              </div>
              <p className="text-muted-foreground">Business Verticals</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
