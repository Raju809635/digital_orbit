export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Our Process" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Startup MVP Development",
    description: "Build the first working version of a startup idea quickly."
  },
  {
    title: "Website Development",
    description: "Professional websites for businesses, startups, and creators."
  },
  {
    title: "Portfolio Websites",
    description: "Personal portfolio websites for students and professionals."
  },
  {
    title: "Landing Pages",
    description: "Marketing pages for startups and products."
  },
  {
    title: "Mobile App Development",
    description: "Build Android and cross-platform mobile apps."
  },
  {
    title: "Digital Product Consulting",
    description: "Help founders plan product and technology strategy."
  }
];

export const processSteps = [
  {
    title: "Idea Discussion",
    description: "Understand your idea, goals, and product requirements."
  },
  {
    title: "Product Planning",
    description: "Create a simple roadmap, feature priorities, and structure."
  },
  {
    title: "Design and Development",
    description: "Build the website, app, or product with iterative feedback."
  },
  {
    title: "Launch",
    description: "Deliver your product and support launch execution."
  }
];

export type ProjectItem = {
  title: string;
  subtitle?: string;
  description: string;
  type: string;
  platform?: string;
  features: string[];
  tech: string[];
  status?: string;
  category: "Mobile Applications" | "Web Applications";
  liveDemo?: string;
  caseStudy?: string;
  github?: string;
  flagship?: boolean;
};

export const portfolioItems: ProjectItem[] = [
  {
    title: "Furniture Store Website (Demo)",
    description: "Modern furniture business website showcasing products with enquiry and WhatsApp support.",
    type: "Website",
    features: [
      "Hero landing page",
      "Product catalog",
      "Category filtering",
      "Product pages",
      "Enquiry system",
      "Fully responsive design"
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Web Applications",
    liveDemo: "https://furniture-beta-coral.vercel.app"
  },
  {
    title: "Samskruti Engineering College Website",
    description:
      "A modern educational institution website providing course information, campus details, and admission information.",
    type: "Website",
    features: [
      "Courses and departments",
      "Faculty information",
      "Campus highlights",
      "Admission information",
      "Student-friendly navigation"
    ],
    tech: ["Next.js", "Tailwind CSS", "Responsive design"],
    category: "Web Applications",
    liveDemo: "https://samskruti.vercel.app",
    caseStudy: "/contact"
  },
  {
    title: "LifeCare Hospital Website",
    description:
      "A professional healthcare website designed for hospitals and clinics with appointment and service sections.",
    type: "Website",
    features: [
      "Doctor profiles",
      "Medical services",
      "Appointment section",
      "Emergency contact",
      "Patient information"
    ],
    tech: ["Next.js", "Tailwind CSS", "Modern UI design"],
    category: "Web Applications",
    liveDemo: "https://hospital-one-drab.vercel.app",
    caseStudy: "/contact"
  },
  {
    title: "Restaurant and Food Business Website",
    description:
      "A modern restaurant website for food businesses featuring menu display, food gallery, and contact options.",
    type: "Website",
    features: [
      "Online menu",
      "Food gallery",
      "Restaurant information",
      "Reservation/contact",
      "Mobile responsive"
    ],
    tech: ["Next.js", "Tailwind CSS"],
    category: "Web Applications",
    liveDemo: "https://restaurants-nu.vercel.app",
    caseStudy: "/contact"
  },
  {
    title: "Cyber Security Corporate Website",
    description:
      "A modern cybersecurity company website showcasing services, security solutions, and corporate branding.",
    type: "Website",
    features: [
      "Hero landing page",
      "Services section",
      "Security solutions overview",
      "Contact form",
      "Fully responsive design"
    ],
    tech: ["Next.js", "Tailwind CSS", "Modern UI components"],
    category: "Web Applications",
    liveDemo: "https://cyber-three-green.vercel.app",
    caseStudy: "/contact"
  }
];

export const testimonials = [
  {
    quote:
      "Digital Orbit helped us launch our MVP in four weeks and start onboarding early users.",
    author: "Ananya, Startup Founder"
  },
  {
    quote:
      "The team translated our rough concept into a polished product website that converted.",
    author: "Rohit, Small Business Owner"
  }
];

export const faqItems = [
  {
    question: "How quickly can Digital Orbit ship an MVP?",
    answer: "Most MVP builds launch in 3-6 weeks based on product complexity."
  },
  {
    question: "Do you work with non-technical founders?",
    answer: "Yes. We guide planning, design, delivery, and launch end-to-end."
  },
  {
    question: "Can I start with only a landing page?",
    answer: "Yes, many clients begin with a landing page and then expand to full products."
  }
];
