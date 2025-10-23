import { Facebook, Whatsapp, Maps, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Digital Services", href: "#services" },
      { name: "Finance Solutions", href: "#services" },
      { name: "Education (Coming Soon)", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Values", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Disclaimer", href: "#" },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1BLKnHEbwy/", label: "Facebook" },
    { icon: Whatsapp, href: "https://chat.whatsapp.com/EzVkpKGOmfg3oVWPIMnKnE?mode=wwt", label: "Whatsapp" },
    { icon: Map, href: "https://share.google/Jl9N6up15iP9eyQ9n", label: "Map" },
    { icon: Instagram, href: "https://www.instagram.com/derashree_online_works?igsh=MTl3aXBzMDd5NGJpag==", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Derashreee</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for digital services, financial solutions, and educational excellence.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
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
              {footerLinks.services.map((link, index) => (
                <li key={index}>
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
              {footerLinks.company.map((link, index) => (
                <li key={index}>
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
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
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
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>© {currentYear} Derashreee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
