/** Site copy derived from https://apcroofing.com/ — lightly edited for clarity; meaning preserved. */

export const site = {
  name: "APC Roofing",
  tagline: "Florida’s choice for roofing, solar & gutters",
  /** Footer hero line under logo (matches APC marketing). */
  footerTagline: "Always Pleased Customers",
  license: "CCC1337030",
  solarPartner: "Solar Life CVC57293",
  estimateUrl: "https://apcroofing.com/free-online-estimate/",
  hiringUrl: "https://apcroofing.com/about-us/",
  mainPhoneDisplay: "(407) 271-0209",
  mainPhoneTel: "+14072710209",
  secondaryPhoneDisplay: "(407) 270-1129",
  secondaryPhoneTel: "+14072701129",
  tollFreeDisplay: "(800) 912-5005",
  tollFreeTel: "+18009125005",
  reviewCount: "507+",
  reviewSummary: "Excellent — based on 507+ reviews",
};

/** Footer column links — point to apcroofing.com sections. */
export const footerResources = [
  { label: "About Us", href: "https://apcroofing.com/about-us/" },
  { label: "Blog", href: "https://apcroofing.com/blog/" },
  { label: "Estimate", href: "https://apcroofing.com/free-online-estimate/" },
  { label: "Financing", href: "https://apcroofing.com/free-online-estimate/" },
  { label: "Gallery", href: "https://apcroofing.com/our-gallery/" },
] as const;

export const footerServiceLinks = [
  { label: "Shingle Roofs", href: "https://apcroofing.com/shingle-roof-replacement/" },
  { label: "Metal Roofs", href: "https://apcroofing.com/metal-roof-replacement/" },
  { label: "Tile Roofs", href: "https://apcroofing.com/tile-roof-replacement/" },
  { label: "Flat Roofs", href: "https://apcroofing.com/flat-roof-replacement/" },
  { label: "Rain Gutters", href: "https://apcroofing.com/gutter-installation/" },
  { label: "Solar Panels", href: "https://apcroofing.com/solar-installation/" },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#roofing-types", label: "Roofing Types" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#videos", label: "Videos" },
  { href: "#news", label: "News" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export const locations = [
  {
    title: "Clermont",
    lines: ["150 W Hwy 50", "Clermont, FL 34711"],
    phoneDisplay: "(352) 306-2402",
    phoneTel: "+13523062402",
    mapQuery: "150 W Hwy 50, Clermont, FL 34711",
  },
  {
    title: "Denver",
    lines: ["5500 East Yale Avenue, Suite 105", "Denver, CO 80222"],
    phoneDisplay: "(720) 410-6708",
    phoneTel: "+17204106708",
    mapQuery: "5500 East Yale Avenue, Suite 105, Denver, CO 80222",
  },
  {
    title: "Holly Hill",
    lines: ["1524 Ridgewood Ave", "Holly Hill, FL 32117"],
    phoneDisplay: "(386) 388-3039",
    phoneTel: "+13863883039",
    mapQuery: "1524 Ridgewood Ave, Holly Hill, FL 32117",
  },
  {
    title: "Punta Gorda",
    lines: ["1700 Steadley Ave", "Punta Gorda, FL 33950"],
    phoneDisplay: "(941) 231-0007",
    phoneTel: "+19412310007",
    mapQuery: "1700 Steadley Ave, Punta Gorda, FL 33950",
  },
];

export const hero = {
  h1: "Clermont roofing experts for Central Florida & the Midwest",
  sub:
    "From everyday roof repairs to storm damage restoration, APC Roofing helps homeowners protect what matters most—with dependable service across Central Florida and growing support in Midwest communities.",
  badge: "Get a free roof inspection",
  trustLine: "Honest guidance · Reliable crews · Service you can count on",
};

export const urgency = {
  h2: "Don’t wait until a small roofing problem becomes a major expense",
  body: [
    "Storm damage isn’t always obvious—and waiting too long can lead to costly repairs, interior damage, and unnecessary stress. Many homeowners aren’t sure who to trust, what steps to take, or whether their roof is still protecting their home.",
    "At APC Roofing, we help you get clear answers fast. Whether you’re dealing with recent storm activity in Florida or new damage in Midwest communities, our team provides honest inspections and straightforward guidance—so you can decide before the problem gets worse.",
    "Ignoring roof damage can lead to leaks, structural issues, and higher out-of-pocket costs.",
  ],
};

export const processPillars = [
  {
    title: "Honest, no-pressure inspections",
    text: "We give you clear answers about your roof—no gimmicks, no unnecessary upsells.",
  },
  {
    title: "High-quality workmanship",
    text: "Our experienced crews use proven materials and precise installation methods so your roof is built to last.",
  },
  {
    title: "Storm damage expertise",
    text: "From Florida hurricanes to Midwest hailstorms, we know what to look for and how to respond quickly.",
  },
  {
    title: "Consistent service in every market",
    text: "Whether you’re in Central Florida or a newly impacted Midwest community, you get the same reliable process and communication.",
  },
  {
    title: "Fast, reliable turnaround",
    text: "We move quickly without cutting corners—so your home is protected as soon as possible.",
  },
];

export const about = {
  h2: "A roofing team you can rely on—from first inspection to final nail",
  paragraphs: [
    "At APC Roofing, we believe homeowners deserve honest answers and dependable service—especially after a storm. Based in Clermont, Florida, we’ve built our reputation across Central Florida by showing up on time, communicating clearly, and doing the job right the first time.",
    "As we expand into Midwest communities impacted by hail and severe weather, we bring that same commitment with us. Our team is fully licensed, insured, and experienced in handling a wide range of roofing needs, from minor repairs to full replacements.",
    "We’re here to guide you through the process, answer your questions, and help you feel confident every step of the way.",
  ],
  bullets: "Licensed & insured · Experienced crews · Residential & commercial roofing experts",
};

export const serviceAreas = {
  h2: "Proudly serving Central Florida & expanding across the Midwest",
  intro:
    "APC Roofing is based in Clermont, Florida and continues to serve homeowners across Central Florida while growing into key Midwest communities impacted by severe weather.",
  florida: "Clermont · Orlando · Tampa · Daytona Beach · Palm Coast · Central Florida",
  midwest:
    "Kansas City, MO · Oklahoma City, OK · Kansas · Texas · Surrounding storm-affected areas",
  note: "More locations coming soon as we continue to expand and serve homeowners where we’re needed most.",
};

export const processSteps = {
  h2: "A simple, stress-free roofing process",
  intro:
    "We make it easy to get the answers you need and the work done right—without confusion or delays.",
  steps: [
    {
      n: 1,
      title: "Schedule your free inspection",
      text: "We assess your roof for damage, wear, and potential issues—so you understand its condition.",
      image: "/images/process-consult.jpg",
      imageAlt:
        "A roofing professional discusses paperwork and options with a homeowner inside her home, likely finalizing a roofing contract.",
    },
    {
      n: 2,
      title: "Get honest recommendations",
      text: "We walk you through your options in plain language, so you can choose what fits your home and budget.",
      image: "/images/gallery-2.jpg",
      imageAlt: "Roof replacement project photography in Clermont, Florida",
    },
    {
      n: 3,
      title: "We handle the rest",
      text: "Our team completes your roofing project efficiently and professionally, keeping you informed throughout.",
      image: "/images/gallery-6.jpg",
      imageAlt: "Roofing work in progress on a residential home",
    },
  ],
  cta: "Get a free roof inspection today",
};

export const trustBlock = {
  h2: "Roofing you can trust—wherever you are",
  paragraphs: [
    "APC Roofing is a Clermont-based roofing contractor proudly serving homeowners across Central Florida and expanding into Midwest communities affected by severe weather. We specialize in residential and commercial roofing, including repairs, replacements, and storm damage solutions.",
    "Our mission is simple: provide honest guidance, high-quality workmanship, and a reliable experience from start to finish. Whether you’re dealing with everyday roof wear or recent storm damage, our team is here to help you protect your home with confidence.",
  ],
};

export const services = [
  {
    title: "Shingle roofs",
    slug: "shingle-roof-replacement",
    description:
      "As a premier Central Florida roofing company, we specialize in asphalt shingle roof installation and repair. From durable architectural shingles to cost-effective 3-tab options, we provide stylish, long-lasting solutions. Our expert team installs for maximum performance in Florida’s challenging climate.",
    image: "/images/service-shingle.jpg",
  },
  {
    title: "Metal roofs",
    slug: "metal-roof-replacement",
    description:
      "Our metal roofing services give Orlando and Central Florida homeowners a modern, energy-efficient, durable solution. We install standing seam, corrugated panels, and metal shingles. Metal roofs offer strong hurricane protection and can last 50+ years with minimal maintenance.",
    image: "/images/gallery-4.jpg",
  },
  {
    title: "Tile roofs",
    slug: "tile-roof-replacement",
    description:
      "We provide expert installation, repair, and replacement for clay and concrete tile roofs. Tile is ideal for Central Florida’s climate—durability, energy efficiency, and timeless style. We use proper installation techniques for decades of reliable performance.",
    image: "/images/gallery-5.jpg",
  },
  {
    title: "Flat roofs",
    slug: "flat-roof-replacement",
    description:
      "Specialized installation, repair, and replacement for residential and commercial properties throughout Central Florida. We work with TPO, EPDM, modified bitumen, and built-up roofing—whether you need a full replacement or emergency leak repair.",
    image: "/images/section-dji.jpg",
  },
  {
    title: "Rain gutters",
    slug: "gutter-installation",
    description:
      "Protect your home with professional gutter installation and repair. We design seamless gutters for Florida’s heavy rainfall—shielding your foundation, landscaping, and exterior. Built for tropical storms and reliable drainage year-round.",
    image: "/images/gallery-7.jpg",
  },
  {
    title: "Solar panels",
    slug: "solar-installation",
    description:
      "Harness Florida’s sunshine with professional solar panel installation. As roofers with solar expertise, we ensure your roof is properly prepared and structurally sound before solar goes on. Solar installation is provided in partnership with Solar Life (CVC57293).",
    image: "/images/gallery-3.jpg",
  },
];

export const roofingTypes = [
  {
    name: "Asphalt shingles",
    blurb: "Architectural and 3-tab systems tuned for Florida wind and rain.",
  },
  { name: "Metal", blurb: "Standing seam and panels for longevity and storm resilience." },
  { name: "Tile", blurb: "Clay and concrete tile with classic curb appeal." },
  { name: "Flat / low-slope", blurb: "TPO, EPDM, modified bitumen, and built-up systems." },
  { name: "Storm restoration", blurb: "Documentation, inspection, and repair after severe weather." },
  { name: "Gutters", blurb: "Seamless gutters sized for heavy rainfall." },
];

export const googleReviews = [
  {
    name: "Adrián Contreras Lizárraga",
    text: "Solid company, easy to work with. Ivan D. was very transparent and supportive throughout the entire installation. They completed the job quickly and without any issues.",
    rating: 5,
  },
  {
    name: "Nelson Escudero",
    text: "From the beginning, Ivan kept us fully informed, very punctual during his appointments. The whole project was professionally conducted; the safety of his personnel and the work areas were always his first priority. His working crew was very efficient and very pleasant. If I had to do this project again, I would definitely hire Mr. Ivan again.",
    rating: 5,
  },
  {
    name: "Dawn Rotti",
    text: "Very reliable with great workmanship. Thank you Ivan for your knowledge. It was good to work with you.",
    rating: 5,
  },
  {
    name: "Darian Warren",
    text: "From first contact to final payment, APC Roofing did an outstanding job. Over the years I've had several roofs replaced so this wasn't my first rodeo. By far this was the BEST roofing company I've EVER dealt with. The process was amazingly painless. Great price and value for a well done roof.",
    rating: 5,
  },
  {
    name: "Gail Benz",
    text: "We’re very happy with our new roof. The crew did a great job and did an outstanding job cleaning up after the installation. Many thanks to David Velez—he went over the paperwork with us and answered any questions we had. We highly recommend APC Roofing.",
    rating: 5,
  },
  {
    name: "Dawn Boyd",
    text: "Great company! The customer service was excellent and the roof looks amazing!",
    rating: 5,
  },
];

export const galleryItems = [
  { src: "/images/gallery-1.jpg", caption: "Roof replacement, Clermont, Florida" },
  { src: "/images/gallery-2.jpg", caption: "Roof replacement, Clermont, Florida" },
  { src: "/images/gallery-3.jpg", caption: "Residential roof replacement, Clermont, Florida" },
  { src: "/images/gallery-4.jpg", caption: "Roof replacement project" },
  { src: "/images/gallery-5.jpg", caption: "Tile roof replacement, Clermont, Florida" },
  { src: "/images/gallery-6.jpg", caption: "Metal roof replacement, Clermont, Florida" },
  { src: "/images/gallery-7.jpg", caption: "Commercial roof replacement, Clermont, FL" },
];

export const beforeAfter = {
  beforeSrc: "/images/gallery-3.jpg",
  afterSrc: "/images/gallery-1.jpg",
  beforeLabel: "Before",
  afterLabel: "After",
  caption: "Residential roof replacement — Clermont, Florida (project photography from APC Roofing)",
};
