import { Facebook, MessageCircle, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { id: "s1", name: "Digital Services", href: "#services" },
      { id: "s2", name: "Finance Solutions", href: "#services" },
      { id: "s3", name: "Education (Coming Soon)", href: "#services" },
    ],
    company: [
      { id: "c1", name: "About Us", href: "#about" },
      { id: "c2", name: "Our Values", href: "#about" },
      { id: "c3", name: "Contact", href: "#contact" },
    ],
    legal: [
      { id: "l1", name: "Privacy Policy", href: "/privacy" },
      { id: "l2", name: "Terms of Service", href: "/terms" },
      { id: "l3", name: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const socialLinks = [
    {
      id: "fb",
      icon: Facebook,
      href: "https://www.facebook.com/share/1BLKnHEbwy/",
      label: "Facebook",
    },
    {
      id: "wa",
      icon: MessageCircle,
      href: "https://chat.whatsapp.com/EzVkpKGOmfg3oVWPIMnKnE",
      label: "WhatsApp",
    },
    {
      id: "map",
      icon: MapPin,
      href: "https://maps.app.goo.gl/Jl9N6up15iP9eyQ9n", // Fixed Google Maps link
      label: "Location on Google Maps",
    },
    {
      id: "ig",
      icon: Instagram,
      href: "https://www.instagram.com/derashree_online_works",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Derashree</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for digital services, financial solutions, and educational excellence.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80 text-sm">
          <p>© {currentYear} Derashree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
