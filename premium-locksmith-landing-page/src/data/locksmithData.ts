export interface Testimonial {
  id: string;
  name: string;
  location: string;
  category: 'residential' | 'commercial';
  rating: number;
  date: string;
  title: string;
  comment: string;
  service: string;
  verified: boolean;
}

export interface WirralArea {
  postcode: string;
  name: string;
  dispatchTime: string;
  activeTechs: number;
  zones: string[];
}

export const BUSINESS_INFO = {
  name: "North West Emergency Locksmiths",
  brandName: "Locksmiths Wirral",
  tagline: "Wirral's Certified Security & Master Locksmith Specialists",
  phoneDisplay: "0151 678 0124",
  phoneTel: "tel:01516780124",
  mobileDisplay: "07923 555661",
  mobileTel: "tel:07923555661",
  email: "mark@nwlocks.co.uk",
  address: "20 Mount Pleasant Road, Wallasey, Wirral, CH45 5EW",
  hours: "24 Hours / 7 Days a Week / 365 Days a Year",
  emergencyResponseTime: "15–30 Minutes",
  googleRating: 4.9,
  reviewsCount: 380,
  yearsInBusiness: 14,
  insurances: "£5,000,000 Public Liability",
  securityStandards: ["BS 3621", "TS007 3-Star Diamond", "PAS 24", "EN 1303", "SS312 Sold Secure"],
};

export const WIRRAL_POSTCODES: WirralArea[] = [
  { postcode: "CH41", name: "Birkenhead & Birkenhead Docks", dispatchTime: "15-20 mins", activeTechs: 2, zones: ["Town Centre", "Claughton", "Woodside"] },
  { postcode: "CH42", name: "Birkenhead South & Tranmere", dispatchTime: "15-20 mins", activeTechs: 1, zones: ["Tranmere", "Rock Ferry", "Higher Tranmere"] },
  { postcode: "CH43", name: "Oxton, Claughton & Noctorum", dispatchTime: "15-25 mins", activeTechs: 2, zones: ["Oxton Village", "Claughton", "Noctorum"] },
  { postcode: "CH44", name: "Wallasey & Liscard", dispatchTime: "10-15 mins", activeTechs: 2, zones: ["Liscard", "Egremont", "Seacombe"] },
  { postcode: "CH45", name: "Wallasey, New Brighton & HQ", dispatchTime: "5-15 mins", activeTechs: 3, zones: ["Mount Pleasant", "New Brighton", "Wallasey Village"] },
  { postcode: "CH46", name: "Moreton & Leasowe", dispatchTime: "15-20 mins", activeTechs: 2, zones: ["Moreton", "Leasowe", "Pasture Road"] },
  { postcode: "CH47", name: "Hoylake & Meols", dispatchTime: "20-25 mins", activeTechs: 1, zones: ["Hoylake Beach", "Meols", "Kings Gap"] },
  { postcode: "CH48", name: "West Kirby & Caldy", dispatchTime: "20-25 mins", activeTechs: 2, zones: ["West Kirby Marina", "Caldy", "Frankby"] },
  { postcode: "CH49", name: "Upton & Greasby", dispatchTime: "15-20 mins", activeTechs: 1, zones: ["Upton", "Greasby", "Arrowe Park"] },
  { postcode: "CH60", name: "Heswall & Gayton", dispatchTime: "20-30 mins", activeTechs: 2, zones: ["Heswall Lower", "Gayton", "Barnston"] },
  { postcode: "CH61", name: "Pensby & Thingwall", dispatchTime: "20-25 mins", activeTechs: 1, zones: ["Pensby", "Thingwall"] },
  { postcode: "CH62", name: "Bromborough & Port Sunlight", dispatchTime: "20-30 mins", activeTechs: 2, zones: ["Bromborough Pool", "Port Sunlight", "Eastham"] },
  { postcode: "CH63", name: "Bebington & Spital", dispatchTime: "20-25 mins", activeTechs: 1, zones: ["Higher Bebington", "Spital", "Poulton"] },
  { postcode: "CH64", name: "Neston, Parkgate & Willaston", dispatchTime: "25-35 mins", activeTechs: 1, zones: ["Neston Cross", "Parkgate", "Willaston"] },
  { postcode: "CH65", name: "Ellesmere Port", dispatchTime: "25-35 mins", activeTechs: 2, zones: ["Cheshire Oaks", "Overpool", "Great Sutton"] },
  { postcode: "CH1", name: "Chester & Surrounds", dispatchTime: "30-40 mins", activeTechs: 1, zones: ["Chester Centre", "Blacon", "Boughton"] },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Alistair Vance",
    location: "Caldy, Wirral",
    category: "residential",
    rating: 5,
    date: "February 2025",
    title: "Zero sales pressure, caught 3 vulnerable locks",
    comment: "Booked the Free Security Check after moving into our new home in Caldy. Mark arrived punctually, tested all 8 external doors and patio sliders. He demonstrated how our existing front euro cylinder could be snapped in seconds. Upgraded to Ultion 3-star diamond locks on the spot. Professional, courteous, and no pushy tactics whatsoever.",
    service: "Free Security Check & Ultion 3* Upgrade",
    verified: true
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    location: "Commercial Street, Birkenhead",
    category: "commercial",
    rating: 5,
    date: "January 2025",
    title: "Essential for our insurance compliance",
    comment: "As manager of a commercial boutique and stock warehouse, our insurer updated terms demanding BS 3621 and fire exit certified panic hardware. Locksmiths Wirral provided a complete free commercial security survey, documented every entry point, and installed a keyed-alike master suite. Excellent service from start to finish.",
    service: "Commercial Audit & Master Key Suite",
    verified: true
  },
  {
    id: "3",
    name: "Marcus & Elena Croft",
    location: "Heswall, Wirral",
    category: "residential",
    rating: 5,
    date: "March 2025",
    title: "Saved us thousands before our holiday",
    comment: "We booked the free security assessment ahead of a three-week trip abroad. Mark found that our rear bifold door gearbox was slipping and wouldn't have withstood any forced entry. Fixed the alignment and gave us complete peace of mind. Genuinely 100% free with no call-out fee.",
    service: "Home Security Check & Multi-Point Realignment",
    verified: true
  },
  {
    id: "4",
    name: "David Pennington",
    location: "Port Sunlight Industrial, Bromborough",
    category: "commercial",
    rating: 5,
    date: "January 2025",
    title: "Rapid response & full site security certification",
    comment: "Our logistics depot required an updated fire door compliance and access perimeter audit. The team delivered a thorough 40-minute site audit at zero charge, highlighting two fire egress risks that could have shuttered our operations during safety inspection. True experts.",
    service: "Commercial Fire Egress & Perimeter Audit",
    verified: true
  },
  {
    id: "5",
    name: "Helen Fairclough",
    location: "Wallasey Village",
    category: "residential",
    rating: 5,
    date: "February 2025",
    title: "Friendly local engineers you can trust",
    comment: "I live alone and wanted to ensure my patio doors and front entrance were secure. The locksmith was CRB/DBS checked and wore official identification. He checked all window latches and gave me clear, honest advice without pushing me to buy anything. 10/10 service.",
    service: "Residential Property Audit",
    verified: true
  },
  {
    id: "6",
    name: "Oliver Hughes",
    location: "West Kirby",
    category: "residential",
    rating: 5,
    date: "March 2025",
    title: "Every homeowner on Wirral should do this",
    comment: "I honestly didn't think lock snapping was that big of a deal until he showed me how quick thieves do it with basic grips. Replacing our locks with British Standard diamond cylinders was the best decision we made. Fast, clean, top workmanship.",
    service: "Diamond Lock Installation & Audit",
    verified: true
  }
];

export const AUDIT_CHECKLIST_CATEGORIES = [
  {
    id: "cylinders",
    title: "Anti-Snap Cylinder Integrity",
    subtitle: "Protect against the UK's #1 burglary method",
    points: [
      "Depth projection measurement (cylinder must not protrude >3mm)",
      "TS007 3-Star Diamond Sold Secure rating verification",
      "Sacrificial snap line inspection and internal lockdown cam test",
      "Key control & duplicate prevention registration review"
    ],
    vulnerabilityWarning: "Standard euro cylinders can be snapped in under 9 seconds using standard mole grips, granting quiet, instant access."
  },
  {
    id: "upvc",
    title: "uPVC & Composite Multi-Point Gearbox",
    subtitle: "Ensure full frame engagement and deadbolt throw",
    points: [
      "Deadbolt and hook bolt full 20mm throw penetration into frame",
      "Sash-to-frame alignment (preventing pry-bar leverage points)",
      "Gearbox torque stress and handle spring-back mechanism health",
      "Top and bottom keep plate weather seal compression"
    ],
    vulnerabilityWarning: "Misaligned multi-point mechanisms leave patio and front doors vulnerable to simple crowbar leverage without breaking locks."
  },
  {
    id: "windows",
    title: "Window Latches & Sash Security",
    subtitle: "Ground floor and accessible flat roof vulnerability",
    points: [
      "Key-locking handles on all accessible ground floor windows",
      "Friction stay hinge integrity and egress emergency release",
      "uPVC sash jammer reinforcement for vulnerable rear windows",
      "Laminated vs toughened glass perimeter assessment"
    ],
    vulnerabilityWarning: "Unsecured ground floor windows are the secondary point of forced entry for opportunist burglars across Wirral."
  },
  {
    id: "insurance",
    title: "British Standard BS 3621 Compliance",
    subtitle: "Avoid catastrophic insurance claim invalidations",
    points: [
      "Verification of the engraved British Standard Kitemark on faceplates",
      "5-lever mortice deadlock minimum throw validation for timber doors",
      "Certificate of compliance documentation for insurer presentation",
      "Dual-keyed internal safety thumbturn audit"
    ],
    vulnerabilityWarning: "Over 68% of Wirral homeowners don't realize their home insurance policy is voided if burglarized through non-BS3621 compliant locks."
  },
  {
    id: "commercial",
    title: "Commercial Access & Fire Egress",
    subtitle: "Protect assets while remaining compliant with UK Fire Safety",
    points: [
      "BS EN 1125 panic push bars and BS EN 179 emergency exit devices",
      "Keyed-alike and master key hierarchy audit for staff access",
      "Digital keypad, biometric, and maglock holding force inspection",
      "Roller shutter bullet locks and high-tensile padlock hasps"
    ],
    vulnerabilityWarning: "Failure to comply with commercial fire escape regulations exposes business directors to severe fines and insurance denial."
  }
];

export const FAQS = [
  {
    question: "Is the Free Security Check truly 100% free with no obligation?",
    answer: "Yes, completely 100% free. We charge zero call-out fee and zero survey fee. A certified locksmith engineer visits your residential or commercial property in Wirral, inspects every door, lock, window, and perimeter vulnerability, and provides a clear written security report. If your property is already safe, we congratulate you. If improvements are recommended, you receive an itemised, fixed-price quote with absolutely zero pressure to proceed."
  },
  {
    question: "Why does Locksmiths Wirral offer this for free?",
    answer: "We are a local Wallasey-based family business that has served the Wirral and Merseyside community for over 14 years. Most homeowners and business owners are unaware that standard euro cylinders can be snapped in under 9 seconds, or that their insurance policy mandates BS 3621 locks. By helping our community discover and eliminate weak points, we build long-term trust. Many customers choose us for future upgrades or recommend us to neighbours, but there is never any obligation."
  },
  {
    question: "What is 'Lock Snapping' and why is it such an issue in Wirral?",
    answer: "Lock snapping is a technique where criminals snap the protruding cylinder of a standard uPVC or composite door lock using basic household grips, gaining access to the internal mechanism in less than 9 seconds without making loud noise. We inspect whether your locks feature anti-snap sacrificial cuts, hardened steel cores, and TS007 3-star diamond certifications that prevent this attack."
  },
  {
    question: "Does my home or business insurance require British Standard BS 3621?",
    answer: "In almost all UK home and commercial property insurance contracts, policyholders agree that final exit doors are secured by a 5-lever mortice deadlock conforming to BS 3621 or a multi-point locking system with cylinder protection. If an intruder enters through a non-compliant lock, insurers often refuse the claim completely. Our free check verifies whether your locks meet your policy stipulations."
  },
  {
    question: "What commercial properties do you inspect?",
    answer: "We audit retail shops, offices, industrial warehouses, schools, healthcare clinics, hospitality venues, and managed apartment blocks across Wirral, Chester, and Ellesmere Port. Our commercial audit covers fire exit panic hardware (BS EN 1125), roller shutters, master key suites, digital keyless entry, and staff access control."
  },
  {
    question: "How long does the Free Security Check take?",
    answer: "A typical residential inspection takes approximately 20 to 30 minutes. For larger commercial facilities or warehouses, it usually takes 30 to 45 minutes depending on the number of exterior doors, fire exits, and internal restricted zones."
  },
  {
    question: "What areas of Wirral do you cover?",
    answer: "We cover the entire Wirral peninsula and surrounding Merseyside: Wallasey, Birkenhead, Heswall, West Kirby, Caldy, Hoylake, Bebington, Bromborough, Neston, Ellesmere Port, Prenton, Upton, Greasby, Moreton, Meols, and Chester. We operate mobile rapid-response units across the peninsula 24 hours a day."
  }
];
