/** APC Roofing–style FAQ for the on-site assistant. Answers are informational; verify details on official estimates. */

export type ChatQA = { q: string; a: string };

export const CHATBOT_QA: ChatQA[] = [
  { q: "What is APC Roofing?", a: "APC Roofing is a Clermont-based roofing contractor serving Central Florida and expanding into Midwest communities. We handle repairs, replacements, storm damage, gutters, and solar coordination." },
  { q: "Where is APC Roofing located?", a: "Our headquarters are in Clermont, Florida. We also list offices in Denver (Colorado), Holly Hill, and Punta Gorda—see the Contact section for full addresses and phone numbers." },
  { q: "What is the Clermont office address?", a: "150 W Hwy 50, Clermont, FL 34711. Call (407) 271-0209 for the main Clermont line." },
  { q: "Do you serve Orlando?", a: "Yes. We serve Orlando and the broader Central Florida area, including many surrounding cities listed on our service area map." },
  { q: "Do you serve Tampa?", a: "Yes. Tampa Bay is within our Florida service footprint alongside other major markets we highlight on the site." },
  { q: "Do you work in Denver?", a: "Yes. We list a Denver office at 5500 East Yale Avenue, Suite 105, Denver, CO 80222—phone (720) 358-9911." },
  { q: "Do you serve the Midwest?", a: "We’re expanding into Midwest communities affected by hail and severe weather, including markets like Kansas City and Oklahoma City, plus surrounding storm-affected areas." },
  { q: "What phone number should I call?", a: "For Clermont / main Florida inquiries, (407) 271-0209 is prominent on the site. Additional numbers are listed per location in the Contact section." },
  { q: "Is there a toll-free number?", a: "The original site references (800) 912-5005 in places like the gallery. Confirm the best number for your area on your estimate paperwork or our Contact section." },
  { q: "Are you licensed?", a: "We advertise Florida license #CCC1337030. Always verify license status with your state or local authority for your specific project." },
  { q: "Are you insured?", a: "We state that our team is licensed and insured. Ask your estimator for a certificate of insurance before work begins if you need it for your records." },
  { q: "Are you GAF certified?", a: "The site describes APC Roofing LLC as a GAF certified roofing contractor. Your estimator can explain what that means for material options and warranties on your job." },
  { q: "What services do you offer?", a: "Residential and commercial roofing, repairs and replacements, storm-related work, seamless gutters, and solar installation coordinated with roofing preparation—in partnership with Solar Life (CVC57293)." },
  { q: "Do you install shingle roofs?", a: "Yes. We install and repair asphalt shingles, including architectural and 3-tab options, with installation tuned for Florida’s wind and rain." },
  { q: "What are architectural shingles?", a: "Architectural (laminated) shingles are thicker, dimensional shingles that often last longer and perform better in wind than basic 3-tab—popular on Florida homes." },
  { q: "Do you install metal roofing?", a: "Yes. We work with standing seam, corrugated panels, and metal shingles. Metal can offer strong storm performance and long service life." },
  { q: "How long does a metal roof last?", a: "Metal roofs are often quoted in the 40–70+ year range depending on product and maintenance; exact lifespan depends on your environment and installation quality." },
  { q: "Do you install tile roofs?", a: "Yes. We install and repair clay and concrete tile, common in Florida for durability and curb appeal." },
  { q: "Are tile roofs good for Florida?", a: "Tile handles heat well and can last decades with proper installation and maintenance. Weight and structure must be evaluated for your home." },
  { q: "Do you work on flat roofs?", a: "Yes. We service TPO, EPDM, modified bitumen, and built-up systems for residential and commercial flat or low-slope roofs." },
  { q: "What is TPO roofing?", a: "TPO is a single-ply white thermoplastic membrane often used on commercial flat roofs for heat reflectivity and welded seams. We can assess if it fits your property." },
  { q: "Do you install gutters?", a: "Yes. We install and repair seamless gutters designed for Florida rainfall and storm conditions." },
  { q: "Why are seamless gutters recommended?", a: "Seamless sections reduce leak points along the run compared to many small joined pieces, improving reliability when installed correctly." },
  { q: "Do you install solar panels?", a: "Yes. Solar is offered with roofing expertise so the roof is evaluated and prepared correctly. Solar installation is in partnership with Solar Life (CVC57293)." },
  { q: "Should I replace my roof before solar?", a: "Generally yes—solar lasts many years, so it’s wise to address an aging roof first. We assess whether repairs or replacement should happen before panel installation." },
  { q: "Do you offer free roof inspections?", a: "Yes. The site promotes free roof inspections and a straightforward process to understand your roof’s condition." },
  { q: "How do I schedule an inspection?", a: "Use the Get a Free Quote / estimate link, call your local APC number, or submit the contact form on this site." },
  { q: "How long does an inspection take?", a: "Typical residential inspections often range from about 30–90 minutes depending on roof size, pitch, access, and whether interior checks are needed." },
  { q: "What happens after the inspection?", a: "We review findings in plain language, outline options, and—if you move forward—coordinate scheduling and project communication through completion." },
  { q: "Do you give written estimates?", a: "Yes. You should receive clear scope and pricing details for approved work—ask your representative for a written estimate before authorizing repairs or replacement." },
  { q: "Is there an online estimate option?", a: "Yes. The site links to a free online estimate flow at apcroofing.com/free-online-estimate/." },
  { q: "Do you handle storm damage?", a: "Yes. We help homeowners after hurricanes, hail, and severe weather with inspections and restoration-oriented solutions." },
  { q: "What if I’m not sure my roof is damaged?", a: "Hidden damage is common after storms. A professional inspection can document issues early—before leaks or interior damage worsen." },
  { q: "Will you help with insurance paperwork?", a: "Many roofing projects involve documentation for carriers. Ask your estimator what they provide (photos, reports) and confirm requirements with your insurance agent." },
  { q: "Do you guarantee insurance approval?", a: "No ethical contractor can guarantee claim approval—that’s decided by your carrier. We can help document damage consistent with what we observe." },
  { q: "What is a supplement?", a: "A supplement is an insurance request for additional scope or cost when more damage is found than the initial estimate covered. Your rep can explain if it applies." },
  { q: "How fast can you start a job?", a: "Timing depends on crew availability, material orders, weather, and permit needs. Your estimator should provide a realistic window after you approve the scope." },
  { q: "How long does a roof replacement take?", a: "Many residential re-roofs take a few days on-site, but complex roofs, repairs, or weather delays can extend that. Your contract should outline expectations." },
  { q: "Do you clean up after the job?", a: "Professional crews should magnet-sweep for nails and remove debris. Ask your project manager about the cleanup checklist used on your job." },
  { q: "What warranties are available?", a: "Warranty coverage depends on materials and manufacturer programs (e.g., GAF systems). Ask for written warranty details for both materials and workmanship." },
  { q: "What maintenance does a shingle roof need?", a: "Keep gutters clear, trim overhanging branches, and schedule periodic inspections—especially after major storms." },
  { q: "How do I spot a roof leak early?", a: "Look for ceiling stains, musty odors, missing or lifted shingles, granule loss, and daylight in the attic. Call us if you notice any of these signs." },
  { q: "Can you fix a leak without replacing the whole roof?", a: "Often yes—if damage is localized. After inspection, we’ll recommend repair vs. replacement based on age, condition, and cost effectiveness." },
  { q: "What causes roof leaks in Florida?", a: "Common causes include wind-driven rain at flashing, worn sealants, punctures, aging underlayment, and storm debris. Inspection pinpoints the source." },
  { q: "Do you do commercial roofing?", a: "Yes. We state residential and commercial expertise, including flat systems and larger buildings depending on scope and location." },
  { q: "Do you offer financing?", a: "Financing availability can change by promotion and partner. Ask your estimator about current options and terms." },
  { q: "What payment methods do you accept?", a: "Confirm with your project manager—typical contractors accept checks, cards, and sometimes financing partner plans." },
  { q: "Why choose APC over a storm chaser?", a: "We emphasize local reputation, clear communication, licensed/insured operations, and a documented process—avoid high-pressure tactics and verify credentials." },
  { q: "What is a storm chaser?", a: "A storm chaser is a contractor that follows severe weather to sell quick jobs—sometimes with inconsistent quality. Verify license, insurance, and local references." },
  { q: "Do you serve Daytona Beach?", a: "Yes. Daytona Beach is listed among our Florida markets and surrounding beach communities." },
  { q: "Do you serve Kissimmee?", a: "Yes. Kissimmee is included among Central Florida communities we reference for roofing services." },
  { q: "Do you serve Winter Garden?", a: "Yes. Winter Garden appears in our Orlando-area service listings." },
  { q: "Do you serve Lakeland or nearby?", a: "We highlight broad Central Florida coverage; call to confirm scheduling for your exact address." },
  { q: "Do you install skylights?", a: "Skylight work is often coordinated during re-roofs. Ask your estimator if you want new or replacement skylights included in scope." },
  { q: "Can you improve attic ventilation?", a: "Proper ventilation can extend roof life. Mention concerns during inspection so we can evaluate intake/exhaust balance." },
  { q: "What is ridge venting?", a: "Ridge venting allows hot air to exit at the roof peak, often paired with soffit intake. It’s a common upgrade during replacement when appropriate." },
  { q: "Do you remove old shingles?", a: "Most full replacements include tear-off of existing layers where code and condition require it—your estimate should specify tear-off and disposal." },
  { q: "How many layers of shingles can a roof have?", a: "Local code governs this; many jurisdictions limit overlays. We assess what’s code-compliant and what’s best for long-term performance." },
  { q: "What is underlayment?", a: "Underlayment is a water-resistant or waterproof layer between the deck and shingles—critical for secondary protection if shingles are compromised." },
  { q: "What are drip edge and flashing?", a: "Flashing seals penetrations and transitions; drip edge helps manage water at eaves and rakes. Both are essential details in a quality install." },
  { q: "Do you work year-round?", a: "Roofing continues across seasons in Florida, though rain and heat can affect scheduling. We plan around weather for safety and quality." },
  { q: "Is it safe to roof in summer heat?", a: "Crews take heat precautions. Scheduling may shift to cooler parts of the day when possible; safety is the priority." },
  { q: "What if it rains during my project?", a: "Experienced crews dry in the roof at the end of each day and monitor weather. Your PM should communicate any schedule impacts." },
  { q: "Do you provide drone or aerial photos?", a: "Many projects use aerial documentation—ask if photos will be included in your inspection or completion package." },
  { q: "Can you match my existing shingle color?", a: "We work to match manufacturer color lines; exact matches aren’t always possible on older roofs due to fading. Samples help set expectations." },
  { q: "What brands of shingles do you use?", a: "We work with established manufacturers; GAF certification is highlighted. Your estimate should list the proposed product line." },
  { q: "What is a wind rating?", a: "Shingles and systems are rated for wind resistance. In hurricane-prone regions, proper nailing pattern and products matter—your proposal should reflect local needs." },
  { q: "Do you handle emergency tarping?", a: "Availability varies by storm volume and location. Call after damage—if we can’t tarp immediately, we’ll advise next steps." },
  { q: "What should I do after hail?", a: "Document the date, photograph visible damage safely, and schedule a professional inspection—hail may bruise shingles without obvious leaks at first." },
  { q: "What is an ice dam?", a: "Ice dams are more common in cold climates than Central Florida, but Midwest projects may encounter them. Proper insulation and ventilation reduce risk." },
  { q: "Do you install Christmas lights?", a: "That’s not a core roofing service—ask locally for holiday installers. We focus on roofing, gutters, and solar coordination." },
  { q: "Can you walk my roof with me?", a: "Homeowners should avoid walking roofs due to fall risk and shingle damage. Let our trained inspectors handle roof access." },
  { q: "How do I prepare for roof replacement?", a: "Move vehicles away from the house, protect attic valuables from dust, secure wall decor, and clear patio items if asked by your project manager." },
  { q: "Will a new roof lower my energy bill?", a: "Improved ventilation, reflective options, and better sealing can help, but savings vary. Ask about energy-focused materials for your design." },
  { q: "What is cool roofing?", a: "Cool roofing reflects more sunlight and absorbs less heat—useful in sunny climates. Availability depends on product lines chosen for your job." },
  { q: "Do you replace fascia and soffit?", a: "If wood rot or storm damage is present, repairs or replacement may be included in scope. The inspection should identify soft or damaged trim." },
  { q: "What is ponding on a flat roof?", a: "Ponding is standing water that remains after rain. It can signal drainage or slope issues—important to address on flat systems." },
  { q: "Can you coat my flat roof?", a: "Coatings can sometimes extend service life depending on substrate and condition. Inspection determines whether coating, repair, or replacement fits." },
  { q: "Do you work on mobile homes?", a: "Scope depends on structure and local requirements. Share details when you request an estimate so we can confirm fit." },
  { q: "Do you offer roof cleaning?", a: "Pressure washing shingles can void warranties and cause damage. If algae or staining is a concern, ask about manufacturer-approved cleaning approaches." },
  { q: "What is algae staining?", a: "Dark streaks are often algae resistant to casual cleaning. Some shingles include algae-resistant granules—ask during product selection." },
  { q: "Can I stay home during replacement?", a: "Usually yes, but expect noise and some vibration. Pets and sensitive individuals may prefer to be away during tear-off and nailing." },
  { q: "Do you pull permits?", a: "Reputable contractors handle permits when required. Your estimate or contract should note permit responsibility and fees." },
  { q: "How do I verify a contractor’s license?", a: "Use your state’s contractor licensing board online lookup. In Florida, verify the license number and status before signing." },
  { q: "What is a lien release?", a: "A lien release helps confirm subcontractors and suppliers were paid—ask your contractor about lien waiver practices for your project." },
  { q: "Do you subcontract all work?", a: "Ask your estimator who performs installation and supervision. Many firms use trained crews under company oversight." },
  { q: "What COVID or health policies apply?", a: "Policies evolve. Ask the office if you have in-home access concerns; exterior inspections often limit interior contact." },
  { q: "Do you offer military or senior discounts?", a: "Promotions vary. Ask during estimating if any current discounts apply—never assume without written confirmation." },
  { q: "Can you email me documents?", a: "Yes—estimates, photos, and scope details can usually be emailed. Confirm the best email for your household." },
  { q: "What is a contingency contract?", a: "A contingency agreement may tie work to insurance outcomes. Read carefully and consult your adjuster or legal advisor if unsure." },
  { q: "Should I get multiple estimates?", a: "Multiple estimates help compare scope and price—ensure each quote reflects the same materials and work so comparisons are fair." },
  { q: "What is depreciation on a claim?", a: "Carriers may pay recoverable or non-recoverable depreciation depending on your policy. Your adjuster explains how funds are released." },
  { q: "Do you replace rotted roof decking?", a: "If decking is soft or delaminated, sections should be replaced to support fasteners and seal the system—often noted during tear-off." },
  { q: "What is sheathing?", a: "Sheathing is the wood or structural panels attached to rafters/trusses that shingles or membranes are fastened to—critical structural layer." },
  { q: "Can you add insulation during a re-roof?", a: "Attic insulation is often separate from the roof cover, but some assemblies allow upgrades. Ask during planning." },
  { q: "What is a cricket on a roof?", a: "A cricket is a small peaked structure that diverts water around chimneys or penetrations—important for leak prevention." },
  { q: "Why is flashing around chimneys important?", a: "Chimneys are leak-prone intersections. Proper step flashing, counter-flashing, and sealants keep water out." },
  { q: "What should I ask a roofing estimator?", a: "Ask about tear-off vs. overlay, underlayment, flashing details, timeline, crew supervision, cleanup, warranties, and written scope." },
  { q: "Do you provide references?", a: "Reputable teams can provide local references. Ask for recent jobs similar to your roof type and neighborhood." },
  { q: "What if I have more questions?", a: "Call your local APC office, submit the contact form, or use Get a Free Quote. For complex insurance questions, also speak with your agent." },
];

export const CHATBOT_DEFAULT_REPLY =
  "I don’t have a stored answer for that yet. Try one of the suggested questions, rephrase with keywords like “inspection,” “shingle,” “storm,” or “estimate,” or call us at (407) 271-0209.";

export function matchChatAnswer(input: string): string {
  const raw = input.trim().toLowerCase();
  if (!raw) return CHATBOT_DEFAULT_REPLY;

  for (const item of CHATBOT_QA) {
    const lq = item.q.toLowerCase();
    if (raw === lq || lq.includes(raw) || raw.includes(lq.slice(0, Math.min(24, lq.length)))) {
      return item.a;
    }
  }

  const stop = new Set(["the", "and", "for", "you", "are", "can", "how", "what", "when", "with", "that", "this", "from", "have", "does", "will", "your", "about", "into"]);
  const words = raw.split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !stop.has(w));

  let bestScore = 0;
  let bestAnswer = CHATBOT_DEFAULT_REPLY;

  for (const item of CHATBOT_QA) {
    const hay = item.q.toLowerCase() + " " + item.a.toLowerCase();
    let score = 0;
    for (const w of words) {
      if (hay.includes(w)) score += w.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.a;
    }
  }

  return bestScore >= 6 ? bestAnswer : CHATBOT_DEFAULT_REPLY;
}
