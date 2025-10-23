import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Monitor, FileText, Briefcase, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OnlineWorks = () => {
  const services = [
    {
      icon: FileText,
      title: "CSC Center Services",
      description: "Complete Common Service Center solutions for all government and private digital services"
    },
    {
      icon: Briefcase,
      title: "Government Job Applications",
      description: "Expert assistance with government job applications, form filling, and documentation"
    },
    {
      icon: Monitor,
      title: "Online Documentation",
      description: "Digital documentation services including certificates, PAN, Aadhaar, and more"
    },
    {
      icon: Users,
      title: "Digital Assistance",
      description: "Comprehensive digital support for online transactions and services"
    }
  ];

  const features = [
    "PAN Card Services",
    "Aadhaar Card Services",
    "Voter ID Services",
    "Birth & Death Certificates",
    "Income Certificate",
    "Caste Certificate",
    "Government Form Filling",
    "Online Bill Payments",
    "Banking Services",
    "Insurance Services"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Monitor className="h-5 w-5" />
              <span className="text-sm font-medium">Digital Services & CSC Center</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Derashree Online Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for all digital services, government applications, and online documentation needs.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Link to="/#contact">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for all your digital service needs</p>
          <Link to="/#contact">
            <Button size="lg" variant="secondary" className="gap-2">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlineWorks;
