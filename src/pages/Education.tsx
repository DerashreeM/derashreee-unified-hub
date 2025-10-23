import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, BookOpen, Users, Award, Target, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
  const upcomingServices = [
    {
      icon: BookOpen,
      title: "Quality Education Programs",
      description: "Comprehensive courses designed to provide world-class education"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Industry-relevant skills training to enhance career prospects"
    },
    {
      icon: Users,
      title: "Career Guidance",
      description: "Expert mentorship and counseling for career planning"
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Recognized certifications to boost your professional profile"
    }
  ];

  const plannedFeatures = [
    "Online & Offline Classes",
    "Expert Faculty",
    "Interactive Learning",
    "Career Counseling",
    "Placement Assistance",
    "Industry Partnerships",
    "Flexible Schedules",
    "Affordable Fees",
    "Study Materials",
    "Exam Preparation"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-light/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/10 border border-primary-light/20 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Derashreee Education
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preparing to launch comprehensive educational services to empower learners with quality education and skill development.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Link to="/#contact">
                <Button size="lg" className="gap-2">
                  Stay Updated <ArrowRight className="h-4 w-4" />
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

      {/* Upcoming Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We're Building</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're working hard to bring you the best educational experience. Here's what you can expect.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-accent flex items-center justify-center flex-shrink-0">
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

      {/* Planned Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Planned Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {plannedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Derashreee Education, we envision a future where quality education is accessible to all. 
              Our mission is to create a learning environment that nurtures talent, builds confidence, 
              and prepares students for success in their chosen careers. We're committed to bringing 
              innovative teaching methods, experienced faculty, and industry-relevant curriculum to 
              empower the next generation of leaders and professionals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be the First to Know</h2>
          <p className="text-xl mb-8 opacity-90">Get notified when we launch our educational programs</p>
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

export default Education;
