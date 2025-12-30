export interface Event {
  id: string;
  code: string;
  title: string;
  shortDescription: string;
  category: "Technical" | "Cultural" | "Wellness";
  slug: string;
  registrationFee: string | number;
  active: boolean;
  isCombo?: boolean;
  description?: string;
  rules?: string[];
  judges?: string[];
  prizes?: {
    first?: string;
    second?: string;
    third?: string;
  };
  date?: string;
  time?: string;
  venue?: string;
  teamSize?: {
    min?: number;
    max?: number;
  };
  includedEvents?: string[];
  contactPerson?: string;
  email?: string;
}

export const events: Event[] = [
  // Technical Events
  {
    id: "tech-1",
    code: "TECH001",
    title: "Code Sprint",
    shortDescription: "48-hour hackathon to build innovative solutions",
    category: "Technical",
    slug: "code-sprint",
    registrationFee: "500",
    active: true,
    description: "A 48-hour hackathon where teams compete to build the most innovative tech solution. Participants will have access to mentorship, APIs, and resources.",
    rules: [
      "Teams of 2-4 members",
      "Original code only",
      "Must submit working prototype",
      "Presentations limited to 5 minutes"
    ],
    judges: ["Tech Lead 1", "Tech Lead 2"],
    prizes: {
      first: "₹50,000",
      second: "₹30,000",
      third: "₹20,000"
    },
    date: "2026-03-15",
    time: "09:00 AM",
    venue: "Tech Block A",
    teamSize: { min: 2, max: 4 },
    contactPerson: "John Doe",
    email: "tech@prerana.com"
  },
  {
    id: "tech-2",
    code: "TECH002",
    title: "Robotics Challenge",
    shortDescription: "Design and build autonomous robots for various challenges",
    category: "Technical",
    slug: "robotics-challenge",
    registrationFee: "1000",
    active: true,
    description: "Build autonomous robots to compete in real-world challenges. Test your engineering and programming skills.",
    rules: [
      "Teams of 3-5 members",
      "Budget limit: ₹5,000",
      "Must use provided components",
      "Safety inspection required"
    ],
    judges: ["Robotics Expert 1", "Robotics Expert 2"],
    prizes: {
      first: "₹75,000",
      second: "₹50,000",
      third: "₹25,000"
    },
    date: "2026-03-16",
    time: "10:00 AM",
    venue: "Robotics Lab",
    teamSize: { min: 3, max: 5 },
    contactPerson: "Jane Smith",
    email: "robotics@prerana.com"
  },
  {
    id: "tech-3",
    code: "TECH003",
    title: "Web Development Battle",
    shortDescription: "Create stunning web applications in 6 hours",
    category: "Technical",
    slug: "web-dev-battle",
    registrationFee: "300",
    active: true,
    description: "A 6-hour competition to build full-stack web applications based on given themes.",
    rules: [
      "Individual or team of 2",
      "Any framework allowed",
      "Must be responsive",
      "Code must be on GitHub"
    ],
    judges: ["Web Dev Lead", "UX Designer"],
    prizes: {
      first: "₹25,000",
      second: "₹15,000",
      third: "₹10,000"
    },
    date: "2026-03-14",
    time: "02:00 PM",
    venue: "Computer Lab 1",
    teamSize: { min: 1, max: 2 },
    contactPerson: "Alex Turner",
    email: "webdev@prerana.com"
  },

  // Combo Technical Event
  {
    id: "tech-combo-1",
    code: "TECHCOMBO01",
    title: "Technical Extravaganza",
    shortDescription: "Ultimate tech competition package",
    category: "Technical",
    slug: "technical-extravaganza",
    registrationFee: "1500",
    active: true,
    isCombo: true,
    description: "Register for multiple technical events at a discounted rate. Includes Code Sprint, Robotics Challenge, and Web Development Battle.",
    includedEvents: ["Code Sprint", "Robotics Challenge", "Web Development Battle"],
    date: "2026-03-14",
    venue: "Tech Block",
    teamSize: { min: 2, max: 5 },
    contactPerson: "Tech Coordinator",
    email: "tech@prerana.com"
  },

  // Cultural Events
  {
    id: "cult-1",
    code: "CULT001",
    title: "Dance Face-Off",
    shortDescription: "Showcase your dance moves in this competitive battle",
    category: "Cultural",
    slug: "dance-face-off",
    registrationFee: "200",
    active: true,
    description: "A dance competition where individuals and groups compete across various dance styles and genres.",
    rules: [
      "Individual or group (max 8 members)",
      "Duration: 4-5 minutes",
      "Original choreography preferred",
      "Any music genre allowed"
    ],
    judges: ["Dance Choreographer 1", "Dance Choreographer 2"],
    prizes: {
      first: "₹15,000",
      second: "₹10,000",
      third: "₹5,000"
    },
    date: "2026-03-17",
    time: "06:00 PM",
    venue: "Main Auditorium",
    teamSize: { min: 1, max: 8 },
    contactPerson: "Priya Sharma",
    email: "dance@prerana.com"
  },
  {
    id: "cult-2",
    code: "CULT002",
    title: "Battle of the Bands",
    shortDescription: "Musical competition for aspiring bands and musicians",
    category: "Cultural",
    slug: "battle-of-bands",
    registrationFee: "400",
    active: true,
    description: "Rock, pop, indie, or any genre - bring your band and compete for glory.",
    rules: [
      "Band size: 3-6 members",
      "Duration: 15 minutes (including setup)",
      "Original compositions preferred",
      "Can cover songs (max 50%)"
    ],
    judges: ["Music Producer", "Sound Engineer"],
    prizes: {
      first: "₹30,000",
      second: "₹20,000",
      third: "₹10,000"
    },
    date: "2026-03-18",
    time: "07:00 PM",
    venue: "Main Stage",
    teamSize: { min: 3, max: 6 },
    contactPerson: "Rahul Verma",
    email: "music@prerana.com"
  },
  {
    id: "cult-3",
    code: "CULT003",
    title: "Fashion Show",
    shortDescription: "Showcase your fashion designs and styling skills",
    category: "Cultural",
    slug: "fashion-show",
    registrationFee: "500",
    active: true,
    description: "A glamorous fashion show where designers and stylists showcase their creations.",
    rules: [
      "Individual designer or team",
      "Max 5 outfits per participant",
      "Models provided or bring your own",
      "Duration: 5 minutes per collection"
    ],
    judges: ["Fashion Designer", "Stylist"],
    prizes: {
      first: "₹25,000",
      second: "₹15,000",
      third: "₹10,000"
    },
    date: "2026-03-19",
    time: "08:00 PM",
    venue: "Main Auditorium",
    teamSize: { min: 1, max: 4 },
    contactPerson: "Isha Kapoor",
    email: "fashion@prerana.com"
  },

  // Combo Cultural Event
  {
    id: "cult-combo-1",
    code: "CULTCOMBO01",
    title: "Cultural Festival Pass",
    shortDescription: "Experience all cultural events at special price",
    category: "Cultural",
    slug: "cultural-festival-pass",
    registrationFee: "1000",
    active: true,
    isCombo: true,
    description: "Participate in all cultural events - Dance Face-Off, Battle of the Bands, and Fashion Show.",
    includedEvents: ["Dance Face-Off", "Battle of the Bands", "Fashion Show"],
    date: "2026-03-17",
    venue: "Main Auditorium",
    contactPerson: "Cultural Coordinator",
    email: "cultural@prerana.com"
  },

  // Wellness Events
  {
    id: "well-1",
    code: "WELL001",
    title: "Yoga & Meditation",
    shortDescription: "Find inner peace through guided yoga and meditation sessions",
    category: "Wellness",
    slug: "yoga-meditation",
    registrationFee: 0,
    active: true,
    description: "Participate in guided yoga and meditation sessions led by certified instructors. Perfect for beginners and experienced practitioners.",
    rules: [
      "Wear comfortable clothing",
      "Bring your own mat",
      "Sessions 30-45 minutes",
      "No prior experience required"
    ],
    judges: ["Yoga Instructor", "Wellness Coach"],
    date: "2026-03-20",
    time: "06:30 AM",
    venue: "Wellness Center",
    teamSize: { min: 1 },
    contactPerson: "Ananya Singh",
    email: "wellness@prerana.com"
  },
  {
    id: "well-2",
    code: "WELL002",
    title: "Sports Day",
    shortDescription: "Participate in various sports and outdoor activities",
    category: "Wellness",
    slug: "sports-day",
    registrationFee: "100",
    active: true,
    description: "A day filled with various sports events including volleyball, badminton, cricket, and running races.",
    rules: [
      "Team sports: 4-6 members",
      "Individual sports: open to all",
      "Medical clearance may be required",
      "Fair play is mandatory"
    ],
    judges: ["Sports Coordinator", "Physical Trainer"],
    prizes: {
      first: "₹10,000",
      second: "₹6,000",
      third: "₹4,000"
    },
    date: "2026-03-21",
    time: "09:00 AM",
    venue: "Sports Ground",
    teamSize: { min: 1, max: 6 },
    contactPerson: "Arjun Patel",
    email: "sports@prerana.com"
  },
  {
    id: "well-3",
    code: "WELL003",
    title: "Mental Health Awareness",
    shortDescription: "Workshops and talks on mental health and well-being",
    category: "Wellness",
    slug: "mental-health-awareness",
    registrationFee: 0,
    active: true,
    description: "Interactive sessions with mental health professionals discussing stress management, anxiety, and emotional wellness.",
    rules: [
      "Open to all students",
      "Safe space maintained",
      "Confidentiality ensured",
      "Voluntary participation"
    ],
    judges: ["Psychologist", "Counselor"],
    date: "2026-03-22",
    time: "02:00 PM",
    venue: "Auditorium B",
    teamSize: { min: 1 },
    contactPerson: "Dr. Deepak Kumar",
    email: "mentalhealth@prerana.com"
  },

  // Combo Wellness Event
  {
    id: "well-combo-1",
    code: "WELLCOMBO01",
    title: "Wellness Package",
    shortDescription: "Complete wellness experience with all events",
    category: "Wellness",
    slug: "wellness-package",
    registrationFee: "100",
    active: true,
    isCombo: true,
    description: "Participate in all wellness events for a holistic health and wellness experience.",
    includedEvents: ["Yoga & Meditation", "Sports Day", "Mental Health Awareness"],
    date: "2026-03-20",
    venue: "Wellness Center",
    contactPerson: "Wellness Coordinator",
    email: "wellness@prerana.com"
  }
];
