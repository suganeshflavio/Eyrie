export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why Team Eyrie", href: "/why-team-eyrie" },
  { label: "Our Presence", href: "/presence" },
  { label: "Our Team", href: "/people" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

export const TOP_BAR_CONTACT = {
  email: "contact@teameyrie.in",
  phonePrimary: "+91 86182 59712",
  phoneSecondary: "+91 98457 21255",
};

export const QUICK_LINKS = [
  { label: "Our Team", href: "/people" },
  { label: "News & Articles", href: "/insights" },
  {
    label: "Documentation Suite",
    href: "https://apps.teameyrie.com/",
    external: true,
  },
  { label: "Careers", href: "/careers" },
  {
    label: "LMS Login",
    href: "https://web.classplusapp.com/login",
    external: true,
  },
];
