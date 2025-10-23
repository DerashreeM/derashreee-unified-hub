import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DollarSign, Home, TrendingUp, Clock, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Finance = () => {
  const services = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Flexible home loan solutions with competitive interest rates tailored to your needs"
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Get the best interest rates in the market with transparent pricing"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast approval process with minimal documentation and quick disbursal"
    },
    {
      icon: Shield,
      title: "Expert Guidance",
      description: "Professional consultation to help you make informed financial decisions"
    }
  ];

  const benefits = [
    "Low Interest Rates",
    "Flexible Repayment Options",
    "Quick Loan Approval",
    "Minimal Documentation",
    "No Hidden Charges",
    "Balance Transfer Facility",
    "Top-up Loan Options",
    "Expert Financial Advice",
    "Easy EMI Calculator",
    "Complete Transparency"
  ];

  const process = [
    {
      step: "1",
      title: "Application",
      description: "Submit your home loan application with basic documents"
    },
    {
      step: "2",
      title: "Verification",
      description: "Our team verifies your documents and assesses eligibility"
    },
    {
      step: "3",
      title: "Approval",
      description: "Get quick loan approval with competitive interest rates"
    },
    {
      step: "4",
      title: "Disbursal",
      description: "Receive your loan amount directly to your account"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
              <DollarSign className="h-5 w-5" />
              <span className="text-sm font-medium">Home Loan Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Derashreee Finance
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted financial partner offering comprehensive home loan solutions with competitive rates and personalized service.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Link to="/#contact">
                <Button size="lg" className="gap-2">
                  Apply Now <ArrowRight className="h-4 w-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center flex-shrink-0">
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

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Simple Loan Process</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent to-accent-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Your Dream Home a Reality</h2>
          <p className="text-xl mb-8 opacity-90">Get in touch with our experts for the best home loan deals</p>
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

export default Finance;
